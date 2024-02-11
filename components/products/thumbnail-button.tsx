import { PlusSquareOutlined } from "@ant-design/icons";
import React from "react";

interface ThumbnailButtonProps {
  isMouseOver: boolean;
}

const ThumbnaulButton: React.FC<ThumbnailButtonProps> = ({ isMouseOver }) => {
  return (
    <button title="Add product to cart">
      <PlusSquareOutlined
        className={`${
          isMouseOver ? "opactiy-100" : "opacity-0"
        } text-2xl transition duration-200 ease-in-out hover:scale-125 hover:text-custom-blue`}
      />
    </button>
  );
};

export default ThumbnaulButton;
