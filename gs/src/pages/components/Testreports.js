
import Styles from '@/styles/testreport.module.css';
import Link from 'next/link.js';
import Header from './Header.js';
const Testreports = () => {
  return (
    <>


      <Header />
      <div className='wrapper'>
     
        <div className={Styles.container}>
          <h1 className={Styles.h1}>Test Reports</h1>
          <div>
            <Link href={"https://chat.openai.com/chat?__cf_chl_tk=hnD0CqWfhbXXrQjjb3RwbRmXXnVdnhiGvd4b44OPXWE-1680759313-0-gaNycGzNGKU"}><h2>Battlefield V</h2></Link>
         
            <Link href={"https://chat.openai.com/chat?__cf_chl_tk=hnD0CqWfhbXXrQjjb3RwbRmXXnVdnhiGvd4b44OPXWE-1680759313-0-gaNycGzNGKU"}><h2>Battlefield 1</h2></Link>
            <Link href={"https://chat.openai.com/chat?__cf_chl_tk=hnD0CqWfhbXXrQjjb3RwbRmXXnVdnhiGvd4b44OPXWE-1680759313-0-gaNycGzNGKU"}><h2>A Tale of Plague Innocence</h2></Link>
            <Link href={"https://chat.openai.com/chat?__cf_chl_tk=hnD0CqWfhbXXrQjjb3RwbRmXXnVdnhiGvd4b44OPXWE-1680759313-0-gaNycGzNGKU"}><h2>Rise Of The Tomb Raider</h2></Link>
            <Link href={"https://chat.openai.com/chat?__cf_chl_tk=hnD0CqWfhbXXrQjjb3RwbRmXXnVdnhiGvd4b44OPXWE-1680759313-0-gaNycGzNGKU"}><h2>Shadow Of The Tomb Raider</h2></Link>
            <Link href={"https://chat.openai.com/chat?__cf_chl_tk=hnD0CqWfhbXXrQjjb3RwbRmXXnVdnhiGvd4b44OPXWE-1680759313-0-gaNycGzNGKU"}><h2>Spirit Of The North</h2></Link>
          </div>
     </div>
     </div>


    </>
  )
}

export default Testreports