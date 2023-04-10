import React from 'react'
import Header from '../Header'
import Footer from '../footer'
import Tale from '../../../../public/images/Tale.jpg'
import Image from 'next/image'
import Styles from '@/styles/Battlefield.module.css'
import Head from 'next/head'

const Ti = () => {
  return (
    <>
      <Head>
        <title>A Tale of Plague Innocence
        </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <br />
      <br />
      <main className={Styles.main}> <h1 className={Styles.name}>A Tale of Plague Innocence</h1>
        <div className={Styles.image}>
          <Image className={Styles.image} src={Tale} alt="battlefield" width={500} height={300} />
        </div>

        <div className={Styles.p}>
          <h2>1. Plants and tree's branch collision detection problem </h2>
          <p>   In Chapter 4, "The Apprentice," of A Plague Tale: Innocence, an observation was made regarding a visual glitch. While walking on a constructed wooden platform over a river, plants appeared to pass through the platform. The plants seemed to be emerging from the river below and appearing on top of the platform, despite the wooden pallets being present. This same phenomenon was observed again when a tree branch appeared to pass through a rock fence. These observations suggest a possible issue with the game's programming and should be investigated further.

          </p>
          <br />
          <div className={Styles.youtube}>
            <iframe width="960" height="560" src="https://www.youtube.com/embed/TP9seitsNHA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <br>
          </br>
          <br>
          </br>
          <hr></hr>
          <h2>2. AI Issue (Guards face difficulty to attack when player holds torch) </h2>
          <p>  In Chapter 4, "The Apprentice," of A Plague Tale: Innocence, while playing the game and exploring the environment, an observation was made regarding a visual glitch. While walking on a wooden platform constructed of wooden pallets over a river, plants appeared to pass through the platform. The plants seemed to be emerging from the river below and appearing on top of the platform, despite the wooden pallets being present. This same phenomenon was observed again when a tree branch appeared to pass through a rock fence. These observations suggest a possible issue with the game's programming and should be investigated further.

          </p>
          <br />
          <div className={Styles.youtube}>
            <iframe width="960" height="560" src="https://www.youtube.com/embed/P8FLGJ5OS0c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

          </div>
          <br />









        </div>
      </main>
      <Footer />
    </>
  )
}

export default Ti