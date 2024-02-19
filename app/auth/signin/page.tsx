"use client";

import AsideImage from "@/components/signin/aside-image";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const SignInPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleLogin = () => {
    signIn("google").then(() => {
      if (status === "authenticated") {
        router.push("/");
      }
    });
  };

  return (
    <main className="mt-24 pt-8 flex">
      <AsideImage />
      <div className="w-full max-w-1/2screen flex justify-center">
        <form action="">
          <input type="text" placeholder="email" />
          <input type="text" placeholder="password" />
          <button onClick={handleLogin}>sing in</button>
        </form>
      </div>
    </main>
  );
};

export default SignInPage;
