import React from 'react'
import Link from 'next/link'
import Styles from '@/styles/Home.module.css'
import Image from 'next/image'
import welcome from '../../.././public/images/giphy.gif'
import Honest from "../../.././public/images/honest.jpg"
import Header from './Header.js'
import Footer from '././footer.js'
const Home = () => {
  return (
    <>
      <Header />
    

      <main className={Styles.main}>
       
        <div className={Styles.image}>
          <Image className={Styles.image} src={welcome} width={350} height={350} />
          <h1 className={Styles.h1} >Welcome to bug-catching Town!</h1>
        </div>

        <div className={Styles.p}>
          <p></p>
          <p>As a game tester, I spend hours exploring every corner and crack of games to find and report bugs. But I don't do it alone. With the help of my sharp eye and trustworthy bug finder glasses, I catch even the slim bugs hiding in the shadows.
          This website is my way of sharing my findings with the world.
          </p>
          <p>Whether you're a fellow tester, a game developer,or just someone who enjoys a good laugh, you'll find valuable insights and knowledge here. Together, we can make the gaming world a better place by finding and fixing those annoying bugs, one at a time.</p>
          <p> So, buckle up and get ready for a wild ride !!!</p>
          <Image className={Styles.honest} src={Honest} width={450} height={350} />
        </div>
      </main>
   
      
    </>
  )
}

export default Home