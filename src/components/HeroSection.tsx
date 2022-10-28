import React from "react";
import image from "../assets/images/illustration-working.svg";
import Button from "./ui/Button";

const HeroSection = () => {
  return (
    <div className="bg-white w-full grid place-items-center pb-24">
      <div className="flex justify-between items-center mt-10 flex-col-reverse md:flex-row md:w-[85%]">
        <div className="w-[90%] md:w-[40vw] mt-4 md:mt-0 flex flex-col justify-center items-center md:items-center md:justify-start md:block">
          <h1 className="text-3xl text-center md:text-start md:text-6xl font-bold">
            More than just shorter links
          </h1>
          <h2 className="text-neutral-grayish-violet my-2 w-full md:w-[70%] font-medium text-center md:text-start">
            Build your brand's recogination and get detailed insights on how
            your links are performing
          </h2>
          <Button className="text-white my-2 bg-primary-cyan">
            {" "}
            Get Started
          </Button>
        </div>
        <div className="w-[95%] md:w-[40vw]">
          <img src={image} alt="" className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
