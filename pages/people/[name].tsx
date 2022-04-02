import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Characters from '.';
import { GetPeopleResults, Person } from '../../types';

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch('https://swapi.dev/api/people/')
  const { results }: GetPeopleResults = await res.json()

  return {
    props: {
      people: results,
    },
  }

}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://swapi.dev/api/people/');
  const { results }: GetPeopleResults = await res.json();

  const paths = results.map(person => ({
    params: {
      name: person.name,
    }
  }
  ))

  return {
      paths,
      fallback: false,
    }
  
}


const CharacterDetails: NextPage = () => {
  const router = useRouter();
  const { name } = router.query;

  return (
    <div className="character">
      <h1>{name}</h1>
      <ul>
        <li>
        </li>
      </ul>
    </div>
  )
}

export default CharacterDetails;
