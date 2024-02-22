import { CheckOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import React from "react";

interface ResultProps {
  message: string;
  isError?: boolean;
}

const Result: React.FC<ResultProps> = ({ message, isError }) => {
  return (
    <div
      className={`${
        isError ? "border-amber-400" : "border-lime-500"
      } flex items-center px-2 py-3 border-2 shadow-lg font-medium rounded-3xl`}
    >
      {isError ? (
        <ExclamationCircleOutlined
          className="text-amber-400"
          style={{
            fontSize: "22px",
            textShadow: "0 0 2px #000",
            paddingRight: "6px",
          }}
        />
      ) : (
        <CheckOutlined
          className="text-lime-500"
          style={{
            fontSize: "22px",
            textShadow: "0 0 2px #000",
            paddingRight: "6px",
          }}
        />
      )}

      {message}
    </div>
  );
};

export default Result;
