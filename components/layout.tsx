import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

import Nav from './nav'
import Meta from './meta'

export const siteTitle = 'r00ks.io'

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <>
      <Meta />
      <div className="fixed w-full z-50 top-0 right-0">
        <div className="h-1.5 bg-primary-blue">
        </div>
      </div>
      <Nav />
      <div className="my-0 mx-auto max-w-5xl py-10 px-5">
        <main>{children}</main>
        {!home && (
          <div className="mx-0 mt-12 mb-0">
            <Link href="/">
              <a className='hover:text-primary-blue'>← Back to home</a>
            </Link>
          </div>
        )}
        <footer className='inline-flex'>
          <FontAwesomeIcon icon={faCopyright} className='pr-1'/>{new Date().getFullYear()}
          {' | '}
          Made with <a href='https://nextjs.org/' className='pl-1 pr-1 hover:text-primary-blue'>Next.js</a>
          {` | `}
          <a href="https://github.com/Austionian/r00ks" className='pl-1 hover:text-primary-blue'>
            Source Code
          </a>
        </footer>
      </div>
    </>
  )
}
