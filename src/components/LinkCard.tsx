import clsx from "clsx";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Shorten } from "./FormCard";

interface Props extends Shorten {
  setItems: (value: Shorten[] | ((val: Shorten[]) => Shorten[])) => void;
  items: Shorten[];
}

const LinkCard = (props: Props) => {
  const { original_link, full_short_link, copied, setItems, items } = props;

  const handleCopy = () => {
    let newItems = [...items];
    let index = newItems.findIndex(
      (value) => value.full_short_link === full_short_link
    );

    newItems[index].copied = true;

    setItems(newItems);
  };

  return (
    <div className="w-full bg-white md:h-[50px] my-4 rounded-lg shadow-sm flex flex-col md:flex-row md:items-center md:justify-between">
      <p className="text-neutral-very-dark-violet font-medium mx-6 md:ml-8 py-2 break-all">
        {original_link}
      </p>

      <hr className="h-[0.5px] border-0 bg-neutral-gray/20 w-full block md:hidden" />

      <div className="flex items-center md:flex-row flex-col">
        <p className="text-primary-cyan font-medium ml-8 md:ml-0 md:mr-8 w-[98%] md:w-fit">
          {full_short_link}
        </p>

        <CopyToClipboard text={full_short_link} onCopy={handleCopy}>
          <button
            type="submit"
            className={clsx(
              " h-[35px] md:h-[30px] w-[90%] md:w-[100px] px-5 text-white rounded-lg  md:my-2 mr-2 font-semibold  hover:scale-105 active:scale-95 transition-all duration-300 disabled:scale-100 disabled:opacity-40 whitespace-nowrap text-center my-4 ",
              copied ? "bg-primary-dark-violet" : "bg-primary-cyan"
            )}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default LinkCard;
