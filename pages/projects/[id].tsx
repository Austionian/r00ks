import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'
import Link from 'next/link'

import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/projects'
import utilStyles from '../../styles/utils.module.css'
import Pill from '../../components/pill'


export default function Post({
  postData
}: {
  postData: {
    title: string
    languages: string
    contentHtml: string
  }
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <div style={{margin: '0 0 3rem 0'}}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className='flex align-start mt-4 mb-12'>
          {postData.languages.split(', ').map(language => <Pill language={language} key={language}/>)}
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string)
  return {
    props: {
      postData
    }
  }
}