import React from "react";

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
      <button className={className ? className : ""}>Logout</button>
    </>
  ) : (
    ""
  );
};

export default LogoutNavButton;
