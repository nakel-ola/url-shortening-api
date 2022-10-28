import { IoMenu } from "react-icons/io5";
import logo from "../assets/images/logo.svg";
import Button from "./ui/Button";

const Navbar = ({ setToggle }: { setToggle(value: boolean): void }) => {
  return (
    <header className="w-full grid place-items-center bg-white">
      <div className="w-[85%] flex items-center justify-between py-5 ">
        <div className="flex items-center">
          <div className="">
            <img src={logo} alt="" className="" />
          </div>

          <div className="md:flex items-center ml-10 hidden ">
            {["Features", "Pricing", "Resources"].map(
              (text: string, index: number) => (
                <p
                  key={index}
                  className="text-neutral-grayish-violet text-sm font-bold mx-3 hover:text-neutral-very-dark-violet cursor-pointer"
                >
                  {text}
                </p>
              )
            )}
          </div>
        </div>

        <div className="md:block hidden">
          <Button className="bg-transparent text-neutral-grayish-violet hover:text-neutral-very-dark-violet">
            Login
          </Button>
          <Button className="text-white bg-primary-cyan">Sign Up</Button>
        </div>

        <button
          className="md:hidden flex items-center justify-center h-[35px] w-[35px]"
          onClick={() => setToggle(true)}
        >
          <IoMenu className="text-[25px] text-neutral-grayish-violet hover:text-neutral-very-dark-violet" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
