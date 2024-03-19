import AboutImage from "../assets/hero-image.jpg";
import AnimatedQuote from "../assets/home-quote.mp4";

const About = () => {
  return (
    <section id="about" className="bg-teal-600">
      <div className="max-w-4xl mx-auto px-4 py-10 text-white">
        <h2 className="text-5xl font-bold mb-4 text-center">About</h2>
        <p className="text-xl mb-10">
          The primary objective of this website is to guide you through the
          process of transitioning to Linux, covering every aspect: from
          selecting your ideal distribution based on your PC's hardware and
          intended usage, to identifying the best desktop environment that suits
          your needs and conserves resources, and finally, guiding you through
          the installation and utilization process. <br></br> If you find
          yourself with an aging computer that struggles under Windows or Mac,
          or if you're simply intrigued by the GNU/Linux world and contemplating
          making the switch, then you've come to the right place!
        </p>
        <div className="flex justify-center py-5">
          <img
            src={AboutImage}
            alt="Hero image"
            className="w-full md:w-3/4 lg:w-3/4 xl:w-3/4 rounded-xl shadow-xl"
          />
        </div>
        <div className="flex justify-center mt-10">
          <video
            loop
            autoPlay
            className="w-full md:w-3/4 lg:w-3/4 xl:w-3/4 md:h-auto lg:h-auto xl:h-auto rounded-xl shadow-md"
          >
            <source src={AnimatedQuote} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default About;
