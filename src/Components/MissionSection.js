import React, { useState } from "react";

function MissionSection() {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Left half */}
      <div className="group h-auto md:w-1/2 text-white bg-blue-300 p-8 flex justify-center items-center hover:text-[#040000] hover:bg-blue-900 transition duration-300">
        <div className="w-36 h-36 md:w-52 md:h-52 bg-icon-bg-blue group-hover:bg-icon-bg-blue-invert rounded-full flex justify-center items-center">
          <h2 className="text-4xl md:text-5xl font-bold">Mission</h2>
        </div>
      </div>
      {/* Right half */}
      <div className="md:w-1/2 p-8 flex justify-center items-center">
        <p className="text-lg text-gray-800">
          At Zidane Soccer School, our mission is to cultivate a culture of
          excellence in football by prioritizing the development of players'
          individual skills, tactical acumen, and decision-making abilities. We
          are committed to empowering our players to take ownership of their
          journey, instilling in them a sense of responsibility and
          self-motivation. Through innovative coaching techniques and a
          supportive environment, we aim to equip our players with the tools
          they need to succeed, both in the game and in life. With a focus on
          fostering a passion for football and nurturing personal growth, we
          strive to create a community where every player can thrive and achieve
          their goals.
        </p>
      </div>
    </div>
  );
}

export default MissionSection;
