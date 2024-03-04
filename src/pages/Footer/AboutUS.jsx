// @ts-nocheck
import React from 'react';
import aboutImage from '@assets/images/aboutus.svg';

const Section = ({ title, desc }) => (
  <div className="font-Lato py-4">
    <h2 className="font-700 text-[24px]">{title}</h2>
    <p className="font-400 text-[16px]">{desc}</p>
  </div>
);

const AboutUs = () => {
  const aboutSections = [
    {
      title: "Overview About Java Sport",
      desc: "Java Sport has been at the forefront of cricket gear innovation since the early 1980s. With a legacy of crafting quality bats for some of the world's top cricket brands, our family-owned business has honed its expertise over generations. Today, we are proud to offer cricket equipment that stands out for its exceptional quality and performance. Our commitment to excellence has earned us a reputation as one of the most trusted names in the cricket industry."
    },
    {
      title: "Our Products",
      desc: "We take pride in our extensive range of cricket gear, including bats, balls, protective equipment, apparel, and accessories. Each product in our lineup is carefully selected and rigorously tested to meet our high standards of quality and performance. Partnering with leading cricket brands and emerging talent, we strive to bring you the best equipment available in the market."
    },
    {
      title: "Commitment to Quality",
      desc: "At Java Sport, quality is not just a goal; it's our guiding principle. We understand that cricket gear plays a crucial role in your performance and enjoyment of the game. That's why we meticulously craft every product to deliver outstanding performance and durability. From the finest materials to expert craftsmanship, we spare no effort to ensure that our gear meets the highest standards of excellence."
    },
    {
      title: "Community Engagement",
      desc: "Beyond providing top-notch gear, we are deeply committed to supporting the cricket community at every level. Through sponsorships, events, and training programs, we aim to nurture talent and foster a culture of excellence in the sport. Our knowledgeable team is always available to offer personalized advice and guidance, helping players find the perfect gear for their needs."
    },
    {
      title: "Sustainability Initiatives",
      desc: "As stewards of the environment, we are dedicated to promoting sustainability in all aspects of our operations. From eco-friendly materials to responsible manufacturing practices, we strive to minimize our environmental footprint. By embracing sustainable initiatives, we aim to protect the planet for future generations while delivering top-quality cricket gear to our customers."
    },
    {
      title: "Our Vision for the Future",
      desc: "Looking ahead, Java Sport is committed to continued innovation and growth. We envision a future where cricket enthusiasts worldwide have access to the best gear and equipment, enabling them to elevate their game to new heights. By staying at the forefront of technological advancements and customer-centric design, we aim to lead the way in shaping the future of cricket."
    },
  ];

  return (
    <div className="flex flex-col bg-white px-[150px] max-sm:px-[46px] max-lg:px-[80px] max-xl:px-[100px]">
      <div className="py-10">
        <img src={aboutImage} alt="About Java Sport" />
      </div>
      {aboutSections.map((section, index) => (
        <div className="flex flex-col gap-4" key={index}>
          <Section title={section.title} desc={section.desc} />
        </div>
      ))}
    </div>
  );
};

export default AboutUs;
