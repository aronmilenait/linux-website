const DesktopEnvironmentsGrid = () => {
  const desktopEnvironments = [
    {
      name: "KDE Plasma",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Plasma_coloured_logo.svg",
      website: "https://kde.org/",
      description:
        "A customizable and feature-rich Linux desktop environment with a modern look and feel.",
    },
    {
      name: "GNOME",
      logo: "https://cdn.icon-icons.com/icons2/1508/PNG/512/desktopenvironmentgnome_104108.png",
      website: "https://www.gnome.org/",
      description:
        "A sleek and user-friendly Linux desktop environment designed for simplicity and productivity.",
    },
    {
      name: "Cinnamon",
      logo: "https://imgs.search.brave.com/aTX7ZLuPqyxZcledlv6jdIi3mUfzz5Ek6Ng3dpeoXXE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/b3BlbnNvdXJjZWZl/ZWQub3JnL2Fzc2V0/cy9pbWFnZXMvbG9n/by9jaW5uYW1vbi5w/bmc",
      website: "https://cinnamon-spices.linuxmint.com/",
      description:
        "A modern and elegant Linux desktop environment known for its familiar layout and extensive customization options.",
    },
    {
      name: "XFCE",
      logo: "https://cdn.icon-icons.com/icons2/3915/PNG/512/xfce_logo_icon_249145.png",
      website: "https://www.xfce.org/",
      description:
        "A lightweight yet powerful Linux desktop environment focused on speed, efficiency, and flexibility.",
    },
  ];

  return (
    <section id="options" className="bg-white">
      <div className="max-w-4xl mx-auto container mx-auto py-10">
        <h4 className="text-center text-5xl font-bold text-teal-900 mb-8">
          Desktop Environments
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {desktopEnvironments.map((desktop) => (
            <div
              key={desktop.name}
              className="bg-white shadow-md rounded-lg border-4 border-teal-700 p-8 flex flex-col items-center"
            >
              <img
                src={desktop.logo}
                alt={desktop.name}
                className="w-24 h-24 mb-4 transition-transform duration-500 transform-gpu hover:rotate-12"
              />
              <p className="text-2xl font-bold mb-2 text-teal-950">{desktop.name}</p>
              <p className="text-lg text-center mb-4">{desktop.description}</p>
              <a
                href={desktop.website}
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

export default DesktopEnvironmentsGrid;
