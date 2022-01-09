import Link from 'next/link'

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
          Made with <a href='https://nextjs.org/'>Next.js</a>
        </footer>
      </div>
    </>
  )
}
