import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";

import { getAllPostIds, getPostData } from "@/lib/projects";
import SEO from "@/components/SEO";
// import Pill from "@/components/Pill";

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    languages: string;
    contentHtml: string;
  };
}) {
  return (
    <>
      <SEO title={`r00ks: ${postData.title}`} />
      <article>
        <div className="mx-0 mt-0 mb-12">
          <Link href="/">
            <a className="hover:text-primary-600 dark:hover:text-primary-400">
              ← Back to home
            </a>
          </Link>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tighter my-3 mx-0 mono-type">
          {postData.title}
        </h1>
        <div className="flex align-start mt-4 mb-12 prose">
          {/* {postData.languages.split(", ").map((language) => (
            <Pill language={language} key={language} />
          ))} */}
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};
