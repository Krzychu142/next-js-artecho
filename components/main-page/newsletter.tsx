import Link from "next/link";
import NewsletterForm from "./newsletter-form";

export const NewsletterSection = () => {
  return (
    <section className="border-b-2 border-custom-blue bg-black text-white flex flex-col items-center py-4 px-2 justify-center gap-4 md:gap-8">
      <h3 className="text-xl md:text-3xl">Subscribe to our newsletter</h3>
      <p className="text-xs md:text-base">
        Stay informed, sign up for notifications, but first read{" "}
        <Link
          href="/"
          className="hover:text-custom-blue transition duration-200 ease-in-out font-bold text-nowrap"
        >
          Privacy Policy
        </Link>
      </p>
      <NewsletterForm />
    </section>
  );
};
