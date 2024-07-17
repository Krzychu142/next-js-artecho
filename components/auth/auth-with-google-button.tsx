"use client";
import { GoogleOutlined } from "@ant-design/icons";
import React from "react";
import { formButtonClasses } from "./style-classes/formButtonClasses";
import { formElementClasses } from "./style-classes/formElementClasses";
import { signIn } from "next-auth/react";

interface AuthWithGoogleButtonProps {
  content: string;
  disabled?: boolean;
}

const AuthWithGoogleButton: React.FC<AuthWithGoogleButtonProps> = ({
  content,
  disabled,
}) => {
  const handleGoogleSignIn = async () => {
    try {
      await signIn("google");
    } catch (error) {
      console.error("Error during Google Sign-In:", error);
    }
  };

  return (
    <button
      type="button"
      disabled={disabled}
      className={`${formElementClasses} ${formButtonClasses} flex justify-center items-center ${
        disabled ? "cursor-not-allowed" : "cursor-pointer"
      } `}
      onClick={handleGoogleSignIn}
      title="Accept consents first"
    >
      {content}{" "}
      <GoogleOutlined
        style={{
          fontSize: "19px",
          textShadow: "0 0 2px #000",
          paddingLeft: "4px",
        }}
      />
    </button>
  );
};

export default AuthWithGoogleButton;
