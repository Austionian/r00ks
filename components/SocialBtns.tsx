import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBlog,
  faPaperPlane,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const SocialBtns = () => (
  <section className="mt-6">
    <div className="pb-10 flex flex-row">
      <motion.a
        whileHover={{
          scale: 1.5,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.7 }}
        href="mailto:austin@r00ks.io"
        className="py-4 px-6 m-1 md:m-4 md:py-6 md:px-8"
        aria-label="email"
      >
        <FontAwesomeIcon className="h-8 w-8" icon={faPaperPlane} />
      </motion.a>
      <motion.a
        whileHover={{
          scale: 1.5,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.7 }}
        href="https://github.com/austionian"
        className="py-4 px-6 m-1 md:m-4 md:py-6 md:px-8"
        aria-label="github"
      >
        <FontAwesomeIcon className="h-8 w-8" icon={faGithub} />
      </motion.a>
      <motion.a
        whileHover={{
          scale: 1.5,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.7 }}
        href="https://blog.r00ks.io"
        className="py-4 px-6 m-1 md:m-4 md:py-6 md:px-8"
        aria-label="blog"
      >
        <FontAwesomeIcon className="h-8 w-8" icon={faBlog} />
      </motion.a>
      <motion.a
        whileHover={{
          scale: 1.5,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.7 }}
        href="https://read.cv/rooks"
        className="py-4 px-6 m-1 md:m-4 md:py-6 md:px-8"
        aria-label="CV"
      >
        <FontAwesomeIcon className="h-8 w-8" icon={faFileAlt} />
      </motion.a>
    </div>
  </section>
);

export default SocialBtns;
