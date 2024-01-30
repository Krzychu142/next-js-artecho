"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/public/icons/logo-no-background-h500.png";
import {
  MenuOutlined,
  SearchOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";

const MainHeader = () => {
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  const [isHeaderVisible, setisHeaderVisible] = useState(true);
  // const [isAsideVisible, setIsAsideVisible] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    setisHeaderVisible(
      prevScrollPosition > currentScrollPos || currentScrollPos < 10
    );
    setPrevScrollPosition(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPosition]);

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full flex justify-between items-center px-4 md:px-16 py-2 bg-white transition-transform duration-200 ease-in-out ${
          isHeaderVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col w-32 md:w-60">
          <Link href="/">
            <Image
              src={logo}
              alt="Art echo text logo mark."
              priority
              className="transition duration-200 ease-in-out hover:scale-110"
            />
          </Link>
        </div>
        <div className="flex space-x-3 md:space-x-4">
          <SearchOutlined className="text-3xl md:text-4xl transition duration-200 ease-in-out hover:scale-125" />

          <ShoppingOutlined className="text-3xl md:text-4xl transition duration-200 ease-in-out hover:scale-125" />

          <MenuOutlined className="text-3xl md:text-4xl transition duration-200 ease-in-out hover:scale-125" />
        </div>
      </header>
      {/* <aside className="min-h-screen">aside here</aside> */}
    </>
  );
};

export default MainHeader;
