
import React, { useState, useCallback, useMemo } from 'react';
import {
  countCharactersWithSpaces,
  countCharactersWithoutSpaces,
  countWords,
  countSentences,
  countLines,
} from '../utils/StringMath';

const MetricDisplay: React.FC<{ label: string; value: number }> = ({ label, value }) => (
  <div className="flex flex-col items-center justify-center bg-white/10 p-4 rounded-lg shadow-lg text-center backdrop-blur-sm">
    <span className="text-3xl md:text-4xl font-bold text-white tracking-wider">{value.toLocaleString()}</span>
    <span className="text-sm font-medium text-indigo-200 uppercase mt-1">{label}</span>
  </div>
);

const TextCounterTool: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [copyNotification, setCopyNotification] = useState<boolean>(false);

  const handleTextChange = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  }, []);

  const handleClearText = useCallback(() => {
    setText('');
  }, []);

  const handleCopyText = useCallback(() => {
    if (text) {
      navigator.clipboard.writeText(text);
      setCopyNotification(true);
      setTimeout(() => setCopyNotification(false), 2000);
    }
  }, [text]);

  const metrics = useMemo(() => ({
    charactersWithSpaces: countCharactersWithSpaces(text),
    charactersWithoutSpaces: countCharactersWithoutSpaces(text),
    words: countWords(text),
    sentences: countSentences(text),
    lines: countLines(text),
  }), [text]);

  return (
    <section id="counter-tool" className="relative mb-16">
      <div className="relative bg-black/30 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl p-6 md:p-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-2">Cosmic Text Counter</h1>
        <p className="text-center text-indigo-300 mb-6">Instantly analyze your text in real-time.</p>
        
        <div className="relative">
          <textarea
            value={text}
            onChange={handleTextChange}
            className="w-full h-64 md:h-80 p-4 bg-gray-900/50 text-gray-100 border-2 border-indigo-400/50 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all duration-300 placeholder-gray-400 resize-none text-lg leading-relaxed"
            placeholder="Start typing or paste your text here..."
          />
          <div className="absolute top-3 right-3 flex space-x-2">
            <button
              onClick={handleCopyText}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200 text-sm font-semibold disabled:opacity-50"
              disabled={!text}
            >
              Copy
            </button>
            <button
              onClick={handleClearText}
              className="px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition-colors duration-200 text-sm font-semibold disabled:opacity-50"
              disabled={!text}
            >
              Clear
            </button>
          </div>
        </div>

        {/* Metrics Dashboard */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <MetricDisplay label="Characters" value={metrics.charactersWithSpaces} />
          <MetricDisplay label="Characters (No Spaces)" value={metrics.charactersWithoutSpaces} />
          <MetricDisplay label="Words" value={metrics.words} />
          <MetricDisplay label="Sentences" value={metrics.sentences} />
          <MetricDisplay label="Lines" value={metrics.lines} />
        </div>
      </div>
      
      {/* Copy Notification */}
      <div className={`fixed bottom-5 right-5 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg transition-transform duration-300 ${copyNotification ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
        Text copied to clipboard!
      </div>
    </section>
  );
};

export default TextCounterTool;
   