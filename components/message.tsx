import React from "react";

interface MessageProps {
  isVisible: boolean;
  children: React.ReactNode;
}

const Message: React.FC<MessageProps> = ({ isVisible, children }) => {
  return (
    <div
      className={`fixed top-10 w-full md:w-auto md:min-w-96 max-w-80 shadow-lg shadow-custom-blue p-2 rounded-3xl flex justify-center items-center bg-black transition duration-200 ease-in-out z-50 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

export default Message;
