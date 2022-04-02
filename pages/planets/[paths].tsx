import { GetStaticPaths, NextPage } from 'next';
import { useRouter } from 'next/router';
import { GetPlanetResults } from '../../types';
/*
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://swapi.dev/api/planets/');
  const  {results}: GetPlanetResults = await res.json();
  const paths = results.map(planet => ({
   params: {
      name: planet.name,
   }

  }
  ))
  console.log(paths)
  return {
    paths,
    fallback: false,
  }
}

*/
const HabitatDetails: NextPage = () => {
/*
  const router = useRouter();
  const  { planet }  = router.query;
*/
  return (
    <div className="planet">
      <h1> planet </h1>
    </div>
  );
};

export default HabitatDetails;