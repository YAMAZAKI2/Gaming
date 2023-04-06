import Header from './Header';
import Styles from '@/styles/contact.module.css';
import IN from './../../../public/images/in.png'
import GM from './../../../public/images/gm.jpg'
import Image from 'next/image';
const Contact = () => {
 return (
  <>
   <Header />
   <div className='wrapper'>
    <div className={Styles.container}>
     <h1>Contact Me</h1>
     <p>If you have any questions or feedback, please feel free to reach out at:</p>
     <ul>
      <li>
       

       <a href="mailto:thakaresagar86@gmail.com">thakaresagar86@gmail.com</a>

      </li>
      <br />
      <li>
       

       <a href="https://www.linkedin.com/company/example">LinkedIn</a>
      </li>
     </ul>
    </div>
   </div>
  </>
 );
};

export default Contact;
