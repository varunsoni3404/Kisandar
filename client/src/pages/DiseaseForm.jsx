import React, { useState } from 'react';
import axios from 'axios';

const DiseaseForm = () => {
  const [userInput, setUserInput] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSummarize = async () => {
    setLoading(true);
    setError('');
    try {
        const response = await axios.post('http://localhost:5000/summarize', {
            input: userInput,
        }, {
            withCredentials: true, 
        });
        setSummary(response.data.summary);
    } catch (err) {
        setError('Error generating summary. Please try again.');
    } finally {
        setLoading(false);
    }
};


  return (
    <div className="min-h-screen bg-green-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Text Summarizer</h1>
      <textarea
        className="w-full h-32 border border-green-400 p-2 rounded mb-4"
        placeholder="Enter text to summarize..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button
        onClick={handleSummarize}
        className="bg-green-500 text-white p-2 rounded"
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Generate Summary'}
      </button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {summary && (
        <div className="mt-6 p-4 border border-green-400 bg-white rounded">
          <h2 className="text-lg font-semibold">Summary:</h2>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
};

export default DiseaseForm;
