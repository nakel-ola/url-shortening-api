import React from "react";
import image1 from "../assets/images/icon-brand-recognition.svg";
import image2 from "../assets/images/icon-detailed-records.svg";
import image3 from "../assets/images/icon-fully-customizable.svg";
import clsx from "clsx";

const AdvanceSection = () => {
  const items = [
    {
      image: image1,
      title: "Brand Recognition",
      subtitle:
        "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links helps instil confidence in your content.",
    },
    {
      image: image2,
      title: "Detailed Records",
      subtitle:
        "Gain insights into who is clicking your link. Knowing when and where people engage with your content helps inform better descisions.",
    },
    {
      image: image3,
      title: "Fully Customizable",
      subtitle:
        "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement",
    },
  ];

  return (
    <div className="grid place-items-center py-6 w-full bg-neutral-gray/20">
      <div className="flex flex-col items-center justify-center mt-10 mb-20 md:w-[30%] ">
        <h1 className="text-4xl font-bold py-2 text-center">Advanced Statistics</h1>
        <p className="text-neutral-gray text-center font-medium">
          Track how your links are performing across the web with our advanced
          statistics dashboard
        </p>
      </div>
      <div className="relative">
        <div className="flex relative flex-col md:flex-row">
          {items.map((item, index: number) => (
            <Card key={index} {...item} index={index} />
          ))}
        </div>

        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[90%] w-[8px] md:h-[8px] md:w-[80%] mt-4 md:mt-0 md:ml-8 bg-primary-cyan -z-10"></div>
      </div>
    </div>
  );
};

type Props = {
  image: string;
  title: string;
  subtitle: string;
  index: number;
};

const Card = (props: Props) => {
  const { image, title, subtitle, index } = props;
  return (
    <div
      className={clsx(`m-[10px] h-[200px] w-[280px] bg-white rounded-xl flex flex-col mt-[40px]`, index === 0 && "md:mt-[0px]", index === 1 && "md:mt-[40px]", index === 2 && "md:mt-[80px]")}
    >
      <div className=" mt-[-30px] ml-[20px] bg-primary-dark-violet h-[60px] w-[60px] flex items-center justify-center rounded-full mx-auto">
        <img src={image} alt="" className="h-[30px] w-[30px]" />
      </div>
      <p className=" text-neutral-very-dark-violet text-[1rem] font-medium p-[10px] pl-[16px]">
        {title}
      </p>

      <p className="text-[0.8rem] text-neutral-gray p-[10px] pl-[16px]">
        {subtitle}
      </p>
    </div>
  );
};

export default AdvanceSection;
