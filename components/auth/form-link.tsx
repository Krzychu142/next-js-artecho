import Link from "next/link";
import React from "react";

interface FormLinkProps {
  pContent: string;
  href: string;
  linkContent: string;
}

const FormLink: React.FC<FormLinkProps> = ({ pContent, href, linkContent }) => {
  return (
    <p>
      {pContent}{" "}
      <Link
        className="font-bold text-custom-blue transition duration-200 ease-in-out hover:text-black whitespace-nowrap"
        href={href}
      >
        {linkContent}
      </Link>
    </p>
  );
};

export default FormLink;
