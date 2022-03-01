import { GetStaticProps } from "next";
import Link from "next/link";
import SocialBtns from "@/components/SocialBtns";

import { getSortedProjectsData } from "@/lib/projects";
// import Pill from "@/components/Pill";

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    title: string;
    id: string;
    languages: string;
    description: string;
  }[];
}) {
  return (
    <>
      <section>
        <div className="mt-12">
          <h2 className="text-4xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold mono-type">
            Building
            <br />
            User-
            <br />
            Centric
            <br />
            Applications.
          </h2>
        </div>
      </section>
      <SocialBtns />
      <section>
        <h2 className="text-xl leading-snug mt-12 mb-4 font-extralight">
          SELECTED WORK
        </h2>
        <ul className="p-0 m-0 list-none">
          {allPostsData.map(({ id, title, languages }) => (
            <li className="text-lg mt-8 mb-8" key={id}>
              <div className="flex items-center">
                <Link href={`/projects/${id}`}>
                  <a className="text-3xl font-bold mono-type hover:text-primary-600 dark:hover:text-primary-400">
                    {title}
                    <span className="text-sm pl-2 align-middle">→</span>
                  </a>
                </Link>
              </div>
              <div className="flex align-start mt-4">
                {/* {languages.split(", ").map((language) => (
                  <Pill language={language} key={language} />
                ))} */}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedProjectsData();
  return {
    props: {
      allPostsData,
    },
  };
};
