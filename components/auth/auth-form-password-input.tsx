"use client";

import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import React, { useState, forwardRef } from "react";
import { iconClasses } from "./style-classes/iconClasses";
import { formElementClasses } from "./style-classes/formElementClasses";

interface AuthFormPasswordInputProps {
  placeholder: string;
  name: string;
}

const AuthFormPasswordInput = forwardRef<
  HTMLInputElement,
  AuthFormPasswordInputProps
>(({ placeholder, name }, ref) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative w-full max-w-80 sm:w-80 lg:w-96 lg:max-w-96">
      <input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        className={`${formElementClasses} pr-10`}
        name={name}
        ref={ref}
        required
      />

      {showPassword ? (
        <EyeInvisibleOutlined
          className={iconClasses}
          title="Hide password"
          role="button"
          onClick={togglePasswordVisibility}
        />
      ) : (
        <EyeOutlined
          className={iconClasses}
          title="Show password"
          role="button"
          onClick={togglePasswordVisibility}
        />
      )}
    </div>
  );
});

AuthFormPasswordInput.displayName = "AuthFormPasswordInput";
export default AuthFormPasswordInput;
