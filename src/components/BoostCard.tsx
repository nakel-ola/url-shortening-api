import React from "react";
import Button from "./ui/Button";

const BoostCard = () => {
  return (
    <div className="bg-boost-mobile md:bg-boost-desktop bg-primary-dark-violet w-full h-[200px] flex items-center flex-col justify-center">
      <h1 className="text-4xl font-bold text-white">Boost your links today</h1>
      <Button className="text-white my-5 bg-primary-cyan py-2 text-lg px-5"> Get Started</Button>
    </div>
  );
};

export default BoostCard;
