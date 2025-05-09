import React, { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_hr13sok", // ✅ Your Service ID
        "template_lhqxaor", // ✅ Your Template ID
        formRef.current,
        "YwJLEwkED_TwrTPDl" // ✅ Your Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsLoading(false);
          alert("Message sent successfully!");
          formRef.current.reset(); // Clear the form
        },
        (error) => {
          console.log(error.text);
          setIsLoading(false);
          alert("Failed to send message. Try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-900/97">
      <div className="max-w-6xl mx-auto text-center text-gray-300">
        <h3 className="text-3xl font-bold mb-6" data-aos="zoom-in">
          Let's Connect
        </h3>

        <form
          ref={formRef}
          className="space-y-6 max-w-xl mx-auto"
          onSubmit={sendEmail}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div data-aos="fade-right" data-aos-delay="300">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded bg-gray-700 text-white focus:outline-none"
              required
            />
          </div>
          <div data-aos="fade-left" data-aos-delay="400">
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded bg-gray-700 text-white focus:outline-none"
              required
            />
          </div>
          <div data-aos="fade-up" data-aos-delay="500">
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded bg-gray-700 text-white focus:outline-none"
              required
            ></textarea>
          </div>

          {/* Submit Button in Center */}
          <div
            className="flex justify-center"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded text-white font-semibold flex items-center space-x-2"
            >
              <span>Send Message</span>
              {isLoading && (
                <span className="spinner border-2 border-white border-l-transparent border-solid w-4 h-4 rounded-full animate-spin"></span>
              )}
            </button>
          </div>
        </form>

        {/* Contact Info */}
        <p
          className="mt-8 text-gray-300"
          data-aos="fade-in"
          data-aos-delay="700"
        >
          Contact: Suraj Kumar Bind | 9795524116 | skbindpurwa@gmail.com
        </p>
      </div>
    </section>
  );
};

export default Contact;
