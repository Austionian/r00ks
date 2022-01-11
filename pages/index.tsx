import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBlog, faPaperPlane, faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import Layout, { siteTitle } from '../components/layout'
import { getSortedProjectsData } from '../lib/projects'
import Pill from '../components/pill'


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
          <h2 className='text-4xl'>
            Hi, I’m Austin, a product-centric developer based in Milwaukee. I'm currently building internal products at Catholic Charities of St. Paul & Minneaplis to make critical non-profit processes more efficient.
          </h2>
        </div>
      </section>
      <section>
        <div className='pb-10 flex flex-row'>
          <a href='mailto:austin@r00ks.io' className='btn btn-lg py-4 px-6 m-1 sm:m-4 sm:py-6 sm:px-8' aria-label='email'>
            <FontAwesomeIcon icon={faPaperPlane} />
          </a>
          <a href='https://github.com/austionian' className='btn btn-lg py-4 px-6 m-1 sm:m-4 sm:py-6 sm:px-8' aria-label='github'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href='https://blog.r00ks.io' className='btn btn-lg py-4 px-6 m-1 sm:m-4 sm:py-6 sm:px-8' aria-label='blog'>
            <FontAwesomeIcon icon={faBlog} />
          </a>
          <a href='https://read.cv/rooks' className='btn btn-lg py-4 px-6 m-1 sm:m-4 sm:py-6 sm:px-8' aria-label='CV'>
            <FontAwesomeIcon icon={faFileAlt} />
          </a>
        </div>
      </section>
      <section>
        <h2 className='text-xl leading-snug mt-4 mb-4 font-extralight'>SELECTED WORK</h2>
        <ul className='p-0 m-0 list-none'>
          {allPostsData.map(({ id, title, languages }) => (
            <li className='text-3xl mt-8 mb-8' key={id}>
              <Link href={`/projects/${id}`}>
                <a className='hover:text-primary-blue'>{title}</a>
              </Link>
              <br />
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
