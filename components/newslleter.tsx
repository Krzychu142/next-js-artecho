import Link from "next/link";

export const NewslleterSection = () => {
  return (
    <section className="border-b-2 border-custom-blue bg-black text-white flex flex-col items-center py-4 px-2 justify-center gap-4 md:gap-8">
      <h3 className="text-xl md:text-3xl">Subscribe to our newsletter</h3>
      <p className="text-xs md:text-base">
        Stay informed, sign up for notifications, but first read
        <Link
          href="/"
          className="hover:text-custom-blue transition duration-200 ease-in-out font-bold text-nowrap"
        >
          {" "}
          Privacy Policy
        </Link>
      </p>
      <div className="flex">
        <input
          type="email"
          placeholder="Email address"
          className="pl-2 md:pl-3 border-2 border-r-0 border-custom-blue rounded-l-3xl text-black focus:border-custom-blue focus:ring-0 focus:outline-none placeholder-custom-blue"
        />
        <button className="p-2 md:p-3 border-2 border-l-0 border-custom-blue rounded-r-3xl hover:bg-white hover:text-black transition duration-200 ease-in-out ">
          Subscribe
        </button>
      </div>
    </section>
  );
};

// px-4 md:px-8 py-4
