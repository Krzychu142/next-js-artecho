"use client";
import { formElementClasses } from "./style-classes/formElementClasses";
import AuthWithGoogleButton from "./auth-with-google-button";
import AuthFormPasswordInput from "./auth-form-password-input";
import FormLink from "./form-link";
import SignUpButton from "./signup-button";
import { FormEvent, useEffect, useRef, useState } from "react";
import axios, { AxiosError } from "axios";
import { ServerErrorResponseType } from "@/types/ServerErrorResponseType";
import Result from "../result";
import Spinner from "../spinner/spinner";
import { useSpinner } from "../spinner/useSpinner";
import useMessageVisibility from "@/hooks/useMessageVisibility";
import Message from "../message";

const SignUpForm = () => {
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const confirmPassword = useRef<HTMLInputElement>(null);
  const fullName = useRef<HTMLInputElement>(null);
  const approval = useRef<HTMLInputElement>(null);

  const [isMessageVisible, showMessage] = useMessageVisibility(2000);
  const [message, setMessage] = useState<string>("");

  const clearForm = () => {
    if (email.current) email.current.value = "";
    if (password.current) password.current.value = "";
    if (confirmPassword.current) confirmPassword.current.value = "";
    if (fullName.current) fullName.current.value = "";
    if (approval.current) approval.current.checked = false;
  };

  const [approvalState, setApprovalState] = useState(false);

  useEffect(() => {
    setApprovalState(approval.current?.checked || false);
  }, []);

  const [responseMessage, setResponseMessage] = useState("");
  const [isResponseMessageVisible, setIsResponseMessageVisible] =
    useState(false);
  const [isError, setIsError] = useState(false);

  const { isVisible, showSpinner, hideSpinner } = useSpinner();

  const displayMessageOnClickWhenDisabled = () => {
    if (approval.current?.checked === false) {
      setMessage(
        "Confirm Terms, Conditions and Privacy Policy before signing up."
      );
      showMessage();
    }
  };

  const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      !email.current?.value ||
      !password.current?.value ||
      !confirmPassword.current?.value ||
      !fullName.current?.value ||
      !approval.current?.checked
    ) {
      setIsResponseMessageVisible(true);
      setIsError(true);
      setResponseMessage("Ups... something went wrong, try again later.");
      return;
    }

    setIsResponseMessageVisible(false);
    setIsError(false);
    setResponseMessage("");
    showSpinner();

    const apiURL = process.env.NEXT_PUBLIC_API_URL!;

    try {
      const response = await axios.post(`${apiURL}/signup`, {
        fullName: fullName.current?.value,
        email: email.current?.value,
        password: password.current?.value,
        confirmPassword: confirmPassword.current?.value,
        approval: approval.current?.checked,
      });

      if (response && response.status === 200) {
        setIsResponseMessageVisible(true);
        setResponseMessage(
          response.data.message || "Verification link sent to email."
        );
        clearForm();
      }
    } catch (error) {
      const axiosError = error as AxiosError<ServerErrorResponseType>;

      setIsResponseMessageVisible(true);
      setIsError(true);
      setResponseMessage(
        axiosError.response?.data.message ||
          "Ups... something went wrong, try again later."
      );
    } finally {
      hideSpinner();
    }
  };

  return (
    <>
      <Message isVisible={isMessageVisible}>{message}</Message>
      {isVisible && <Spinner />}
      <form
        className="w-full flex flex-col gap-4 items-center justify-center mb-8"
        onSubmit={(event) => handleOnSubmit(event)}
      >
        {isResponseMessageVisible && (
          <div className="w-full max-w-80 sm:w-80 lg:w-96 lg:max-w-96">
            <Result message={responseMessage} isError={isError} />
          </div>
        )}

        <input
          type="text"
          placeholder="Full name"
          name="fullName"
          className={formElementClasses}
          ref={fullName}
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className={formElementClasses}
          ref={email}
          required
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
        <SignUpButton disabled={!approvalState} />
        <AuthWithGoogleButton
          content="Continue with Google"
          disabled={!approvalState}
          onClick={displayMessageOnClickWhenDisabled}
        />
        <p className="w-full max-w-80 sm:w-80 lg:w-96 lg:max-w-96">
          <input
            type="checkbox"
            name="approval"
            className="accent-custom-blue peer"
            ref={approval}
            required
            onChange={(e) => setApprovalState(e.target.checked)}
            id="approval-checkbox"
          />
          <label htmlFor="approval-checkbox">
            {" "}
            I have read the Terms and Conditions of the Online Store and the
            Privacy Policy and accept their contents.
          </label>
        </p>
        <FormLink
          content="Do you already have an account?"
          href="/auth/signin"
          linkContent="Sign in"
        />
      </form>
    </>
  );
};

export default SignUpForm;
