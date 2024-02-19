import {
  CloseOutlined,
  FacebookOutlined,
  InstagramOutlined,
  MailOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import React, { useEffect } from "react";
import { LinkObjectType } from "@/types/LinkObjectType";
import { IconLinkObjectType } from "@/types/IconLinkObjectType";
import { usePathname } from "next/navigation";

interface AsideNavigationProps {
  isAsideNavigationVisible: boolean;
  setIsAsideNavigationVisible: (
    visible: boolean | ((prev: boolean) => boolean)
  ) => void;
}

const AsideNavigation: React.FC<AsideNavigationProps> = ({
  isAsideNavigationVisible,
  setIsAsideNavigationVisible,
}) => {
  const pathname = usePathname();
  useEffect(() => {
    setIsAsideNavigationVisible(false);
  }, [pathname]);

  const linksArray: LinkObjectType[] = [
    { caption: "Home", href: "/" },
    { caption: "Contact", href: "/" },
    { caption: "About", href: "/" },
    { caption: "Register", href: "/auth/register" },
    { caption: "SignIn", href: "/auth/signin" },
  ];

  const iconsLinksArray: IconLinkObjectType[] = [
    { href: "/", icon: <FacebookOutlined className="text-lg" /> },
    { href: "/", icon: <InstagramOutlined className="text-lg" /> },
    { href: "/", icon: <MailOutlined className="text-lg" /> },
  ];

  return (
    <>
      {isAsideNavigationVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsAsideNavigationVisible(false)}
        />
      )}
      <aside
        className={`${
          isAsideNavigationVisible ? "w-screen sm:w-2/3 xl:w-1/3" : "w-0"
        } fixed z-50 h-screen bg-black top-0 right-0 text-white flex flex-col overflow-hidden transition-all duration-300`}
      >
        <div className="flex justify-between items-center border-b-2 border-custom-blue py-4 px-2">
          <h3 className="uppercase text-2xl md:text-3xl">Menu</h3>
          <button onClick={() => setIsAsideNavigationVisible((prev) => !prev)}>
            <CloseOutlined className="text-3xl md:text-4xl transition duration-200 ease-in-out hover:scale-125" />
          </button>
        </div>
        <nav className="pt-8 flex-grow">
          <ul className="flex flex-col gap-4 items-center">
            {linksArray.map((linkObject, index) => (
              <li key={index}>
                <Link
                  className="hover:text-custom-blue transition duration-200 ease-in-out md:text-base text-lg"
                  href={linkObject.href}
                >
                  {linkObject.caption}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <footer className="pb-8">
          <ul className="flex justify-center gap-4">
            {iconsLinksArray.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="hover:text-custom-blue transition duration-200 ease-in-out md:text-base"
                >
                  {link.icon}
                </Link>
              </li>
            ))}
          </ul>
        </footer>
      </aside>
    </>
  );
};

export default AsideNavigation;
