
import Link from 'next/link';
import { GetStaticProps, NextPage } from 'next';
import { GetPlanetResults, Planet } from '../../types';

const Planets: NextPage<{ planets: Planet[] }> = ({ planets }) => {

/*
  const planetList = planets.map(planet => (
    <div key={planet.name}>
      <Link href={`/planets/${planet.name}`}>
        <h1>
          <a>
            {planet.name}
          </a>
        </h1>
      </Link>
    </div>
  ));
*/

  return (
    <div className="planetsPage">

      {JSON.stringify(planets)}

    <Link href='/'>
      <a>
        Go Back Home &rarr;
      </a>
    </Link>
    </div>
  )
}


export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch('https://swapi.dev/api/planets/');
  const { results }: GetPlanetResults = await res.json();
  console.log(results);
  return {
    props: {
      planets: results,
    },
  }
  
}

export default Planets