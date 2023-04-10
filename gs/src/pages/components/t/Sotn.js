
import Header from '../Header'
import Footer from '../footer'
import spirit from '../../../../public/images/spirit.jpg'
import Image from 'next/image'
import Styles from '@/styles/Battlefield.module.css'
import Head from 'next/head'
const Sotn = () => {
  return (
    <>
      <Head>
        <title>Spirit Of The North
        </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <br />
      <br />
      <main className={Styles.main}> <h1 className={Styles.name}>Spirit Of The North</h1>
        <div className={Styles.image}>
          <Image className={Styles.image} src={spirit} alt="Spirit Of The North" width={500} height={300} />
        </div>

        <div className={Styles.p}>
          <h2>1. Bad implementation of physics  </h2>
          <p>     When playing Spirit of the North, a physics issue arises. Whenever the fox jumps on a rock or solid ice surface, its feet appear to not touch the surface. There is a noticeable gap between the fox's feet and the surface, even when the fox is at an angle. Additionally, the fox remains straight as if it were on a flat surface, which again cause of by its physics.

          </p>
          <br />
          <div className={Styles.youtube}>
            <iframe width="960" height="560" src="https://www.youtube.com/embed/kBUQ72Scr_4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <br>
          </br>
          <br>
          </br>
          <hr></hr>
          <h2>2. Fox and magical stick pass through solid objects due to collision detection issue   </h2>
          <p>  There was a collision detection problem in the game, which allowed the fox and the magical stick to pass through rocks and ice surfaces. The issue occurred when players controlled the fox to move towards rocks or ice surfaces while carrying the magical stick. Sometimes, the fox's head could pass through the rocks and ice, and both sides of the magical stick could pass through anything as well, due to its length. However, it was acceptable for the magical stick because some terrains were narrow and sometimes the fox was supposed to go through caves and small entries, but it could have been implemented with a better solution.
          </p>
          <br />
          <div className={Styles.youtube}>
            <iframe width="960" height="560" src="https://www.youtube.com/embed/zn6Ww0HwoZM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <br>
          </br>
          <br>
          </br>










        </div>
      </main>
      <Footer />
    </>
  )
}

export default Sotn