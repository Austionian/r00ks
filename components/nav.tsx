import Link from 'next/link'

import ThemeToggle from './toggle'

const Nav = () => (
    <nav className='flex-content index-heading'>
        <ul>
            <li>
                <Link href="/">
                    About
                </Link>
            </li>
            <li>
                <a href='https://blog.r00ks.io'>
                    Blog {' >'}
                </a>
            </li>
        </ul>
        <ThemeToggle />
    </nav>
)

export default Nav
