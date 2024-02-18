import React from "react";

const LoginPage = () => {
  return (
    <main className="mt-24 flex items-center justify-center border-2 border-cyan-900 min-h-fit	">
      <form action="">
        <input type="text" placeholder="email" />
        <input type="text" placeholder="password" />
      </form>

      <button>sing in</button>
    </main>
  );
};

export default LoginPage;
