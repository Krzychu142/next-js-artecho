import {
  FacebookOutlined,
  InstagramOutlined,
  MailOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";

import miniLogo from "@/public/icons/ae-background.png";
import { NewsletterSection } from "./newsletter";
import { LinkObjectType } from "@/types/LinkObjectType";

const MainFooter = () => {
  const informationLinksArray: LinkObjectType[] = [
    { caption: "Store Regulations", href: "/" },
    { caption: "Privacy Policy", href: "/" },
    { caption: "Return Policy", href: "/" },
    { caption: "Payment and Delivery", href: "/" },
  ];

  return (
    <>
      <NewsletterSection />
      <footer className="min-h-1/2screen bg-black text-white flex flex-col justify-around px-4 md:px-8 py-4 gap-12">
        <div className="grid grid-flow-row md:grid-flow-col justify-start md:justify-around md:items-baseline gap-8 ">
          <div className="flex flex-col space-y-2">
            <h4 className="capitalize text-lg md:text-xl">More information</h4>
            <ul className="space-y-2">
              {informationLinksArray.map((linkObject, index) => (
                <li key={index}>
                  <Link
                    href={linkObject.href}
                    className="hover:text-custom-blue transition duration-200 ease-in-out font-bold text-sm md:text-base"
                  >
                    {linkObject.caption}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col space-y-2">
            <h4 className="capitalize text-lg md:text-xl">
              Visit our social media
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-2 text-sm font-bold hover:text-custom-blue transition duration-200 ease-in-out md:text-base"
                >
                  <FacebookOutlined className="text-lg" /> Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-2 text-sm font-bold hover:text-custom-blue transition duration-200 ease-in-out md:text-base"
                >
                  <InstagramOutlined className="text-lg" /> Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-2 text-sm font-bold hover:text-custom-blue transition duration-200 ease-in-out md:text-base"
                >
                  <MailOutlined className="text-lg" /> Email
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="align-end justify-center flex gap-2 items-center flex-wrap border-t-2 border-custom-blue pt-12">
          <p>All rights reserved by ArtEcho&reg;</p>
          <Image
            src={miniLogo}
            alt="Text aE as mini logo of company"
            className="max-w-8"
          />
        </div>
      </footer>
    </>
  );
};

export default MainFooter;
