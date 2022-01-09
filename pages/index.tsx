import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBlog, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

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
        <div className='index-intro'>
        <h2>Hi, I’m Austin, a software engineer based in Milwaukee. I'm currently creating products at Catholic Charities of St. Paul & Minneaplis to make critical non-profit processes more efficient.
          <br />
          I’m passionate about <span>software</span>
        </h2>
        </div>
      </section>
      <section>
        <div style={{height: '100px'}}>
          <a href='mailto:austin@r00ks.io' className='btn btn-lg' aria-label='email'>
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href='https://github.com/austionian' className='btn btn-lg' aria-label='github'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href='https://blog.r00ks.io' className='btn btn-lg' aria-label='blog'>
            <FontAwesomeIcon icon={faBlog} />
          </a>
        </div>
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
