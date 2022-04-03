import Link from 'next/link'
import Head from 'next/head'

export default function About() {
  return (
    <div>
      <Head>
        <title>Trolled</title>
      </Head>
      <video width='320' height='240' autoPlay muted>
        <source src='../../public/media/rickRoll.mp4' type='video/mp4' />
      </video>
        <h1>
          Got Milk?
        </h1>
      <h2>
        <Link href="/">
          <a>Back Home &rarr;</a>
        </Link>
      </h2>
    </div>
  )
}