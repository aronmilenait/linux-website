import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Footer from "../components/Footer";

import animatedQuote from "../assets/animated-quote.mp4";

const contactData = [
  {
    name: "GitHub",
    icon: faGithub,
    link: "https://github.com/aronmilenait",
  },
  {
    name: "LinkedIn",
    icon: faLinkedin,
    link: "https://www.linkedin.com/in/milenasaron",
  },
  {
    name: "Portfolio",
    icon: faGlobe,
    link: "https://milenasaron.vercel.app",
  },
];

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-teal-950">
      <section className="flex-grow max-w-4xl mx-auto p-5 md:p-10">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Contact
          </h1>
          <p className="text-lg mb-6 text-center">
            This website was created as a developer project to refine my skills
            and enhance my portfolio. Inspired by my lifelong affinity for
            Linux, I chose a Linux-themed design. The website was built using
            Vite, TypeScript, React, and Tailwind CSS, with pagination
            implemented through React Router DOM. <br></br>
            Feel free to reach out to me through the links below.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center bg-teal-700 rounded-lg p-6 shadow-md mt-8 md:mt-4">
            {contactData.map((data, index) => (
              <a
                href={data.link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="flex flex-col items-center justify-center text-white text-lg md:text-xl hover:text-teal-100 transition duration-300"
              >
                <FontAwesomeIcon icon={data.icon} size="2x" />
                <span className="mt-2">{data.name}</span>
              </a>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <video
              loop
              autoPlay
              className="w-full md:w-3/4 rounded-xl shadow-md"
            >
              <source src={animatedQuote} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
