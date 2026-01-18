import React, { useState } from 'react';
import { getAllHospitals } from '../data/hospitals';
import './RankListUploader.css';

export function RankListUploader({ onRankListParsed, userLabel = 'User', hideUploadButton = false }) {
  const [file, setFile] = useState(null);
  const [extractedText, setExtractedText] = useState('');
  const [parsedHospitals, setParsedHospitals] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);

  const allHospitals = getAllHospitals();

  // Function to normalize hospital names for matching
  const normalizeHospitalName = (name) => {
    return name.toLowerCase()
      .replace(/[^\w\s]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  };

  // Extract hospital names from text
  const extractHospitalNames = (text) => {
    const normalizedText = normalizeHospitalName(text);
    const foundHospitals = [];
    const usedHospitalIds = new Set();

    // Split text into lines
    const lines = text.split('\n').map(line => line.trim()).filter(line => line);

    // Try to match each line with hospitals in database
    for (const line of lines) {
      if (!line || line.length < 3) continue;

      const normalizedLine = normalizeHospitalName(line);
      
      // Try to find matching hospital
      for (const hospital of allHospitals) {
        const normalizedHospitalName = normalizeHospitalName(hospital.name);
        const normalizedLocation = normalizeHospitalName(hospital.location);

        // Check if line contains hospital name or location
        if (normalizedLine.includes(normalizedHospitalName) || 
            normalizedHospitalName.includes(normalizedLine.substring(0, 10)) ||
            normalizedLine.includes(normalizedLocation)) {
          
          if (!usedHospitalIds.has(hospital.id)) {
            foundHospitals.push(hospital);
            usedHospitalIds.add(hospital.id);
            break;
          }
        }
      }
    }

    // Also search in full text for hospital names
    for (const hospital of allHospitals) {
      if (usedHospitalIds.has(hospital.id)) continue;

      const normalizedHospitalName = normalizeHospitalName(hospital.name);
      if (normalizedText.includes(normalizedHospitalName)) {
        foundHospitals.push(hospital);
        usedHospitalIds.add(hospital.id);
      }
    }

    return foundHospitals;
  };

  // Handle file selection
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    if (!selectedFile.type.match(/^(application\/pdf|image\/(jpeg|jpg|png|gif|bmp|webp))$/i)) {
      setError('Please upload a PDF or image file (JPEG, PNG, GIF, BMP, WebP)');
      return;
    }

    setFile(selectedFile);
    setError(null);
    setExtractedText('');
    setParsedHospitals([]);
    processFile(selectedFile);
  };

  // Process file and extract text
  const processFile = async (fileToProcess) => {
    setIsProcessing(true);
    setError(null);

    try {
      if (fileToProcess.type === 'application/pdf') {
        // For PDFs, we'll use a simple approach - PDF.js would be better but requires additional setup
        // For now, show instructions to copy-paste or use a simpler method
        setError('PDF parsing requires additional setup. Please extract text from PDF and paste it below, or use an image screenshot instead.');
        setIsProcessing(false);
        return;
      } else if (fileToProcess.type.startsWith('image/')) {
        // For images, we'll need OCR - for now, provide manual text input option
        setError('Image OCR requires additional setup. Please extract text from image and paste it below, or convert image to text first.');
        setIsProcessing(false);
        return;
      }
    } catch (err) {
      setError(`Error processing file: ${err.message}`);
      setIsProcessing(false);
    }
  };

  // Handle manual text input
  const handleTextPaste = (e) => {
    const text = e.target.value;
    setExtractedText(text);
    
    if (text.length > 0) {
      const hospitals = extractHospitalNames(text);
      setParsedHospitals(hospitals);
      
      if (hospitals.length > 0) {
        onRankListParsed(hospitals);
      } else {
        setError('No hospitals found in the text. Please ensure hospital names are clearly listed.');
      }
    } else {
      setParsedHospitals([]);
      onRankListParsed([]);
    }
  };

  return (
    <div className="rank-list-uploader">
      <h4>{userLabel} Rank List</h4>
      
      <div className="upload-instructions">
        <p><strong>How to upload your rank list:</strong></p>
        <ol>
          <li><strong>Option 1 (Recommended):</strong> Copy text from your PDF or image and paste it in the text box below</li>
          <li><strong>Option 2:</strong> Upload a PDF or image file (text extraction will be available soon)</li>
        </ol>
        <p className="instruction-note">
          Your rank list should include hospital names, one per line. Examples: "Johns Hopkins Hospital", "Mayo Clinic", "Massachusetts General Hospital"
        </p>
      </div>

      <div className="text-input-section">
        <label><strong>Paste your rank list here (one hospital per line):</strong></label>
        <textarea
          value={extractedText}
          onChange={handleTextPaste}
          placeholder="Example rank list:&#10;1. Johns Hopkins Hospital&#10;2. Mayo Clinic College of Medicine (Rochester)&#10;3. Massachusetts General Hospital&#10;4. Cleveland Clinic&#10;5. UCSF Medical Center&#10;&#10;Or paste your entire rank list from your document..."
          className="text-input-area"
          rows={10}
        />
        <p className="text-input-hint">
          💡 Tip: Copy the hospital names from your PDF or image document and paste them here. The system will automatically match them to hospitals in our database.
        </p>
      </div>

      {!hideUploadButton && (
        <div className="upload-section">
          <p className="upload-section-label"><strong>Or upload a file:</strong></p>
          <label className="file-upload-label">
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png,.gif,.bmp,.webp,application/pdf,image/*"
              onChange={handleFileChange}
              className="file-input"
            />
            <span className="file-upload-button">
              {isProcessing ? '⏳ Processing...' : '📄 Click to Upload PDF or Image'}
            </span>
          </label>
          <p className="upload-hint">
            After selecting a file, you'll need to copy text from it and paste it in the box above. Automatic text extraction coming soon!
          </p>
          
          {file && (
            <div className="file-info">
              <span className="file-name">✓ Selected: <strong>{file.name}</strong></span>
              <p className="file-note">💡 Copy text from this file and paste it in the text box above to extract hospital names.</p>
            </div>
          )}
        </div>
      )}

      {error && (
        <div className="upload-error">
          {error}
        </div>
      )}

      {parsedHospitals.length > 0 && (
        <div className="parsed-hospitals">
          <h5>Found {parsedHospitals.length} Hospital(s):</h5>
          <div className="parsed-list">
            {parsedHospitals.map((hospital, index) => (
              <div key={hospital.id} className="parsed-hospital-item">
                <span className="parsed-rank">#{index + 1}</span>
                <span className="parsed-name">{hospital.name}</span>
                <span className="parsed-location">{hospital.location}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {parsedHospitals.length === 0 && extractedText.length > 50 && (
        <div className="upload-warning">
          No hospitals matched. Please ensure hospital names match our database. You can also manually select hospitals below.
        </div>
      )}
    </div>
  );
}