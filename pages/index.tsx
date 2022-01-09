import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Layout, { siteTitle } from '../components/layout'
import { getSortedProjectsData } from '../lib/projects'
import Date from '../components/date'
import utilStyles from '../styles/utils.module.css'

const name = 'Austin Rooks'

export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <Image
          priority
          src="/images/austin.png"
          className={utilStyles.borderCircle}
          height={144}
          width={144}
          alt={name}
        />
        <h2>Hi, I’m Austin, a software engineer based in Milwaukee. I'm currently creating products at Catholic Charities of St. Paul & Minneaplis to make critical non-profit processes more efficient.
          <br />
          I’m passionate about
        </h2>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Work</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/projects/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedProjectsData()
  return {
    props: {
      allPostsData
    }
  }
}
