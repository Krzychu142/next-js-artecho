import AuthFormPasswordInput from "./auth-form-password-input";
import AuthWithGoogleButton from "./auth-with-google-button";
import { formButtonClasses } from "./style-classes/formButtonClasses";
import { formElementClasses } from "./style-classes/formElementClasses";
import FormLink from "./form-link";

const SignInForm = () => {
  return (
    <form className="w-full flex flex-col gap-4 items-center justify-center mb-8">
      <input type="email" placeholder="Email" className={formElementClasses} />
      <div className="relative w-full max-w-80 sm:w-80 lg:w-96 lg:max-w-96">
        <AuthFormPasswordInput placeholder="Password" />
      </div>
      <button className={`${formElementClasses} ${formButtonClasses}`}>
        Sign in
      </button>
      <AuthWithGoogleButton content="Sign in with Google" />
      <div className="flex flex-col gap-1">
        <FormLink
          pContent="Don't have an account yet?"
          href="/auth/signup"
          linkContent="Sign up"
        />
        <FormLink
          pContent="Did you forget your password?"
          href="/auth/signup"
          linkContent="Reset"
        />
      </div>
    </form>
  );
};

export default SignInForm;
