import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

import Home from './components/Home';
import Battlefiled1 from './components/Battlefiled1';
import Footer from './components/footer';
export default function Main() {
  return ( 
    <>
      <Head>
        <title>TTT</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Home />
      <Battlefiled1/>
      <Footer></Footer>
  </>
  )
}