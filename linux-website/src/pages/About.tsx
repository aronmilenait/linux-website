import Footer from "../components/Footer";
import AboutImage from "../assets/about-page.avif";

const About = () => {
  return (
    <div className="bg-white text-teal-950">
      <section className="max-w-4xl mx-auto p-5 md:p-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-8 text-center">
          About this website
        </h1>
        <p className="text-lg md:text-xl mb-4 md:mb-8 leading-relaxed">
          Switch to Linux is a website that I created to practice my development
          skills, blending my passion for coding with my enthusiasm for
          GNU/Linux. But, who knows? Maybe someday it will became a real
          project.
          <br />
          <br />
          Please note that this website serves as a fictional project and does
          not represent any real initiative. All textual content, with the
          exception of this disclaimer, has been generated by AI. However, the
          information pertaining to Linux is authentic and based on real-world
          knowledge.
          <br />
          <br />
          Now, let's delve into another AI-generated text to fill the content of
          this page, providing a overview of this imaginary Linux project.
        </p>
        <div className="flex justify-center mb-4 md:mb-8">
          <img
            src={AboutImage}
            alt="Kid using Linux"
            className="w-full md:w-full rounded-xl shadow-xl"
          />
        </div>
        <p className="text-lg md:text-xl mb-4 md:mb-8 leading-relaxed">
          Switch to Linux is your go-to platform for seamlessly transitioning to
          the Linux operating system. Our goal is to empower individuals like
          you with the knowledge and tools necessary to fully embrace the power
          and versatility of Linux.
          <br />
          <br />
          Whether you're an experienced developer, a casual user seeking to
          break free from the limitations of proprietary software, or a curious
          newcomer eager to explore the realm of open-source technology, Switch
          to Linux is here to support you every step of the way.
          <br />
          <br />
          Through comprehensive tutorials, expert guides, and invaluable tips,
          we aim to demystify the intricacies of Linux and demonstrate how to
          leverage its vast potential. Bid farewell to software constraints,
          licensing expenses, and vendor lock-in, and unlock a realm of
          boundless customization, security, and innovation.
          <br />
          <br />
          Join our community of Linux enthusiasts, share your insights, and
          embark on a journey of discovery and empowerment with Switch to Linux.
          Together, let's embrace the freedom, flexibility, and ingenuity of the
          Linux ecosystem.
        </p>
      </section>
      <Footer />
    </div>
  );
};

export default About;
