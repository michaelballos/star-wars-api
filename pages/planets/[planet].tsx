import { GetStaticPaths, NextPage } from 'next';
import { useRouter } from 'next/router';
import { GetPlanetResults, Planet } from '../../types';

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://swapi.dev/api/planets/');
  const { results }: GetPlanetResults = await res.json();

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

const Planet: NextPage = () => {
  const router = useRouter();
  const { name } = router.query;
  return (
    <div className="planet">
      <h1>{name}</h1>
    </div>
  );
};

export default Planet;