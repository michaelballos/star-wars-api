import { NextPage, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import { GetPeopleResults } from '../../types';

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
  return <h1>Person Details{name}</h1>
}

export default CharacterDetails;
