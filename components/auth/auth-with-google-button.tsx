import { GoogleOutlined } from "@ant-design/icons";
import React from "react";
import { formButtonClasses } from "./style-classes/formButtonClasses";
import { formElementClasses } from "./style-classes/formElementClasses";

interface AuthWithGoogleButtonProps {
  content: string;
  disabled?: boolean;
}

const AuthWithGoogleButton: React.FC<AuthWithGoogleButtonProps> = ({
  content,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      className={`${formElementClasses} ${formButtonClasses} flex justify-center items-center`}
    >
      {content}{" "}
      <GoogleOutlined
        style={{
          fontSize: "19px",
          textShadow: "0 0 2px #000",
          paddingLeft: "4px",
        }}
      />
    </button>
  );
};

export default AuthWithGoogleButton;
