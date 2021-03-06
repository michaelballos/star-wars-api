import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Read{' '}
          <Link href="/posts/about">
          <a>This Page!</a>
          </Link>
        </h1>

        <p className={styles.description}>
          Star Wars Da Dum 
        </p>

        <div className={styles.grid}>
          <Link href='/people'> 
          <a className={styles.card}>
            <h2>People &rarr;</h2>
            <p>Read About The People</p>
          </a>
          </Link>


          <Link href='/planets'> 
          <a className={styles.card}>
            <h2>Planets &rarr;</h2>
            <p>Read About The Planets</p>
         </a>
          </Link>

          <Link href=''> 
          <a className={styles.card}>
            <h2>Species &rarr;</h2>
            <p>Read About The Species</p>
         </a>
          </Link>


          <Link href=''> 
          <a className={styles.card}>
            <h2>Vehicles &rarr;</h2>
            <p>Read About The Vehicles</p>
         </a>
          </Link>

       </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
