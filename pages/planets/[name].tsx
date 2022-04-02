import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { GetPlanetResults } from '../../types';

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch('https://swapi.dev/api/planets/');
  const { results }: GetPlanetResults = await res.json();

  return {
    props: {
      planets: results,
    },
  }
  
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://swapi.dev/api/planets/');
  const  {results}: GetPlanetResults = await res.json();
  const paths = results.map(planet => ({
   params: {
      name: planet.name,
   }

  }
  ))

  return {
    paths,
    fallback: false,
  }
}

const HabitatDetails: NextPage = () => {
  const router = useRouter();
  const  { name }  = router.query;

  return (
    <div className="planet">
      <h1>{ name }</h1>
    </div>
  );
};

export default HabitatDetails;