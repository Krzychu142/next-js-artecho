import React from "react";
import { formElementClasses } from "./style-classes/formElementClasses";
import { formButtonClasses } from "./style-classes/formButtonClasses";
import AuthWithGoogleButton from "./auth-with-google-button";
import AuthFormPasswordInput from "./auth-form-password-input";
import FormLink from "./form-link";

const SignUpForm = () => {
  return (
    <form className="w-full flex flex-col gap-4 items-center justify-center mb-8">
      <input type="email" placeholder="Email" className={formElementClasses} />
      <div className="relative w-full max-w-80 sm:w-80 lg:w-96 lg:max-w-96">
        <AuthFormPasswordInput placeholder="Password" />
      </div>
      <div className="relative w-full max-w-80 sm:w-80 lg:w-96 lg:max-w-96">
        <AuthFormPasswordInput placeholder="Confirm password" />
      </div>
      <button className={`${formElementClasses} ${formButtonClasses}`}>
        Sign in
      </button>
      <AuthWithGoogleButton content="Continue with Google" />
      <FormLink
        pContent="Do you already have an account?"
        href="/auth/signin"
        linkContent="Sign in"
      />
    </form>
  );
};

export default SignUpForm;
