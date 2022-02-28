import Link from "next/link";
import siteMetadata from "../data/siteMetadata";

const Footer = () => (
  <footer>
    <div className="flex flex-col items-center mt-16 mb-8 ">
      <div className="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
        <Link href="https://r00ks.io">
          <a className="hover:text-primary-600 dark:hover:text-primary-400">
            {siteMetadata.author}
          </a>
        </Link>
        <div>{` • `}</div>
        <div>{`© ${new Date().getFullYear()}`}</div>
        <div>{` • `}</div>
        <Link href="https://github.com/Austionian/blog.r00ks">
          <a className="hover:text-primary-600 dark:hover:text-primary-400">
            Source Code
          </a>
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
