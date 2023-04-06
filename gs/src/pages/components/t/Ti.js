import React from 'react'
import Header from '../Header'
import Footer from '../footer'
import Tale from '../../../../public/images/Tale.jpg'
import Image from 'next/image'
import Styles from '@/styles/Battlefield.module.css'
const Ti = () => {
  return (
    <>
      <Header />
      <main className={Styles.main}> <h1 className={Styles.name}>A Tale of Plague Innocence</h1>
        <div className={Styles.image}>
          <Image className={Styles.image} src={Tale} alt="battlefield" width={500} height={300} />
        </div>

        <div className={Styles.p}>
          <p></p>


          <h2>1. </h2>
          <p>While I was playing the “Under no flag” campaign in Battlefield V, I reached my second objective: “Plant a time bomb on Stuka aircraft.”
            <p>I noticed a small, shining light hovering in the air. It seemed out of place in its surroundings and didn't appear to belong to anything nearby, Although there was a table next to it.
            </p>
            Maybe it was meant to be a table lamp, or maybe the developers just placed it there for some other reason. Whatever the case, I decided to mention it anyway. </p>









        </div>
      </main>
      <Footer />
    </>
  )
}

export default Ti