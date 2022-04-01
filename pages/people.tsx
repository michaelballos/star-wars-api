import Link from 'next/link'
import Head from 'next/head'

const People = () => {
  return (
    <div>
      <Head>
        <title>Characters</title>
      </Head>
      <h1>Characters</h1>
      <Link href="/">
        <a>Back Home &rarr;</a>
      </Link>
    </div>
  )

}

export const getStaticProps = async () => {
  const res = await fetch('https://swapi.dev/api/people/')
  const results = await res.json()

  return {
    props: {
      people: results
    }
  }
}



export default People