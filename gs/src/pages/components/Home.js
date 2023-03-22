import React from 'react'
import Link from 'next/link'
import Styles from '@/styles/Home.module.css'
import Image from 'next/image'

import welcome from '../../../public/images/giphy.gif'
const Home = () => {
  return (
    <>
      <div className={Styles.nav}>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <>Home</>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <>About</>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <>Contact</>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <main className={Styles.main}>
        <h1 className={Styles.h1} >Welcome to bug-catching Town!</h1>
        <div className={Styles.image}>
          <Image className={Styles.image} src={welcome} width={350} height={350} />

        </div>

        <div className={Styles.p}>
          <p>This is the main content of my website.</p>
          <p>As a game tester, I spend hours exploring every corner and crack of games to find and report bugs. But I don't do it alone. With the help of my sharp eye and trustworthy bug finder glasses, I catch even the slim bugs hiding in the shadows.
          This website is my way of sharing my findings with the world.
          </p>
          <p> Whether you're a fellow tester, a game developer,or just someone who enjoys a good laugh, you'll find valuable insights and knowledge here. Together, we can make the gaming world a better place by finding and fixing those annoying bugs, one at a time.</p>
          <p> So, buckle up and get ready for a wild ride.</p>
        </div>
      </main>


    </>
  )
}

export default Home