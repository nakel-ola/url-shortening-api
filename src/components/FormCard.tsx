import { ChangeEvent, FormEvent, useState } from "react";
import { IoClose } from "react-icons/io5";
import useLocalStorage from "../hooks/useLocalStorage";
import LinkCard from "./LinkCard";

let baseUrl = "https://api.shrtco.de/v2/";
let url =
  "https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html";

export type Shorten = {
  code: string;
  short_link: string;
  full_short_link: string;
  short_link2: string;
  full_short_link2: string;
  share_link: string;
  full_share_link: string;
  original_link: string;
  copied: boolean;
};

let key = "shorten_api";

const FormCard = () => {
  const [input, setInput] = useState<string>("");
  const [items, setItems] = useLocalStorage<Shorten[]>(key, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const res = await fetch(`${baseUrl}shorten?url=${input}`);
    let json = await res.json();
    console.log(json);
    setItems([...items, { copied: false, ...json.result }]);
  };

  console.log(items);

  return (
    <div className="grid place-items-center mt-10 w-full bg-neutral-gray/20 ">
      <div className="w-[80%] -mt-16">
        <form
          onSubmit={handleSubmit}
          className="bg-shorten-mobile md:bg-shorten-desktop bg-primary-dark-violet h-[130px] w-full bg-contain md:bg-cover bg-no-repeat bg-right-top rounded-lg flex items-center flex-col md:flex-row justify-center"
        >
          <div className="md:flex-[0.8] bg-white h-[40px] md:h-[50px] rounded-lg flex items-center justify-center my-2">
            <input
              type="text"
              className="w-full bg-transparent text-xl mx-4 font-semibold outline-0"
              placeholder="Shorten a link here..."
              value={input}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setInput(e.target.value)
              }
            />
            {input && (
              <button
                type="button"
                className="w-[35px] h-[35px] mr-2 flex items-center justify-center"
                onClick={() => setInput("")}
              >
                <IoClose className="text-[25px]" />
              </button>
            )}
          </div>

          <button
            type="submit"
            className="bg-primary-cyan h-[40px] md:h-[50px] ml-8 text-xl px-5 text-white rounded-lg p-3 my-2 mr-2 font-semibold py-[4px] hover:scale-105 active:scale-95 transition-all duration-300 disabled:scale-100 disabled:opacity-40 whitespace-nowrap"
          >
            Shorten it!
          </button>
        </form>

        {items.map((item: Shorten, index: number) => (
          <LinkCard key={index} {...item} setItems={setItems} items={items} />
        ))}
      </div>
    </div>
  );
};

export default FormCard;
