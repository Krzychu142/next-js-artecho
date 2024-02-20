import { GoogleOutlined } from "@ant-design/icons";
import React from "react";
import { formButtonClasses } from "./style-classes/formButtonClasses";
import { formElementClasses } from "./style-classes/formElementClasses";

const SignInWithGoogleButton = () => {
  return (
    <button
      className={`${formElementClasses} ${formButtonClasses} flex justify-center items-center`}
    >
      Sign in with Google{" "}
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

export default SignInWithGoogleButton;
