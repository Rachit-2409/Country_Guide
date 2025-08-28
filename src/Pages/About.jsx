import React from "react";
import Globe from "../assets/Fly.jpg";

const About = () => {
  return (
    <div className="container flex flex-col lg:flex-row items-center gap-10 py-16 p-4">
      {/* Left: Image */}
      <div className="lg:w-1/2 flex justify-center">
        <img src={Globe} alt="Earth Globe" className="lg:w-[70%] object-contain h-auto rounded-lg" />
      </div>

      {/* Right: Content */}
      <div className="lg:w-1/2">
        <h1 className="text-5xl font-bold mb-6">About ATLAS</h1>
        <h3 className="text-2xl mb-6 text-gray-600 font-medium leading-relaxed">
          ATLAS is more than just a website — it’s a digital window to the world.
        </h3>
        <p className="text-lg mb-5 text-gray-600 leading-relaxed">
          Our goal is to help people discover countries, explore cultures, and
          experience diversity in a way that is simple, engaging, and insightful.
        </p>
        <p className="text-lg mb-5 text-gray-600 leading-relaxed">
          In today’s fast-paced world, knowledge of global cultures and nations
          is not just interesting — it’s essential. ATLAS brings together rich
          content about countries, highlighting their history, geography,
          traditions, festivals, and modern lifestyles.
        </p>
        <p className="text-lg mb-5 text-gray-600 leading-relaxed">
          Whether you are a student researching for academics, a traveler
          planning your next adventure, or simply a curious mind eager to learn,
          ATLAS gives you the right information in one place.
        </p>
      </div>
    </div>
  );
};

export default About;
