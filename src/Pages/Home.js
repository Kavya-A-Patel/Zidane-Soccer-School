import React from "react";
import HeroSection from "../Components/HeroSection";
import CardInfo from "../Components/CardInfo";
import CardBatch from "../Components/CardBatch";

function Home() {
  return (
    <div>
      <HeroSection />
      <div className="flex flex-wrap justify-center items-center">
        <CardInfo
          imageUrl="Icons/info.png"
          imageUrlHover="Icons/info invert.png"
          description="Welcome to Zidane Soccer School, where we're dedicated to nurturing the next generation of football talent in Mumbai, India. Our mission is clear: we believe in enhancing players' individual abilities, tactical prowess, and overall decision-making skills. Through a dynamic range of coaching techniques, we empower our players to take ownership of their journey on the field, fostering a culture of self-driven improvement and strategic thinking. Join us as we embark on this exciting journey together, where every kick, every goal, and every decision counts towards shaping the football stars of tomorrow."
        />
        <CardBatch
          imageUrl="Icons/Batch 1.png"
          imageUrlHover="Icons/Batch 1 Invert.png"
          timings="Timings: 7pm to 8pm"
          days="Days: Wednesdays & Fridays"
          ageGroup="Age Group: 5-16 years"
          fees="Fees: Rs. 2000 per month"
          location="Location: Nidhivan Lawn Near Witty International School, Pawan Baug, Chincholi Bundar, Malad West, Mumbai"
          locationUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.4206041547727!2d72.844234425967!3d19.17682309879814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b79de3be6f35%3A0x20e4a67f148b3ab0!2sNidhivan%20Turf!5e0!3m2!1sen!2sin!4v1714231423911!5m2!1sen!2sin"
        />
        <CardBatch
          imageUrl="Icons/Batch 2.png"
          imageUrlHover="Icons/Batch 2 Invert.png"
          timings="Timings: 8pm to 9pm"
          days="Days: Tuesdays & Thursdays"
          ageGroup="Age Group: 5-16 years"
          fees="Fees: Rs. 2000 per month"
          location="Location: The Bhoomi Park Society, Club House Turf, Near Billabong school, Jan Kalyan, Malad West, Mumbai"
          locationUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d666.0695062338838!2d72.82064167224142!3d19.20139843929915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6bb8da40a1d%3A0xc9522614db9c6eca!2sBhoomi%20Park%20Phase%203%20A%20Wing!5e0!3m2!1sen!2sin!4v1714232108054!5m2!1sen!2sin"
        />
      </div>
    </div>
  );
}

export default Home;
