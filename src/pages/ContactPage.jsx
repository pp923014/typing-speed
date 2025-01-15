const ContactPage = () => {
    return (
      <main className="min-h-screen bg-white py-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            We’d love to hear from you! Whether you have a question, feedback, or just want to get in touch, feel free to drop us a message. Our team is always happy to assist you.
          </p>
        </div>
  
        <div className="max-w-3xl mx-auto">
          <form className="bg-gray-100 p-6 rounded-lg shadow-md space-y-6">
            <div className="mb-4">
              <label className="block text-gray-600 mb-2 text-left">Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
  
            <div className="mb-4">
              <label className="block text-gray-600 mb-2 text-left">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
              />
            </div>
  
            <div className="mb-4">
              <label className="block text-gray-600 mb-2 text-left">Message</label>
              <textarea
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="6"
                placeholder="Your Message"
              />
            </div>
  
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
  
        <div className="max-w-3xl mx-auto text-center mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Need Assistance?</h3>
          <p className="text-lg text-gray-700">
            If you have any urgent inquiries, feel free to reach us at <strong>support@typingspeedtest.com</strong> and we will get back to you as soon as possible.
          </p>
        </div>
      </main>
    );
  };
  
  export default ContactPage;
  