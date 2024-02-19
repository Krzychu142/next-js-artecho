import { GoogleOutlined } from "@ant-design/icons";
import SignInFormPasswordInput from "./signin-form-password-input";

export const formElementClasses =
  "border-2 border-custom-blue p-2 focus:border-custom-blue focus:ring-0 focus:outline-none rounded-3xl w-full sm:w-80 lg:w-96";

const formButtonClasses =
  "hover:bg-black hover:text-white transition duration-200 ease-in-out";

const SignInForm = () => {
  return (
    <form className="w-full flex flex-col gap-4 items-center justify-center mb-8">
      <input type="email" placeholder="Email" className={formElementClasses} />
      <div className="relative w-full sm:w-80 lg:w-96">
        <SignInFormPasswordInput />
      </div>
      <button
        className={`${formElementClasses} ${formButtonClasses}`}
        // onClick={handleLogin}
      >
        Sign in
      </button>
      <button
        className={`${formElementClasses} ${formButtonClasses} flex justify-center items-center`}
      >
        Sign in with Google{" "}
        <GoogleOutlined
          style={{
            fontSize: "19px",
            textShadow: "0 0 2px #000",
            paddingLeft: "4px",
          }}
        />
      </button>
    </form>
  );
};

export default SignInForm;
