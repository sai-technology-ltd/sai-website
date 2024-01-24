import React from "react";
import RecentProjectCard from "./recent-project-card";

const RecentProjects = () => {
  return (
    <div className="h-full bg-[#BF212E] bg-opacity-5 border-t border-b border-[#741F26] pb-20">
      <div className="flex flex-col items-center gap-6 py-20">
        <div className="h-2 bg-[#741f28] w-20"></div>
        <p className="text-3xl font-extralight text-center">Our recent</p>
        <p className="font-bold text-[#741f28] text-center text-3xl">
          Projects
        </p>
      </div>
      <RecentProjectCard
        title="Agriconnect"
        body="Join Agriconnect, where education meets innovation, and every connection opens doors to new opportunities. Our platform is meticulously engineered to streamline educational processes, foster growth for organizations, and unlock the full potential of students and institutions alike. Embrace the future with us—where learning is limitless, and your journey to success is supported every step of the way."
        link="https://www.agriconnectghana.com/"
        imageSrc="/project-thumbnail/agriconnect.png"
      />
      <RecentProjectCard
        title="Furddle"
        body="At SAI Technology, we specialize in crafting tailored web experiences, like Furddle – a vibrant online hub for pet lovers. Our web development expertise brings communities together through intuitive design and engaging features, allowing users to share and celebrate their pets with ease."
        link="https://furddle.com/"
        imageSrc="/project-thumbnail/furddle.png"
      />
      <RecentProjectCard
        title="DriganoStruct"
        body="At SAI Technology, we excel in creating bespoke digital platforms, such as our recent project for a prestigious architectural firm. Leveraging our web development prowess, we delivered a sophisticated website complete with a custom CMS, enabling seamless portfolio updates and content management to showcase their architectural mastery."
        link="https://driganostruct.com/"
        imageSrc="/project-thumbnail/driganostruct.png"
      />
    </div>
  );
};

export default RecentProjects;
