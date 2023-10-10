function Contact() {
  return (
    <div className="h-screen px-4">
      <h1 className="font-bold text-sm text-center py-8">CONTACT</h1>
      <div className="container lg:w-8/12 mx-auto my-8 p-8 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-700 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quae
          quis nesciunt quia facilis sunt velit assumenda necessitatibus
          asperiores odio?
        </p>
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Your name"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Your email address"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-600"
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Your message"
              rows="4"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* SocialIcons.js */}

      <div className="container mx-auto flex items-center justify-center space-x-8">
        {/* Twitter */}
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn.worldvectorlogo.com/logos/twitter-6.svg"
            alt="Twitter"
            className="w-8 h-8 cursor-pointer"
          />
        </a>

        {/* Facebook */}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.worldvectorlogo.com/logos/facebook-3-2.svg"
            alt="Facebook"
            className="w-8 h-8 cursor-pointer"
          />
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.worldvectorlogo.com/logos/instagram-2016-5.svg"
            alt="Instagram"
            className="w-8 h-8 cursor-pointer"
          />
        </a>

        {/* Gmail */}
        <a href="mailto:your-email@gmail.com">
          <img
            src="https://cdn.worldvectorlogo.com/logos/official-gmail-icon-2020-.svg"
            alt="Gmail"
            className="w-8 h-8 cursor-pointer"
          />
        </a>
      </div>
    </div>
  );
}

export default Contact;
