const AboutPage = () => {
    return (
      <main className="min-h-screen bg-white py-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed text-justify">
            Welcome to the Typing Speed Test application! Whether you're looking to improve your typing skills for professional use, school, or personal challenge, we are here to help. Our tool is designed to track your typing speed and accuracy as you type sentences, providing you with helpful insights and data to monitor your progress over time.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed text-justify">
            We believe in providing a fun, engaging way to enhance your typing abilities. With our platform, you can test your skills with random sentences, track your errors, and challenge yourself to improve your speed. This tool is suitable for all skill levels, from beginners to seasoned typists, allowing everyone to enjoy and grow.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed text-justify">
            We hope this tool serves as an enjoyable resource for practicing typing, learning new techniques, and ultimately improving your efficiency. Join us, and let’s embark on this journey to become faster and more accurate typists!
          </p>
        </div>
        <div className="max-w-3xl mx-auto mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-left">
            <li>Improve typing speed and accuracy in an engaging and interactive way.</li>
            <li>Track your progress with detailed stats and insights.</li>
            <li>Test your skills with sentences of varying complexity.</li>
            <li>Free and easy to use, with no registration required.</li>
          </ul>
        </div>
      </main>
    );
  };
  
  export default AboutPage;
  