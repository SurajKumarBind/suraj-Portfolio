import React from "react";

const skills = [
  { name: "HTML", logo: "/My-Portfolio-Website/logos/html-5.svg" },
  { name: "CSS", logo: "/My-Portfolio-Website/logos/css-3.svg" },
  { name: "Bootstrap", logo: "/My-Portfolio-Website/logos/bootstrap-4.svg" },
  { name: "Tailwind", logo: "/My-Portfolio-Website/logos/tailwind-css.svg " },
  { name: "JavaScript", logo: "/My-Portfolio-Website/logos/javascript-js.svg" },
  { name: "React", logo: "/My-Portfolio-Website/logos/react.svg" },
  { name: "GitHub", logo: "/My-Portfolio-Website/logos/github.svg" },
  { name: "Java", logo: "/My-Portfolio-Website/logos/java-ar21.svg" },
  {
    name: "Spring Boot",
    logo: "/My-Portfolio-Website/logos/springio-ar21.svg",
  },
  { name: "MySQL", logo: "/My-Portfolio-Website/logos/mysql-ar21.svg" },
  { name: "MongoDB", logo: "/My-Portfolio-Website/logos/mongodb.svg" },
  { name: "REST API", logo: "/My-Portfolio-Website/logos/rest-api-icon.svg" },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-900/97 text-gray-300 py-14 px-6">
      <div className="max-w-[1000px] mx-auto">
        <p className="text-4xl font-bold text-center" data-aos="fade-up">
          Skills
        </p>
        <p className="text-center py-4" data-aos="fade-up" data-aos-delay="100">
          These are the technologies I've worked with
        </p>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-center py-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-3 px-4 bg-[#112240] rounded-md flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay={`${index * 1}`}
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-12 h-12 mb-3"
              />
              <p className="text-xl font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
