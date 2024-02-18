"use client";
import { useState } from "react";
import NewsletterFormButton from "./newsletter-form-button";
import useMessageVisibility from "@/hooks/useMessageVisibility";
import Message from "../message";

const NewsletterForm = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isVisible, showMessage] = useMessageVisibility(2000);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    console.log(email);
    showMessage();
  };

  return (
    <>
      <Message isVisible={isVisible}>HERE</Message>
      <form
        className="w-full flex flex-col items-center gap-2 md:flex-row md:gap-0 md:justify-center"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          placeholder="Email address"
          className="w-full md:w-80 max-w-96 p-2 border-2 border-r-0 border-custom-blue rounded-3xl text-black focus:border-custom-blue focus:ring-0 focus:outline-none placeholder-custom-blue md:rounded-r-none md:border-r-0"
          name="email"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
        <NewsletterFormButton />
      </form>
    </>
  );
};

export default NewsletterForm;
