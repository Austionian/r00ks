import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBlog, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import Layout, { siteTitle } from '../components/layout'
import { getSortedProjectsData } from '../lib/projects'
import utilStyles from '../styles/utils.module.css'
import Pill from '../components/pill'

const name = 'Austin Rooks'

export default function Home({
  allPostsData
}: {
  allPostsData: {
    title: string
    id: string
    languages: string
    framework: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div className='mt-36'>
        <h2 className='text-4xl'>Hi, I’m Austin, a software engineer based in Milwaukee. I'm currently building internal products at Catholic Charities of St. Paul & Minneaplis to make critical non-profit processes more efficient.
          <br />
          I’m passionate about <span>...</span>
        </h2>
        </div>
      </section>
      <section>
        <div className='h-28'>
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
        <h2 className='text-2xl leading-snug mt-4 mb-4'>Work</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, title, languages }) => (
            <li className='text-3xl mt-8 mb-8' key={id}>
              <Link href={`/projects/${id}`}>
                <a className='hover:text-primary-blue'>{title}</a>
              </Link>
              <br />
              {/* <small className={utilStyles.lightText}>
                {`${language} (${framework})`} 
              </small> */}
              <div className='flex align-start mt-4'>
                {languages.split(', ').map(language => <Pill language={language} key={language}/>)}
              </div>
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
