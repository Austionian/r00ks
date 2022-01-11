import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

import Nav from './nav'
import Meta from './meta'
import styles from './layout.module.css'

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
      <div className="topbar-container">
        <div className="topbar">
        </div>
      </div>
      <Nav />
      <div className="global-wrapper">
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
        <footer className='inline-flex'>
          <FontAwesomeIcon icon={faCopyright} className='pr-1'/>{new Date().getFullYear()}
          {' | '}
          Made with <a href='https://nextjs.org/' className='pl-1 pr-1 decoration-wavy'>Next.js</a>
          {` | `}
          <a href="https://github.com/Austionian/r00ks" className='pl-1 decoration-wavy'>
            Source Code
          </a>
        </footer>
      </div>
    </>
  )
}
