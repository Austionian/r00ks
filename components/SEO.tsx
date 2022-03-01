import Head from "next/head";
import siteMetadata from "@/data/siteMetadata";

interface SEOProps {
  title: string;
  description?: string;
}

const SEO = ({ title, description }: SEOProps) => (
  <Head>
    <title>{title}</title>
    <meta
      name="description"
      content={description ? description : siteMetadata.description}
    />
    <meta property="og:site_name" content={siteMetadata.title} />
    <meta property="og:title" content={title} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content={siteMetadata.twitter} />
    <meta name="twitter:title" content={title} />
  </Head>
);

export default SEO;
