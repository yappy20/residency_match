import React, { useState } from 'react';
import { testCases, individualMatchTestCases, couplesMatchTestCases, validateResult } from '../utils/testData';
import { calculateMatchProbability } from '../utils/calculateMatch';
import { calculateIndividualMatchProbability } from '../utils/nrmpMatch';
import { performCouplesMatch } from '../utils/nrmpMatch';
import { getAllHospitals } from '../data/hospitals';
import './AccuracyTester.css';

export function AccuracyTester() {
    const [testResults, setTestResults] = useState([]);
    const [showTests, setShowTests] = useState(false);

    const runTests = () => {
        const allResults = [];

        // Test 1: Couple Match Calculator (Specialty Combinations)
        const coupleMatchResults = testCases.map(testCase => {
            const result = calculateMatchProbability(testCase.specialty1, testCase.specialty2);
            const validation = validateResult(result.probability, testCase.expectedRange);

            return {
                category: 'Couple Match Calculator',
                ...testCase,
                result: result,
                validation: validation
            };
        });
        allResults.push(...coupleMatchResults);

        // Test 2: Individual Match Calculator (2025 NRMP Data)
        const allHospitals = getAllHospitals();
        const sampleHospital = allHospitals[0]; // Use first hospital for testing
        const individualResults = individualMatchTestCases.map(testCase => {
            const profile = {
                status: testCase.status,
                step1Score: testCase.step1Score.toString(),
                step2Score: testCase.step2Score.toString(),
                specialty: 'internal-medicine'
            };
            const probability = calculateIndividualMatchProbability(profile, sampleHospital, 'internal-medicine');
            const actualProb = (probability * 100).toFixed(1);
            const validation = validateResult(parseFloat(actualProb), testCase.expectedRange);

            return {
                category: 'Individual Match Calculator (2025 NRMP)',
                name: testCase.name,
                status: testCase.status,
                expectedRange: testCase.expectedRange,
                reason: testCase.reason,
                result: { probability: actualProb },
                validation: validation
            };
        });
        allResults.push(...individualResults);

        // Test 3: NRMP Couples Match Simulator (2025 NRMP Data)
        const couplesMatchResults = couplesMatchTestCases.map(testCase => {
            const user1Profile = {
                status: testCase.user1Status,
                step1Score: '240',
                step2Score: '240',
                specialty: 'internal-medicine',
                yearOfGraduation: '2024'
            };
            const user2Profile = {
                status: testCase.user2Status,
                step1Score: '240',
                step2Score: '240',
                specialty: 'internal-medicine',
                yearOfGraduation: '2024'
            };

            // Create simple rank lists (same hospital for both)
            const rankList = sampleHospital ? [sampleHospital] : [];
            const matchResult = performCouplesMatch(user1Profile, rankList, user2Profile, rankList);

            // Calculate combined probability
            if (rankList.length > 0 && sampleHospital) {
                const prob1 = calculateIndividualMatchProbability(user1Profile, sampleHospital, 'internal-medicine');
                const prob2 = calculateIndividualMatchProbability(user2Profile, sampleHospital, 'internal-medicine');
                const combinedProb = (prob1 * prob2 * 100).toFixed(1);
                const validation = validateResult(parseFloat(combinedProb), testCase.expectedRange);

                return {
                    category: 'NRMP Couples Match Simulator (2025 NRMP)',
                    name: testCase.name,
                    user1Status: testCase.user1Status,
                    user2Status: testCase.user2Status,
                    expectedRange: testCase.expectedRange,
                    reason: testCase.reason,
                    result: { probability: combinedProb },
                    validation: validation
                };
            }
            return null;
        }).filter(r => r !== null);
        allResults.push(...couplesMatchResults);

        setTestResults(allResults);
        setShowTests(true);
    };

    return (
        <div className="accuracy-tester">
            <button onClick={runTests} className="test-btn">
                Run Accuracy Tests
            </button>

            {showTests && (
                <div className="test-results">
                    <h3>Accuracy Test Results (Based on 2025 NRMP Data)</h3>
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

                    {/* Group tests by category */}
                    {['Couple Match Calculator', 'Individual Match Calculator (2025 NRMP)', 'NRMP Couples Match Simulator (2025 NRMP)'].map(category => {
                        const categoryTests = testResults.filter(t => t.category === category);
                        if (categoryTests.length === 0) return null;

                        return (
                            <div key={category} className="test-category">
                                <h4>{category}</h4>
                                <div className="test-list">
                                    {categoryTests.map((test, index) => (
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
                                                {test.result && test.result.details && (
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
                        );
                    })}
                </div>
            )}
        </div>
    );
}