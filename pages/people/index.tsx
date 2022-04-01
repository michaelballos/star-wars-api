import Link from 'next/link'
import { GetStaticProps, NextPage } from 'next'
import { GetPeopleResults, Person } from '../../types'

const Characters: NextPage<{people: Person[]}> = ({people}) => {

 return (
    <div className='characterPage'>
       {people.map(person => (
         <div key={person.name}>
           <Link href={`/people/${person.name}`}>
             <h1>
            <a>{person.name}</a>
             </h1>
            </Link>
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