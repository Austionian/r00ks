import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

import Nav from "./Nav";

export const siteTitle = "r00ks.io";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Nav />
      <div className="my-0 mx-auto max-w-7xl py-10 px-5">
        <main>{children}</main>
        <footer className="my-16">
          <FontAwesomeIcon icon={faCopyright} className="pr-1 h-4" />
          {new Date().getFullYear()}
          {" | "}
          Made with{" "}
          <a
            href="https://nextjs.org/"
            className="pl-1 pr-1 hover:text-primary-600 dark:hover:text-primary-400"
          >
            Next.js
          </a>
          {` | `}
          <a
            href="https://github.com/Austionian/r00ks"
            className="pl-1 hover:text-primary-600 dark:hover:text-primary-400"
          >
            Source Code
          </a>
        </footer>
      </div>
    </>
  );
};

export default LayoutWrapper;
