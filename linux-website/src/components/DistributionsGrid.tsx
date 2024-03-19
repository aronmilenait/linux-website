const DistributionsGrid = () => {
  const distributions = [
    {
      name: "Ubuntu",
      logo: "https://imgs.search.brave.com/MHeiTkAgH1OMckax0U1BvLmfYkjkO36jny1oznlWnhQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9icmFu/ZHNsb2dvcy5jb20v/d3AtY29udGVudC91/cGxvYWRzL2ltYWdl/cy91YnVudHUtbG9n/by5wbmc",
      website: "https://www.ubuntu.com/",
      description:
        "A versatile and user-friendly Linux distro known for its extensive software library and strong community support.",
    },
    {
      name: "Debian",
      logo: "https://imgs.search.brave.com/PCngmrKeHG6hTLJ03Qz860fbhexJs57Tdjqoakzfq-Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzY2L09wZW5sb2dv/LWRlYmlhblYyLnN2/Zw.svg",
      website: "https://www.debian.org/",
      description:
        "Renowned for its stability and adherence to free software principles, Debian is a solid choice for servers and desktops alike.",
    },
    {
      name: "Linux Mint",
      logo: "https://imgs.search.brave.com/9pu4J3J7V8EJerkJx1HPpEs-ChONJXcdS7wKEcmLKfs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9icmFu/ZHNsb2dvcy5jb20v/d3AtY29udGVudC91/cGxvYWRzL2ltYWdl/cy9saW51eC1taW50/LWxvZ28ucG5n",
      website: "https://www.linuxmint.com/",
      description:
        "Offering a polished desktop environment and user-friendly experience, Linux Mint is perfect for newcomers to Linux.",
    },
    {
      name: "Manjaro",
      logo: "https://imgs.search.brave.com/A6GMqWFTjXPhe5JODvO98Xek81djWymeMQKESeF1R58/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8z/LzNlL01hbmphcm8t/bG9nby5zdmc.svg",
      website: "https://manjaro.org/",
      description:
        "With its rolling release model and focus on cutting-edge software, Manjaro provides a dynamic and customizable Linux experience.",
    },
  ];

  return (
    <section id="distributions" className="bg-teal-600">
      <div className="max-w-4xl mx-auto container mx-auto py-10">
        <h3 className="text-center text-5xl font-bold text-white mb-8">
          Distributions
        </h3>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {distributions.map((distribution) => (
            <div
              key={distribution.name}
              className="bg-white shadow-md rounded-lg border-4 border-teal-700 p-8 flex flex-col items-center"
            >
              <img
                src={distribution.logo}
                alt={distribution.name}
                className="w-24 h-24 mb-4 transition-transform duration-500 transform-gpu hover:rotate-12"
              />
              <p className="text-2xl font-bold mb-2 text-teal-950">{distribution.name}</p>
              <p className="text-lg text-center mb-4">
                {distribution.description}
              </p>
              <a
                href={distribution.website}
                className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-lg shadow-md"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DistributionsGrid;
