const ContactUs = () => {
    return (
      <main className="min-h-screen bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Name</label>
            <input
              type="text"
              className="w-full border px-4 py-2 rounded"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Email</label>
            <input
              type="email"
              className="w-full border px-4 py-2 rounded"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Message</label>
            <textarea
              className="w-full border px-4 py-2 rounded"
              rows="4"
              placeholder="Your Message"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </main>
    );
  };
  
  export default ContactUs;
  