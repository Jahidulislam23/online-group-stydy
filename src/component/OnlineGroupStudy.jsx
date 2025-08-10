import React from "react";

const features = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-blue-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 10h.01M12 10h.01M16 10h.01M21 16v-5a2 2 0 00-2-2H5a2 2 0 00-2 2v5a3 3 0 003 3h12a3 3 0 003-3z"
        />
      </svg>
    ),
    title: "Group Study Sessions",
    desc: "Join interactive group study sessions with peers and boost your learning.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-green-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 10l4.553-2.276A2 2 0 0122 9.618v4.764a2 2 0 01-2.447 1.894L15 14M4 6h.01M4 10h.01M4 14h.01M4 18h.01"
        />
      </svg>
    ),
    title: "Live Video Calls",
    desc: "Connect with your study group face-to-face using built-in video conferencing.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-purple-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 20h9M12 4h9M12 12h9M3 6h.01M3 10h.01M3 14h.01M3 18h.01"
        />
      </svg>
    ),
    title: "Notes Sharing",
    desc: "Easily share notes and resources within your study groups.",
  },
];

const OnlineGroupStudy = () => {
  return (
    <div className="min-h-screen bg-white rounded">
      {/* Header */}
      

      {/* Hero Section */}
      <section className="text-center py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-5xl font-extrabold mb-6 drop-shadow-md">
          Boost Your Learning with Online Group Study
        </h2>
        <p className="text-indigo-700 text-lg mb-8 leading-relaxed">
          Collaborate, communicate, and conquer your study goals with interactive sessions, video calls, and shared resources.
        </p>
        <a
          href="#join"
          className="inline-block text-black px-8 py-4 rounded-full text-xl font-semibold shadow-lg hover:bg-indigo-900 transition"
        >
          Join a Group Now
        </a>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="max-w-6xl mx-auto px-6 py-20 grid gap-10 sm:grid-cols-1 md:grid-cols-3"
      >
        {features.map(({ icon, title, desc }, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="mb-6">{icon}</div>
            <h3 className="text-2xl font-bold text-indigo-900 mb-3">{title}</h3>
            <p className="text-indigo-700 text-base">{desc}</p>
          </div>
        ))}
      </section>

      {/* Join Section */}
      <section
        id="join"
        className=" text-black py-16 text-center px-6"
      >
        <h2 className="text-4xl font-extrabold mb-4">Ready to Join?</h2>
        <p className="mb-8 max-w-xl mx-auto text-lg">
          Create or join a group study session instantly and start learning smarter today!
        </p>
        <a
          href="#contact"
          className="inline-block text-black bg-white px-10 py-4 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition"
        >
          Get Started
        </a>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className=" text-black py-8 text-center text-sm"
      >
        <p>Contact us: jahidul110j@gmail.com</p>
      </footer>
    </div>
  );
};

export default OnlineGroupStudy;
