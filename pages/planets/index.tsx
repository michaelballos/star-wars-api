import { NextPage } from 'next';

export const Planets: NextPage = () => {
  return (
    <div className="planetsPage">

    </div>
  );
}

const gestaticProps = async (context) => {
  const res = fetch('https://swapi.dev/api/planets/');
  const { results }: GetPlanetsResults = await res.json();

  return {
    props: {
      planets: results,
    },
}

export default Planets;