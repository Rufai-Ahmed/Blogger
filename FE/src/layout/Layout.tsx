import { Outlet } from "react-router-dom";
import Sider from "../static/Sider";
import { useContext } from "react";
import ToggleButton from "../components/ToggleButton";
import { GlobalContext } from "../global/ContextProvider";

const Layout = () => {
  const { toggle, changeToggle, toggled } = useContext(GlobalContext);

  return (
    <div className="flex">
      <div
        className={`fixed duration-300 transition-all bg-[#101e2d] text-white h-screen   ${
          toggle ? "w-[90px]" : "w-[250px]"
        }`}
      >
        <Sider />

        <div className="absolute -right-4 top-2" onClick={changeToggle}>
          {toggled && <ToggleButton />}
        </div>
      </div>

      <div className="w-full flex justify-end">
        <div
          className={` h-[170vh] duration-300 transition-all ${
            toggle ? "w-[calc(100%-90px)]" : "w-[calc(100%-250px)]"
          }`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
