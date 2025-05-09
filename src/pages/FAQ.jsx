import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const faqs = [
  {
    question: "Are you available for full-time or freelance opportunities?",
    answer:
      "Yes, I’m open to both full-time and freelance opportunities. Feel free to reach out via the contact section to discuss potential collaboration.",
  },
  {
    question: "Are you experienced in building full-stack web applications?",
    answer:
      "Absolutely! I specialize in delivering complete end-to-end solutions — from backend logic to a fully functional frontend interface. I focus on building reliable, scalable, and user-friendly web applications.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-40 bg-gray-900/97 text-gray-300">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-18" data-aos="fade-up">
          Frequently Asked Questions
        </h3>
        <div className="space-y-0.1 grid sm:grid-cols-2 gap-15 mx-15 h-20">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800 backdrop-blur-md p-4 rounded-lg shadow-md transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <h4 className="text-lg font-semibold text-blue-300">
                  Q: {faq.question}
                </h4>
                <svg
                  className={`w-5 h-5 text-blue-300 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <p className="mt-4 text-gray-300 text-base leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
