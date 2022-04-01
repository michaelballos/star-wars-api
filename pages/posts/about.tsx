import Link from 'next/link'
import Head from 'next/head'

export default function About() {
  return (
    <div>
      <Head>
        <title>Trolled</title>
      </Head>
      <h1>Fuck You</h1>
        <p>
          Got Milk?
        </p>
      <h2>
        <Link href="/">
          <a>Back Home &rarr;</a>
        </Link>
      </h2>
    </div>
  )
}