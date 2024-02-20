import AsideImage from "@/components/auth/auth-aside-image";
import SignInForm from "@/components/auth/signin-form";

const SignInPage = () => {
  return (
    <main className="mt-24 pt-8 flex justify-center w-full">
      <AsideImage />
      <div className="w-full max-w-96 md:max-w-1/2screen h-1/2screen md:h-screen flex justify-center md:items-center px-4 md:px-12 ">
        <SignInForm />
      </div>
    </main>
  );
};

export default SignInPage;
