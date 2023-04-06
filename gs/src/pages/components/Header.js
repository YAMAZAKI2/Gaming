import React from 'react'
import Styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Testreports from './Testreports'
const Header = () => {
  return (
   <div className={Styles.nav}>
    <nav>
     <ul>
      <li>
       <Link href="/">
        <>Home</>
       </Link>
      </li>
      <li>
       <Link
        href='/components/Testreports'>
        <>Test Reports </>
       </Link>
      </li>
      <li>
       <Link href="/components/contact">
        <>Contact</>
       </Link>
      </li>
     </ul>
    </nav>
   </div>
  )
}

export default Header