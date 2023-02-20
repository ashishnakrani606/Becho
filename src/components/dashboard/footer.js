import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div>
        <div className="flex text-black/40 dark:text-white/40 text-xs justify-between md:p-7 py-7 flex-wrap gap-4">
          <p>© 2023 Becho.io</p>
          <div className="flex gap-5">
            <Link href="#0" className="text-black/40 dark:text-white/40">
              About
            </Link>
            <Link href="#0" className="text-black/40 dark:text-white/40">
              Support
            </Link>
            <Link href="#0" className="text-black/40 dark:text-white/40">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
