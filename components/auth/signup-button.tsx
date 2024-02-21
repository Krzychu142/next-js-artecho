import React from "react";
import { formElementClasses } from "./style-classes/formElementClasses";
import { formButtonClasses } from "./style-classes/formButtonClasses";

const SignUpButton = () => {
  return (
    <button className={`${formElementClasses} ${formButtonClasses}`}>
      Sign up
    </button>
  );
};

export default SignUpButton;
