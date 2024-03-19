import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";
import DistributionsGrid from "../components/DistributionsGrid";
import DesktopEnvironmentsGrid from "../components/DesktopEnvironmentsGrid";
import WhyLinux from "../components/WhyLinux";

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <WhyLinux />
            <DistributionsGrid />
            <DesktopEnvironmentsGrid />
            <Footer />
        </>
    );
}