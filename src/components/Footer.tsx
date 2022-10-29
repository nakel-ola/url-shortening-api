import fb from "../assets/images/icon-facebook.svg";
import instagram from "../assets/images/icon-instagram.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import twitter from "../assets/images/icon-twitter.svg";
import logo from "../assets/images/logo-white.svg";

const Footer = () => {
  const items = [
    {
      name: "Features",
      links: ["Link shortening", "Branded Links", "Analytics"],
    },
    {
      name: "Resources",
      links: ["Blog", "Developers", "Support"],
    },
    {
      name: "Company",
      links: ["About", "Our Team", "Careers", "Contact"],
    },
  ];
  return (
    <footer className="w-full bg-neutral-very-dark-violet md:h-[250px] grid place-items-center">
      <div className="w-[85%] flex flex-col md:flex-row justify-between items-center md:items-start mt-2">
        <div className="m-2">
          <img src={logo} alt="" className="text-white" />
        </div>

        <div className="flex flex-col md:flex-row justify-between flex-[0.5] ">
          {items.map(({ name, links }, index: number) => (
            <ul key={index} className="m-2 md:mt-0 text-center">
              <li className="text-white font-bold my-2">{name}</li>

              {links.map((link: string, index: number) => (
                <li key={index} className="text-neutral-gray my-1">
                  <a href="#" className="">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="flex items-center mb-auto m-2">
          <a className="h-[35px] w-[35px] flex items-center justify-center mx-1 cursor-pointer">
            <img src={fb} alt="" className="h-[20px] w-[20px]" />
          </a>
          <a className="h-[35px] w-[35px] flex items-center justify-center mx-1 cursor-pointer">
            <img src={twitter} alt="" className="h-[20px] w-[20px]" />
          </a>
          <a className="h-[35px] w-[35px] flex items-center justify-center mx-1 cursor-pointer">
            <img src={pinterest} alt="" className="h-[20px] w-[20px]" />
          </a>
          <a className="h-[35px] w-[35px] flex items-center justify-center mx-1 cursor-pointer">
            <img src={instagram} alt="" className="h-[20px] w-[20px]" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
