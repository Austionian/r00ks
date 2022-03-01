import ThemeSwitch from "./ThemeSwitch";
// import Logo from "../public/assets/svg/logo.svg";
import { motion } from "framer-motion";

const Nav = () => (
  <nav className="flex justify-between items-center max-w-7xl m-auto p-5 sm:p-6">
    <div className="flex items-center">
      <motion.div
        initial={{ rotateY: 0 }}
        animate={{ rotateY: 360 }}
        transition={{
          ease: "easeInOut",
          duration: 2,
          flip: Infinity,
          repeatDelay: 0.5,
        }}
      >
        {/* <Logo /> */}
      </motion.div>
      <h1 className="text-3xl md:text-4xl font-bold ml-4 mono-type">
        AUSTIN ROOKS
      </h1>
    </div>
    <div>
      <ThemeSwitch />
    </div>
  </nav>
);

export default Nav;
