import React from "react";
import { formElementClasses } from "./style-classes/formElementClasses";
import { formButtonClasses } from "./style-classes/formButtonClasses";
import SignInWithGoogleButton from "./signin-with-google-button";
import SignInFormPasswordInput from "./signin-form-password-input";

const RegisterForm = () => {
  return (
    <form className="w-full flex flex-col gap-4 items-center justify-center mb-8">
      <input type="email" placeholder="Email" className={formElementClasses} />
      <div className="relative w-full max-w-80 sm:w-80 lg:w-96 lg:max-w-96">
        <SignInFormPasswordInput />
      </div>
      <div className="relative w-full max-w-80 sm:w-80 lg:w-96 lg:max-w-96">
        <SignInFormPasswordInput />
      </div>
      <button className={`${formElementClasses} ${formButtonClasses}`}>
        Sign in
      </button>
      <SignInWithGoogleButton />
    </form>
  );
};

export default RegisterForm;
