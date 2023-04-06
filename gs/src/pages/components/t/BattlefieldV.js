import Styles from '@/styles/Battlefield.module.css'
import battlefield from "../../../../public/images/BV.jpg"
import maybe from "../../../../public/images/maybe.png"
import oldnanny from "../../../../public/images/oldnanny.png"
import good from "../../../../public/images/good.png"
import tank from "../../../../public/images/tank.png"
import head from "../../../../public/images/head.png"
import bed from "../../../../public/images/bed.jpg"
import Footer from "../footer.js"
import Image from 'next/image'
import Header from '../Header.js'
import Link from 'next/link'
const Battlefield1 = () => {
     return (
          <>
               <Header />
               <main className={Styles.main}> <h1 className={Styles.name}>Battlefield V</h1>
                    <div className={Styles.image}>
                         <Image className={Styles.image} src={battlefield} alt="battlefield" width={500} height={300} />
                    </div>

                    <div className={Styles.p}>
                         <p>Ah! The Battlefield V, where we get to know the World War 1 history lessons, and unknown stories. From firing your trusty rifle and dodging grenades and tank attacks makes the adrenaline goes on. The next, you're rushing through the air in a biplane, raining down bombs on off guard foes.
                              It's chaotic, it's intense, and it's oh-so-satisfying. But between all these action, bug sometimes  stab out of nowhere, which makes the whole joy down to some percentage.

                              Fortunately, I will be representing all those bug I have found while playing Battlefield V.</p>


                         <h2>1.Mysteries Light: </h2>
                         <p>While I was playing the “Under no flag” campaign in Battlefield V, I reached my second objective: “Plant a time bomb on Stuka aircraft.”
                              <p>I noticed a small, shining light hovering in the air. It seemed out of place in its surroundings and didn't appear to belong to anything nearby, Although there was a table next to it.
                              </p>
                              Maybe it was meant to be a table lamp, or maybe the developers just placed it there for some other reason. Whatever the case, I decided to mention it anyway. </p>

                         <div className={Styles.maybe}>
                              <Image className={Styles.maybe} src={maybe} alt="maybe" width={450} height={350} /></div>
                         <div className={Styles.youtube}>
                              <iframe width="960" height="560" src="https://www.youtube.com/embed/QrD_7V4q3vM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                         </div>
                         <br>
                         </br>
                         <br>
                         </br>
                         <hr></hr>
                         <h2>2. Bad trees graphics and Ground shrinkage: </h2>
                         <p> As I was proceeding further, minding my own business with the mission objective, I came across this unfortunate soul and ended up putting a bullet in his head.


                              <p>But to give him some dignity in death, I went closer to his lifeless body and noticed his ammunition belt flapping in the breeze like it's made of a feather. Talk about a lightweight loadout! It's almost as if he wanted to make it easier for me to take him out.
                              </p>
                              Ah, the irony of it all – still on the same mission, “infiltrating enemy garrisons” objective.....
                         </p>

                         <div className={Styles.maybe}>
                              <Image className={Styles.maybe} src={oldnanny} alt="maybe" width={450} height={350} /></div>
                         <div className={Styles.youtube}>
                              <iframe width="960" height="560" src="https://www.youtube.com/embed/AVLzpM2xfWk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                         </div>
                         <br>
                         </br>
                         <br>
                         </br>
                         <hr></hr>
                         <h2>3. Flapping Ammunition Belt: </h2>
                         <p>In the “Under no flag” campaign, I get another objective which was “infiltrating enemy garrisons”, but instead, I decided to become a mountain explorer.


                              <p>As I climbed higher and higher, I noticed  some trees had low-quality graphics and appeared blurry with a 2D shape, and the ground started to shrink in a square shape as each step I was taking. It looked like the game's physics were having a meltdown!
                              </p>
                              I couldn't resist the urge to test these bugs out, so I kept climbing. But my “scientific investigation” came to an end, when I fell off a cliff that looked like it was made of building blocks. It seems like the game developers have some work to do if they want to prevent me from becoming a virtual daredevil!
                         </p>

                         <div className={Styles.maybe}>
                              <Image className={Styles.maybe} src={good} alt="maybe" width={450} height={500} /></div>
                         <div className={Styles.youtube}>
                              <iframe width="960" height="560" src="https://www.youtube.com/embed/imtmBKFCZFM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                         </div>
                         <br>
                         </br>
                         <br>
                         </br>
                         <hr></hr>
                         <h2>4. Enemy tank stuck in the wooden pole after attack:</h2>
                         <p>I was in the heat of battle, taking on an enemy tank that was trying to turn me into  mashed potatoes. After lots of running and fierce firefight, I finally used German penzerfaust to destroy the tank with two shots and sent it flying.


                              <p>to my surprise, the tank got stuck in a wooden pole above the ground, and began moving up and down like a giant, metallic pendulum.
                              </p>
                              And next to it lay a body, sleeping soundly for eternity, as if taking in the swinging motion.
                         </p>

                         <div className={Styles.maybe}>
                              <Image className={Styles.maybe} src={tank} alt="maybe" width={550} height={300} /></div>
                         <div className={Styles.youtube}>
                              <iframe width="960" height="560" src="https://www.youtube.com/embed/3OyyZThU6sE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                         </div>
                         <br>
                         </br>
                         <br>
                         </br>
                         <hr></hr>
                         <h2>5. Enemy head stuck in the solid object (Object collision issue) :



                         </h2>

                         <p>
                              I remember encountering this issue more times than I care to admit. It was like a recurring nightmare, except instead of monsters, it was just enemy body parts getting stuck in solid objects.
                              <p>
                                   I mean, seriously, what were the developers and QA testers thinking? Did they not realize that an enemy head getting stuck in the object was not exactly what  any gamer would feel good about?
                              </p>

                              In all seriousness, this is a common issue that developers and QA testers overlook far too often. It's like they're so focused on making sure the game runs smoothly that they forget about the little things, like making sure an enemy's head doesn't get stuck in a solid object.
                              <p>So, as a tester, I take a lesson from my own experiences that I will make sure not to overlook these object collision issues. After all, I don't want my enemies to end up looking like modern art installations or, worse, like they're auditioning for a role in The Exorcist.</p>
                         </p>

                         <div className={Styles.maybe}>
                              <Image className={Styles.maybe} src={head} alt="maybe" width={350} height={300} /></div>
                         <div className={Styles.youtube}>
                              <iframe width="960" height="560" src="https://www.youtube.com/embed/schAsxsqaqw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                         </div>
                         <br>
                         </br>
                         <br>
                         </br>
                         <hr></hr>
                         <h2>6. Mysterious wall mounted pillow seat:


                         </h2>
                         <p>
                              Again I found one more object which does not fit with its surroundings. It was pillow mounted in the wall. Maybe for someone to take rest for a while or again developer decided to put it there just for fun.
                              <p>

                                   Well, well, well! What did we have there?  A pillow seat that appeared to have mistakenly climbed up the wall and gotten stuck there? Or was it just a modern way to add a bit of humor to our lives? I wasn't  quite sure what the purpose of this wall-mounted cushion was, but it certainly had me engaged in some serious “pillow talk.”
                              </p>
                              Maybe it was intended for people who were too tired to stand, or for those who wanted to rest their heads while gazing at the wall.
                         </p>

                         <div className={Styles.maybe}>
                              <Image className={Styles.maybe} src={bed} alt="maybe" width={450} height={500} /></div>
                         <div className={Styles.youtube}>
                              <iframe width="960" height="560" src="https://www.youtube.com/embed/CR_i36cD7C8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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

export default Battlefield1