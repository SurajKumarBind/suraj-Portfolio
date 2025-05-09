import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-28 pb-16 bg-gray-900/97"
    >
      <h2
        className="text-4xl md:text-5xl font-extrabold text-gray-300 mb-4"
        data-aos="fade-up"
      >
        Hey, I'm <span className="text-blue-500">Suraj</span>
      </h2>
      <p
        className="text-gray-400 text-lg max-w-xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        Passionate Full Stack Developer crafting seamless web experiences with
        expertise in React, Java, Node.js, Spring Boot, MySQL, and MongoDB.
        Transforming ideas into elegant, scalable, and efficient digital
        solutions.
      </p>
      <a
        href="#projects"
        className="mt-8 bg-blue-600 hover:bg-blue-700 px-6 py-3 text-white font-semibold rounded-full transition"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        See My Work
      </a>
    </section>
  );
};

export default Hero;
