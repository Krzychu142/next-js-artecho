"use client";

import { formElementClasses } from "./style-classes/formElementClasses";
import AuthWithGoogleButton from "./auth-with-google-button";
import AuthFormPasswordInput from "./auth-form-password-input";
import FormLink from "./form-link";
import SignUpButton from "./signup-button";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";

interface SignUpFormFields {
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm = () => {
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const confirmPassword = useRef<HTMLInputElement>(null);

  // const [formFields, setFormFields] = useState<SignUpFormFields>({
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  // });

  // const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

  // const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = event.target;
  //   setFormFields({
  //     ...formFields,
  //     [name]: value,
  //   });
  // };

  // useEffect(() => {
  //   const isAnyFieldEmpty = Object.values(formFields).some(
  //     (field) => field === ""
  //   );

  //   setIsButtonDisabled(isAnyFieldEmpty);
  // }, [formFields]);

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // const formData = new FormData(event);

    console.log(event.target, "event");
  };

  return (
    <form
      className="w-full flex flex-col gap-4 items-center justify-center mb-8"
      onSubmit={(event) => handleOnSubmit(event)}
    >
      <input
        type="email"
        placeholder="Email"
        name="email"
        className={formElementClasses}
        ref={email}
      />

      <AuthFormPasswordInput
        placeholder="Password"
        name="password"
        ref={password}
      />

      <AuthFormPasswordInput
        placeholder="Confirm password"
        name="confirmPassword"
        ref={confirmPassword}
      />

      <SignUpButton />
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
