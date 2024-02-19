"use client";

import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { formElementClasses } from "./signin-form";
import { useState } from "react";

const SignInFormPasswordInput = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        className={`${formElementClasses} pr-10`}
      />

      {showPassword ? (
        <EyeInvisibleOutlined
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-lg cursor-pointer text-custom-blue hover:text-black transition duration-200 ease-in-out"
          title="Hide password"
          role="button"
          onClick={togglePasswordVisibility}
        />
      ) : (
        <EyeOutlined
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-lg cursor-pointer text-custom-blue hover:text-black transition duration-200 ease-in-out"
          title="Show password"
          role="button"
          onClick={togglePasswordVisibility}
        />
      )}
    </>
  );
};

export default SignInFormPasswordInput;
