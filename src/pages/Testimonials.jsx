import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    name: "Rahul Singh",
    feedback:
      "Suraj is a very talented developer. His dedication and attention to detail made our project a success!",
  },
  {
    name: "Anjali Mehta",
    feedback:
      "Working with Suraj was a pleasure. He communicates clearly and delivers clean, efficient code.",
  },
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="testimonials"
      className="bg-gray-900/97 text-gray-300 py-30 px-6"
    >
      <div className="max-w-[1000px] mx-auto">
        <p className="text-3xl font-bold text-center" data-aos="fade-up">
          What People Say
        </p>
        <p className="text-center py-5" data-aos="fade-up" data-aos-delay="100">
          What people say about working with me
        </p>

        <div className="grid sm:grid-cols-2 gap-9">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#112240] p-6 rounded-md shadow-md shadow-[#040c16] hover:scale-105 duration-300"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <p className="text-lg italic">"{testimonial.feedback}"</p>
              <p className="mt-4 text-right text-pink-200 font-bold">
                — {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
