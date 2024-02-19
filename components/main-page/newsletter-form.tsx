"use client";
import { useEffect, useState } from "react";
import NewsletterFormButton from "./newsletter-form-button";
import useMessageVisibility from "@/hooks/useMessageVisibility";
import Message from "../message";
import axios, { AxiosError } from "axios";
import { ServerErrorResponseType } from "@/types/ServerErrorResponseType";

const NewsletterForm = () => {
  const [providedEmail, setProvidedEmail] = useState<string>("");
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
  const [isVisible, showMessage] = useMessageVisibility(2000);
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const apiURL = process.env.NEXT_PUBLIC_API_URL!;

    try {
      const response = await axios.post(`${apiURL}/newsletter`, {
        email: providedEmail,
      });

      setMessage(response.data?.message);
      showMessage();
      setProvidedEmail("");
    } catch (error) {
      const axiosError = error as AxiosError<ServerErrorResponseType>;

      if (axiosError && axiosError.response) {
        setMessage(axiosError.response.data.message);
      } else {
        setMessage("Ups... something goes wrong. Please try later.");
      }

      showMessage();
    }
  };

  useEffect(() => {
    const parts = providedEmail.split("@");
    const isEmailValid =
      parts.length === 2 && parts[1].includes(".") && parts[1].length > 1;

    if (!providedEmail || providedEmail.trim() === "" || !isEmailValid) {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  }, [providedEmail]);

  return (
    <>
      <Message isVisible={isVisible}>{message}</Message>
      <form
        className="w-full flex flex-col items-center gap-2 md:flex-row md:gap-0 md:justify-center"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          placeholder="Email address"
          className="w-full max-w-96 p-2 border-2 border-r-0 border-custom-blue rounded-3xl text-black focus:border-custom-blue focus:ring-0 focus:outline-none placeholder-custom-blue md:rounded-r-none md:border-r-0"
          name="email"
          required
          value={providedEmail}
          onChange={(event) => {
            setProvidedEmail(event.target.value);
          }}
        />
        <NewsletterFormButton isButtonDisabled={isButtonDisabled} />
      </form>
    </>
  );
};

export default NewsletterForm;
