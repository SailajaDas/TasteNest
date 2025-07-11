import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-200 dark:bg-gray-900 text-gray-800 dark:text-white font-sans">
      {/* Header */}
      <section className="bg-gradient-to-r from-violet-500 to-purple-600 dark:from-gray-800 dark:to-gray-900 text-white py-20 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact Us</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Have questions or want to make a reservation? We’d love to hear from you!
        </p>
      </section>

      {/* Content */}
      <section className="py-16 px-6 md:px-20 grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            📍 Plot No A/66, 3rd Floor, NH 16, above Renault Showroom, beside LIC of India Branch-3, Nayapalli, Bhubaneswar, Odisha 751003
          </p>
          <p className="mb-4 text-gray-800 dark:text-gray-300">📞 080930 09605</p>
          <p className="mb-4 text-gray-900 dark:text-gray-300">📧 support@tastenest.com</p>

          <div className="mt-6">
            <h3 className="font-semibold text-lg mb-2">🕒 Hours:</h3>
            <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
              <li>Monday – Friday: 8:00 AM – 7:30 PM</li>
              <li>Saturday: 9:00 AM – 5:00 PM</li>
              <li>Sunday: 10:00 AM – 5:00 PM</li>
            </ul>
          </div>

          {/* Google Maps */}
          <div className="mt-8">
            <iframe
              title="TasteNest Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.4629434171154!2d85.8122651747404!3d20.29605961077312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909aa5a7c1f01%3A0x26dbf273da5bb4e5!2sLIC%20of%20India%20Branch-3%2C%20Nayapalli!5e0!3m2!1sen!2sin!4v1718095808120!5m2!1sen!2sin"
              className="w-full h-64 rounded-lg shadow-md border dark:border-gray-700"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
            ></textarea>
            <button
              type="submit"
              className="bg-violet-700 hover:bg-violet-900 text-white px-6 py-2 rounded-full font-medium transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
