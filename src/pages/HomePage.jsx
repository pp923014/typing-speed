const HomePage = () => {
    return (
      <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12 text-center">
        {/* Header Section */}
        <section className="mb-12 w-full max-w-3xl">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Typing Speed Test
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Test your typing speed and accuracy in a fun and interactive way!
          </p>
          <a
            href="/typing-test"
            className="bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Start Test
          </a>
        </section>
  
        {/* Features Section */}
        <section className="w-full max-w-4xl mb-16 text-left">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Speed Calculation</h3>
              <p className="text-gray-600">
                Track your typing speed in words per minute (WPM) as you type and see your progress.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Accuracy Check</h3>
              <p className="text-gray-600">
                Test your accuracy with real-time feedback on your typing errors.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Progress Tracking</h3>
              <p className="text-gray-600">
                Track your typing history and compare your results with others.
              </p>
            </div>
          </div>
        </section>
  
        {/* Instructions Section */}
        <section className="w-full max-w-3xl mb-16 text-left">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">How to Play</h2>
          <ul className="list-inside list-disc text-lg text-gray-600 space-y-4">
            <li>Click the "Start Test" button to begin typing.</li>
            <li>Type the sentence shown as quickly and accurately as possible.</li>
            <li>See your typing speed (WPM) and errors after completing the test.</li>
            <li>Try again to improve your score!</li>
          </ul>
        </section>
  
        {/* Footer Section */}
        <footer className="w-full bg-gray-100 py-6 text-center">
          <p className="text-sm text-gray-600">
            Created with ❤️ by Your Name | Typing Speed Test App
          </p>
        </footer>
      </main>
    );
  };
  
  export default HomePage;
  