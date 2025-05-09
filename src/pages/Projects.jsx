import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="w-full py-24 bg-gray-900/97">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl sm:text-4xl font-bold text-center text-gray-300 mb-16"
          data-aos="fade-up"
        >
          Featured Projects
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Project 1 */}
          <div
            className="w-full max-w-xs flex flex-col items-center justify-center mx-auto bg-blue-400 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img
              src="/My-Portfolio-Website/logos/cloudy.png"
              // alt="Portfolio Website"
              className="size-20 object-center block mx-auto"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Weather App
              </h3>
              <p className="text-gray-700 text-sm">
                Real-time weather insights made simple enter any city to get
                instant updates on temperature, humidity, and more.
              </p>
            </div>
          </div>

          {/* Project 2 */}
          <div
            className="w-full max-w-xs flex flex-col items-center justify-center mx-auto bg-blue-400 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img
              src="/My-Portfolio-Website/logos/rgb-svgrepo-com.svg"
              // alt="Space Game"
              className="size-20 object-center block mx-auto"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Generate CSS Color Gradient
              </h3>
              <p className="text-gray-700 text-sm">
                A one-click tool to create and copy unique CSS gradients,
                streamlining your design process with effortless color
                transitions.
              </p>
            </div>
          </div>

          {/* Project 3 */}
          <div
            className="w-full max-w-xs flex flex-col items-center justify-center mx-auto bg-blue-400 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <img
              src="/My-Portfolio-Website/logos/users-solid.svg"
              // alt="Employee Management System"
              className="size-10 object-center block mx-auto"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Employee Management System
              </h3>
              <p className="text-gray-700 text-sm">
                A streamlined system for efficiently storing and managing
                employee information, using React UI + Spring Boot backend +
                MongoDB full-stack app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
