"use client";

import React from "react";

interface NewsletterFormButtonProps {
  isButtonDisabled: boolean;
}

const NewsletterFormButton: React.FC<NewsletterFormButtonProps> = ({
  isButtonDisabled,
}) => {
  return (
    <button
      className={`w-full md:w-auto max-w-96 p-2 border-2 border-custom-blue rounded-3xl hover:bg-white hover:text-black transition duration-200 ease-in-out md:rounded-l-none md:border-l-0 ${
        isButtonDisabled ? "cursor-not-allowed" : "cursor-pointer"
      }`}
      type="submit"
      disabled={isButtonDisabled}
    >
      Subscribe
    </button>
  );
};

export default NewsletterFormButton;
