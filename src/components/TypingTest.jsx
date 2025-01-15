import { useState, useEffect } from "react";
const TypingTest = () => {
    // Sentences to type (with sentences longer than 20 words)
    const sentences = [
      "The quick brown fox jumps over the lazy dog while the moonlight shines bright over the hills and the stars twinkle like diamonds in the sky, making the night more beautiful.",
      "React makes it painless to create interactive UIs, enabling developers to build reusable components and manage state efficiently, allowing for high-performance applications.",
      "Build encapsulated components that manage their state and can be reused across multiple views, reducing the need for repetitive code and simplifying the development process.",
      "A journey of a thousand miles begins with a single step, so it's important to take that step every day and keep moving forward toward your goals and aspirations.",
      "To be or not to be, that is the question we often ask ourselves when faced with difficult decisions in life, pondering our purpose and the meaning of our existence."
    ];
  
    // States
    const [sentence, setSentence] = useState(""); // The sentence to type
    const [input, setInput] = useState(""); // User input
    const [startTime, setStartTime] = useState(null); // Start time of the test
    const [isTestStarted, setIsTestStarted] = useState(false); // Whether test is started
    const [isTestFinished, setIsTestFinished] = useState(false); // Whether test is finished
    const [errorCount, setErrorCount] = useState(0); // To count typing errors
    const [wpm, setWpm] = useState(0); // Words per minute
  
    // Randomly select a sentence
    useEffect(() => {
      setSentence(sentences[Math.floor(Math.random() * sentences.length)]);
    }, []);
  
    // Handle input change
    const handleInputChange = (event) => {
      if (!isTestStarted) {
        setIsTestStarted(true);
        setStartTime(Date.now());
      }
  
      const typedText = event.target.value;
      setInput(typedText);
  
      // Count errors
      let errors = 0;
      for (let i = 0; i < typedText.length; i++) {
        if (typedText[i] !== sentence[i]) errors++;
      }
      setErrorCount(errors);
  
      // If the user finishes typing correctly
      if (typedText === sentence) {
        const timeTaken = (Date.now() - startTime) / 1000; // in seconds
        const wordsTyped = typedText.split(" ").length;
        const wpmCalculated = (wordsTyped / timeTaken) * 60; // words per minute
        setWpm(wpmCalculated.toFixed(2));
        setIsTestFinished(true);
      }
    };
  
    // Reset the test
    const resetTest = () => {
      setInput("");
      setIsTestStarted(false);
      setIsTestFinished(false);
      setErrorCount(0);
      setWpm(0);
      setSentence(sentences[Math.floor(Math.random() * sentences.length)]);
    };
  
    return (
      <div className="min-h-screen bg-white flex justify-center items-start py-8">
        <div className="w-full max-w-7xl px-6">
          <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center">Typing Speed Test</h2>
          {!isTestFinished ? (
            <div className="w-full p-8 bg-gray-50 rounded-lg shadow-lg">
              <p className="text-lg font-medium text-gray-700 mb-4">
                Type the following sentence as fast as you can:
              </p>
              <p className="text-xl font-semibold text-gray-900 mb-6">{sentence}</p>
  
              <textarea
                className="w-full h-40 p-4 border border-gray-300 rounded-lg shadow-sm mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Start typing..."
                value={input}
                onChange={handleInputChange}
                disabled={isTestFinished}
              />
  
              {isTestStarted && (
                <p className="text-gray-500 text-sm mb-2">
                  Time: {((Date.now() - startTime) / 1000).toFixed(2)} seconds
                </p>
              )}
              
              {input && <p className="text-red-500 text-sm mb-2">Errors: {errorCount}</p>}
            </div>
          ) : (
            <div className="w-full p-8 bg-gray-50 rounded-lg shadow-lg">
              <h3 className="text-2xl text-green-500 font-bold mb-4">Test Completed!</h3>
              <p className="text-xl text-gray-700 mb-4">
                Your typing speed is: <strong>{wpm} WPM</strong>
              </p>
              <p className="text-gray-500 mb-6">Errors: {errorCount}</p>
              <button
                className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
                onClick={resetTest}
              >
                Try Again
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default TypingTest;
  