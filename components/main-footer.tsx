import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const MainFooter = () => {
  return (
    <footer className="min-h-1/2screen bg-black text-white flex flex-col justify-around px-4 py-4 gap-12">
      <div className="grid grid-flow-row md:grid-flow-col justify-start md:justify-around md:items-baseline gap-8">
        <div className="flex flex-col">
          <h4 className="capitalize">Any questions?</h4>
          <p className="text-sm">Feel free to ask</p>
          <a
            href="mailto:kustosz142@gmail.com"
            title="click to open email"
            className="font-bold hover:text-custom-blue transition duration-200 ease-in-out"
          >
            click to email us
          </a>
          <p className="text-sm">or make a phone call</p>
          <a
            className="font-bold hover:text-custom-blue transition duration-200 ease-in-out"
            href="tel:+48949958"
          >
            +48530949958
          </a>
        </div>
        <div className="flex flex-col">
          <h4 className="capitalize">More informations</h4>
          <ul>
            <li>
              <Link
                href="/"
                className="hover:text-custom-blue transition duration-200 ease-in-out font-bold text-sm"
              >
                Store Regulations
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:text-custom-blue transition duration-200 ease-in-out font-bold text-sm"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:text-custom-blue transition duration-200 ease-in-out font-bold text-sm"
              >
                Return Policy
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:text-custom-blue transition duration-200 ease-in-out font-bold text-sm"
              >
                Payment and Delivery
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h4 className="capitalize">Visit our social media</h4>
          <ul>
            <li>
              <Link
                href="/"
                className="flex items-center gap-2 text-sm font-bold hover:text-custom-blue transition duration-200 ease-in-out"
              >
                Facebook <FacebookOutlined />
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="flex items-center gap-2 text-sm font-bold hover:text-custom-blue transition duration-200 ease-in-out"
              >
                Instagram <InstagramOutlined />
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="flex items-center gap-2 text-sm font-bold hover:text-custom-blue transition duration-200 ease-in-out"
              >
                LinkedIn <LinkedinOutlined />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="aligne-end">
        <p></p>
      </div>
    </footer>
  );
};

export default MainFooter;
