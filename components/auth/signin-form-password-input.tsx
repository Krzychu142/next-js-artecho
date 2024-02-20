"use client";

import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { useState } from "react";
import { iconClasses } from "./style-classes/iconClasses";
import { formElementClasses } from "./style-classes/formElementClasses";

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
    </>
  );
};

export default SignInFormPasswordInput;
