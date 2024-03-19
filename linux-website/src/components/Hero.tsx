import TuxImage from "../assets/tux.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-white py-20 flex justify-center items-center"
    >
      <div className="text-center text-teal-900 max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold mb-4">Switch to Linux</h1>
        <p className="text-2xl mb-8 italic">Where the only limit is your imagination.</p>
        <div className="flex justify-center mb-10">
          <img src={TuxImage} alt="Tux image" className="w-1/2 hero-image" />
        </div>
        <div className="flex justify-center">
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg shadow-md mr-4 transition duration-300">
            Learn More
          </button>
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
