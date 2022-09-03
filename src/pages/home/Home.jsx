import React from 'react';
import { useState, useEffect, useContext } from 'react';
import tw from 'twin.macro';
import Card from './components/Card';
import Searcher from './components/Searcher';
import Select from './Components/Select';
import CountriesContext from '../../contexts/countries/CountriesContext';
import LoadingScreen from './../../components/LoadingScreen';
import ToTopButton from './components/ToTopButton';

const Body = tw.div`
   bg-skin-base
   p-6
`;

const Top = tw.div`
   grid grid-cols-1 gap-6
   m-auto
   max-w-screen-xl

   md:(grid-cols-[7fr 3fr])

`;

const CountriesContainer = tw.div`
   grid
   m-auto
   max-w-screen-xl

   sm:(grid-cols-2 gap-x-6)

   lg:(grid-cols-3)
`;

const Home = () => {
   const [filter, setFilter] = useState(() => '');

   const { countries, getCountries } = useContext(CountriesContext);

   useEffect(() => {
      getCountries();
   }, []);

   useEffect(() => {
      const cards = document.querySelectorAll('.countryCard');

      if (filter != '') {
         cards.forEach(card => {
            const id = card.id.replaceAll('_', ' ').toLowerCase();
            id.includes(filter.toLocaleLowerCase())
               ? card.classList.remove('hidden')
               : card.classList.add('hidden');
         });
      } else {
         cards.forEach(card => card.classList.remove('hidden'));
      }
   }, [filter, countries]);

   return (
      <Body>
         <ToTopButton />
         <Top>
            <Searcher setter={setFilter} />
            <Select />
         </Top>
         <LoadingScreen />
         <CountriesContainer>
            {countries
               .sort((a, b) => a.name.common.localeCompare(b.name.common))
               .map(country => (
                  <Card country={country} key={country.altSpellings.at(0)}></Card>
               ))}
         </CountriesContainer>
      </Body>
   );
};

export default Home;
