import React from "react";
import { formElementClasses } from "./style-classes/formElementClasses";
import { formButtonClasses } from "./style-classes/formButtonClasses";

interface SignupButton {
  disabled: boolean;
}

const SignUpButton: React.FC<SignupButton> = ({ disabled }) => {
  return (
    <button
      type="submit"
      className={`${formElementClasses} ${formButtonClasses} ${
        disabled ? "cursor-not-allowed" : "cursor-pointer"
      }`}
      // disabled={disabled}
    >
      Sign up
    </button>
  );
};

export default SignUpButton;
