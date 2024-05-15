import { useContext } from "react";
import { FaAngleRight } from "react-icons/fa";
import { GlobalContext } from "../global/ContextProvider";

const ToggleButton = () => {
  const { toggle, setToggled } = useContext(GlobalContext);

  return (
    <div
      onMouseEnter={() => setToggled(true)}
      className={`w-7 h-7 flex items-center justify-center bg-white rounded-md cursor-pointer transition-all duration-300 shadow-md text-black  ${
        toggle ? "rotate-180 " : "rotate-0 "
      }`}
    >
      <FaAngleRight size={20} />
    </div>
  );
};

export default ToggleButton;
