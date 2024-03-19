const reasonsToChooseLinux = [
  {
    title: "Flexibility",
    description:
      "Linux offers unparalleled flexibility and customization. You have complete control over your system, allowing you to tailor it to your specific needs.",
  },
  {
    title: "Stability",
    description:
      "Linux is known for its stability and reliability. It's less prone to crashes and freezes compared to other operating systems, making it ideal for both personal and professional use.",
  },
  {
    title: "Security",
    description:
      "Linux is inherently more secure than other operating systems. Its open-source nature allows for constant scrutiny and improvement, leading to fewer vulnerabilities and quicker security patches.",
  },
  {
    title: "Community",
    description:
      "Linux has a vibrant and supportive community of users and developers. Whether you're a beginner or an expert, you'll find help and resources readily available.",
  },
  {
    title: "Customization",
    description:
      "With Linux, you can customize every aspect of your computing experience, from the desktop environment to the software stack, ensuring that your system reflects your preferences and workflow.",
  },
  {
    title: "Freedom",
    description:
      "Linux embodies the principles of freedom and openness, allowing users to use, modify, and distribute the software as they see fit. You're not locked into proprietary systems or forced upgrade cycles.",
  },
  {
    title: "Open Source",
    description:
      "As an open-source platform, Linux fosters collaboration and transparency. You can view and modify the source code, contributing to its improvement and ensuring its longevity.",
  },
  {
    title: "Revive Old Computers",
    description:
      "Linux breathes new life into older hardware, enabling you to extend the lifespan of aging computers and reduce electronic waste. Its lightweight nature ensures smooth performance on even modest hardware configurations.",
  },
];

const WhyLinux = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h5 className="text-5xl font-bold text-teal-900 text-center mb-8">
          Why Choose Linux?
        </h5>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasonsToChooseLinux.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-xl border-2 border-teal-700 reason-card"
            >
              <p className="text-xl font-bold mb-4 text-teal-950 text-center">{reason.title}</p>
              <p className="text-black">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyLinux;
