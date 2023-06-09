
import Header from '../Header'
import Footer from '../footer'
import Rise from '../../../../public/images/Rise.jpg'
import Image from 'next/image'
import Styles from '@/styles/Battlefield.module.css'
import Head from 'next/head'
const Rotr = () => {
  return (
    <>
      <Head>
        <title>Rise of The Tomb Raider
        </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <br />
      <br />
      <main className={Styles.main}> <h1 className={Styles.name}>Rise Of The Tomb Raider</h1>
        <div className={Styles.image}>
          <Image className={Styles.image} src={Rise} alt="Rise Of The Tomb Raider" width={500} height={300} />
        </div>

        <div className={Styles.p}>
          <h2>1. Hair Collision Detection Problem:  </h2>
          <p>    During the mission on the Northwest Border of Syria, a collision detection issue was encountered. After Lara Croft falls off a cliff, when she puts her hand on her forehead, her fingers pass through hair, causing a collision detection problem. While this issue does not affect gameplay significantly, but it negatively impacts the player's experience.

          </p>
          <br />
          <div className={Styles.youtube}>
            <iframe width="960" height="560" src="https://www.youtube.com/embed/37gXv0NzmfY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <br>
          </br>
          <br>
          </br>
          <hr></hr>
          <h2>2. Anvil Collision Detection Problem:  </h2>
          <p> A collision detection issue was observed while exploring the Valley Farmstead in the game. While a blacksmith was hammering a steel rod on an anvil, it was noticed that the rod and the hammer were passing through the anvil due to collision detection problems. 

          </p>
          <br />
          <div className={Styles.youtube}>
            <iframe width="960" height="560" src="https://www.youtube.com/embed/nAeIhh3uMb4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <br>
          </br>
          <br>
          </br>
          <hr></hr>
          <h2>3. Bow collision problem with AI:   </h2>
          <p>   A collision detection issue was observed while playing at the Valley Farmstead in the game. Half of the bow passed through the AI body when the bow was raised against them. Further testing showed that this issue arises with all AI, indicating a significant collision detection. 

          </p>
          <br />
          <div className={Styles.youtube}>
            <iframe width="960" height="560" src="https://www.youtube.com/embed/2n7SOcSTl4k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <br>
          </br>
          <br>
          </br>
          <hr></hr>
          <h2>4. Player character collision problem with bow:   </h2>
          <p>  While playing the "Silent Night" mission, a collision detection issue was encountered as Lara Croft was in the water. The bow on her back passed through her body, additionally the bow strings passing through her shoulders as well. Although not easy to see, this issue was is not acceptable and needs to be addressed and improve. 

          </p>
          <br />
          <div className={Styles.youtube}>
            <iframe width="960" height="560" src="https://www.youtube.com/embed/PdQzKqYHUiU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <br>
          </br>
          <br>
          </br>
          <hr></hr>
          <h2>5. Scarf Collision Detection Problem:   </h2>
          <p>   During the "Silent Night" mission in the game, a bug encountered with the AK47 rifle and scarf collision detection. This issue occurred when the player's character was in crouch position, and it continued throughout the game whenever the player was carrying a large weapon while wearing a scarf. Indicates no proper implementation of the outfit collision box, as the problem occurred repeatedly. 

          </p>
          <br />
          <div className={Styles.youtube}>
            <iframe width="960" height="560" src="https://www.youtube.com/embed/xPOJ_2LZ8YM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <br>
          </br>
          <br>
          </br>
          <hr></hr>
          <h2>6. Disappearing and Reappearing Rocks on different camera angle:  </h2>
          <p>  In the mission objective to "Reach the tower and infiltrate the ruins to find Sofia”, an issue encounter while fighting enemies in tomb. Some rocks were appearing and disappearing depending on the camera angle, which could be a potential bug or glitch in the game's programming or graphics rendering. 

          </p>
          <br />
          <div className={Styles.youtube}>
            <iframe width="960" height="560" src="https://www.youtube.com/embed/4nEWkJhkBSE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>









        </div>
      </main>
      <Footer />
    </>
  )
}

export default Rotr