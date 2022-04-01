import Link from 'next/link'
import Head from 'next/head'
import { GetStaticProps, NextPage } from 'next'
import { People, GetPeopleResults } from '../../types'

const Characters: NextPage<{people: Person[]}> = ({people}) => {

 return (
    <div className='characterPage'>
     
       {people.map(person => (
         <div key={person.name}>
            <h1>Name: {person.name}</h1>
            <p>Height: {person.height}</p>
            <p>Mass: {person.mass}</p>
            <p>Hair Color: {person.hair_color}</p>
          </div>
       ))}

      <Link href="/">
        <a>Go Back Home &rarr;</a>
      </Link>

    </div>
  )

}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch('https://swapi.dev/api/people/')
  const { results }: GetPeopleResults = await res.json()

  return {
    props: {
      people: results,
    },
  }
}

export default Characters