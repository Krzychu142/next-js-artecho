import React from "react";
import { signOut } from "next-auth/react";

interface LogoutNavButtonProps {
  status: string;
  className?: string;
}

const LogoutNavButton: React.FC<LogoutNavButtonProps> = ({
  status,
  className,
}) => {
  return status === "authenticated" ? (
    <>
      <button onClick={() => signOut()} className={className ? className : ""}>
        Logout
      </button>
    </>
  ) : (
    ""
  );
};

export default LogoutNavButton;
