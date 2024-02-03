import { CloseOutlined } from "@ant-design/icons";
import React from "react";

interface AsideNavigationProps {
  isAsideNavigationVisible: boolean;
  setIsAsideNavigationVisible: (
    visible: boolean | ((prev: boolean) => boolean)
  ) => void;
}

const AsideNavigation: React.FC<AsideNavigationProps> = ({
  isAsideNavigationVisible,
  setIsAsideNavigationVisible,
}) => {
  return (
    <aside
      className={`fixed z-50 h-screen bg-black ${
        isAsideNavigationVisible ? "w-96" : "w-0"
      } right-0 text-white flex flex-col overflow-hidden transition-all`}
    >
      <div className="flex justify-between items-center border-b-2 border-custom-blue">
        <h3 className="uppercase text-2xl md:text-3xl ">Menu</h3>
        <button onClick={() => setIsAsideNavigationVisible((prev) => !prev)}>
          <CloseOutlined className="text-3xl md:text-4xl transition duration-200 ease-in-out hover:scale-125" />
        </button>
      </div>
      <nav>
        <ul>
          <li>LINK</li>
          <li>LINK</li>
          <li>LINK</li>
        </ul>
      </nav>
    </aside>
  );
};

export default AsideNavigation;
