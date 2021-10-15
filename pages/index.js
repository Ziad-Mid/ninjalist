import Head from 'next/head'  
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
    </Head>
    <div className='container'>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto distinctio recusandae nisi, corporis itaque provident perspiciatis quasi dolores error voluptas.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto distinctio recusandae nisi, corporis itaque provident perspiciatis quasi dolores error voluptas.</p>
    
    <Link href="/ninjas">
      <a className={styles.btn}>See Ninjas List</a>
    </Link>
    </div>
    </>
  )
}
