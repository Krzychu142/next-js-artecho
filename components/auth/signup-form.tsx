"use client";

import { formElementClasses } from "./style-classes/formElementClasses";
import AuthWithGoogleButton from "./auth-with-google-button";
import AuthFormPasswordInput from "./auth-form-password-input";
import FormLink from "./form-link";
import SignUpButton from "./signup-button";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import axios, { AxiosError } from "axios";
import { ServerErrorResponseType } from "@/types/ServerErrorResponseType";

interface SignUpFormFields {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState<SignUpFormFields>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  useEffect(() => {
    const isAnyFieldEmpty = Object.values(formFields).some(
      (field) => field === ""
    );

    setIsButtonDisabled(isAnyFieldEmpty);
  }, [formFields]);

  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const confirmPassword = useRef<HTMLInputElement>(null);
  const fullName = useRef<HTMLInputElement>(null);

  const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const apiURL = process.env.NEXT_PUBLIC_API_URL!;

    try {
      const response = await axios.post(`${apiURL}/signup`, {
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        approval: true,
      });

      console.log(response, "response");
    } catch (error) {
      const axiosError = error as AxiosError<ServerErrorResponseType>;

      console.log(axiosError, "axiosError");
    }
  };

  useEffect(() => {}, [email, password, confirmPassword, fullName]);

  return (
    <form
      className="w-full flex flex-col gap-4 items-center justify-center mb-8"
      onSubmit={(event) => handleOnSubmit(event)}
    >
      <div>
        <input
          type="text"
          placeholder="Full name"
          name="fullName"
          className={formElementClasses}
          ref={fullName}
        />
      </div>

      <div>
        <input
          type="email"
          placeholder="Email"
          name="email"
          className={formElementClasses}
          ref={email}
        />
      </div>

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

      <p className="w-full max-w-80 sm:w-80 lg:w-96 lg:max-w-96">
        <input type="checkbox" name="approval" className="accent-custom-blue" />{" "}
        <label htmlFor="approval"></label>I have read the Terms and Conditions
        of the Online Store and the Privacy Policy and accept their contents.
      </p>

      <FormLink
        pContent="Do you already have an account?"
        href="/auth/signin"
        linkContent="Sign in"
      />
    </form>
  );
};

export default SignUpForm;
