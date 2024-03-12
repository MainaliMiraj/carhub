import Image from "next/image";
import { footerLinks } from "@/constants";
import Link from "next/link";

function Footer() {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100 justify-between">
      <div className="flex max-md:flex-col flex-wrap gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start item-start gap-6">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            Carhub 2024 <br />
            All rights reserved &copy;
          </p>
        </div>
        <div className="footer__links justify-between flex-1">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>

              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>&copy; 2023 Carhub. All rights reserved</p>
        <div className="footer__copyrights-link flex gap-4">
          <Link href="/privacy-policy" className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href="/terms-of-use" className="text-gray-500">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
