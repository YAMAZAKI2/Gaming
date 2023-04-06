import React from 'react'
import Header from '../Header'
import Footer from '../footer'
import battlefield1 from '../../../../public/images/battlefield1.jpg'
import Image from 'next/image'
import Styles from '@/styles/Battlefield.module.css'
const B1 = () => {
  return (
    <>
      <Header />
      <main className={Styles.main}> <h1 className={Styles.name}>Battlefield 1</h1>
        <div className={Styles.image}>
          <Image className={Styles.image} src={battlefield1} alt="A Tale of Plague Innocence" width={500} height={300} />
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

export default B1