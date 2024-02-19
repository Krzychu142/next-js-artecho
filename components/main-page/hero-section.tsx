import heroImage from "@/public/images/hero-section.jpg";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="h-3/4screen lg:h-screen relative">
      <div className="absolute inset-0 ">
        <Image
          src={heroImage}
          alt="Greek statuette from ancient art."
          className="absolute w-full h-full object-cover"
          fill
          priority
        />
      </div>
      <div className="absolute inset-0 bg-custom-blue bg-opacity-75 z-0"></div>
      <div className="relative flex justify-center items-center h-full flex-col">
        <h1 className="text-white text-3xl md:text-6xl lowercase">
          New way of designe
        </h1>
        <Link
          href="/auth/register"
          className={
            "text-white text-sm md:text-xl border-2 p-2 md:p-3 rounded-3xl m-2 md:m-3 transition duration-200 ease-in-out hover:bg-black hover:border-black"
          }
        >
          register now
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
