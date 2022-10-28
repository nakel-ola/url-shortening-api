import { useRef } from "react";
import useOnClickOutside from "../hooks/useOnClickOutside";
import Button from "./ui/Button";

const MenuCard = ({ setToggle }: { setToggle(value: boolean): void }) => {
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => setToggle(false));
  return (
    <div
      
      className="w-full fixed top-[0px] pt-[60px] z-10  left-0 md:hidden flex items-center justify-center"
    >
      <div ref={ref} className="w-[90%] h-[300px] bg-primary-dark-violet rounded-lg flex items-center justify-center flex-col">
        {["Features", "Pricing", "Resources"].map(
          (text: string, index: number) => (
            <p
              key={index}
              className="text-white text-base font-bold m-3 cursor-pointer"
            >
              {text}
            </p>
          )
        )}
        <hr className="h-[0.5px] border-0 bg-neutral-grayish-violet w-[80%] my-3" />

        <Button className="bg-transparent text-white my-2 py-1 w-[80%]">
          Login
        </Button>
        <Button className=" text-white my-2 py-1 w-[80%]">Sign Up</Button>
      </div>
    </div>
  );
};

export default MenuCard;
