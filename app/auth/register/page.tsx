import SignInAsideImage from "@/components/auth/auth-aside-image";
import RegisterForm from "@/components/auth/register-form";
import React from "react";

const RegisterPage = () => {
  return (
    <main className="mt-24 pt-8 flex justify-center w-full">
      <div className="w-full max-w-96 md:max-w-1/2screen h-1/2screen md:h-screen flex justify-center md:items-center px-4 md:px-12 ">
        <RegisterForm />
      </div>
      <SignInAsideImage />
    </main>
  );
};

export default RegisterPage;
