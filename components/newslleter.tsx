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
      <div className="w-full flex flex-col items-center gap-2 md:flex-row md:gap-0 md:justify-center">
        <input
          type="email"
          placeholder="Email address"
          className="w-full md:w-80 max-w-96 p-2 border-2 border-r-0 border-custom-blue rounded-3xl text-black focus:border-custom-blue focus:ring-0 focus:outline-none placeholder-custom-blue md:rounded-r-none md:border-r-0"
        />
        <button className="w-full md:w-auto max-w-96 p-2 border-2 border-custom-blue rounded-3xl hover:bg-white hover:text-black transition duration-200 ease-in-out md:rounded-l-none md:border-l-0">
          Subscribe
        </button>
      </div>
    </section>
  );
};
