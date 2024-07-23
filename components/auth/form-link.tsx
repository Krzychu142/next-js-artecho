import Link from "next/link";
import React from "react";

interface FormLinkProps {
  content: string;
  href: string;
  linkContent: string;
}

const FormLink: React.FC<FormLinkProps> = ({ content, href, linkContent }) => {
  return (
    <p>
      {content}{" "}
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
