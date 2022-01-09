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
        <footer>
          <FontAwesomeIcon icon={faCopyright} />{" "}{new Date().getFullYear()}
          {' | '}
          Made with <a href='https://nextjs.org/'>Next.js</a>
          {` | `}
          <a href="https://github.com/Austionian/r00ks">
            Source Code
          </a>
        </footer>
      </div>
    </>
  )
}
