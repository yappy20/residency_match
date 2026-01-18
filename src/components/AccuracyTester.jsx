import React, { useState } from 'react';
import { testCases, validateResult } from '../utils/testData';
import { calculateMatchProbability } from '../utils/calculateMatch';
import './AccuracyTester.css';

export function AccuracyTester() {
  const [testResults, setTestResults] = useState([]);
  const [showTests, setShowTests] = useState(false);

  const runTests = () => {
    const results = testCases.map(testCase => {
      const result = calculateMatchProbability(testCase.specialty1, testCase.specialty2);
      const validation = validateResult(result.probability, testCase.expectedRange);
      
      return {
        ...testCase,
        result: result,
        validation: validation
      };
    });
    
    setTestResults(results);
    setShowTests(true);
  };

  return (
    <div className="accuracy-tester">
      <button onClick={runTests} className="test-btn">
        Run Accuracy Tests
      </button>
      
      {showTests && (
        <div className="test-results">
          <h3>Test Results</h3>
          <div className="test-summary">
            <div className="summary-item">
              <span className="summary-label">Total Tests:</span>
              <span className="summary-value">{testResults.length}</span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Passed:</span>
              <span className="summary-value passed">
                {testResults.filter(t => t.validation.valid).length}
              </span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Failed:</span>
              <span className="summary-value failed">
                {testResults.filter(t => !t.validation.valid).length}
              </span>
            </div>
          </div>
          
          <div className="test-list">
            {testResults.map((test, index) => (
              <div key={index} className={`test-item ${test.validation.valid ? 'pass' : 'fail'}`}>
                <div className="test-header">
                  <span className="test-name">{test.name}</span>
                  <span className={`test-status ${test.validation.valid ? 'pass' : 'fail'}`}>
                    {test.validation.valid ? '✓' : '✗'}
                  </span>
                </div>
                <div className="test-details">
                  <div className="test-detail-row">
                    <span className="detail-label">Actual Probability:</span>
                    <span className="detail-value">{test.validation.actual}%</span>
                  </div>
                  <div className="test-detail-row">
                    <span className="detail-label">Expected Range:</span>
                    <span className="detail-value">{test.validation.expected.min}% - {test.validation.expected.max}%</span>
                  </div>
                  <div className="test-detail-row">
                    <span className="detail-label">Result:</span>
                    <span className="detail-value">{test.validation.message}</span>
                  </div>
                  <div className="test-detail-row">
                    <span className="detail-label">Reason:</span>
                    <span className="detail-value">{test.reason}</span>
                  </div>
                  {test.result.details && (
                    <div className="test-detail-row">
                      <span className="detail-label">Hospitals with both:</span>
                      <span className="detail-value">{test.result.details.hospitalsWithBoth || 'N/A'}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}