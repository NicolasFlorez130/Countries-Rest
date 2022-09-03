import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import tw from 'twin.macro';
import CountriesContext from '../../../contexts/countries/CountriesContext';

const OptionS = tw.div`
      cursor-pointer
      py-1
      transform

      hover:( scale-105 )
`;

const Option = ({ value, setter }) => {
   const option = useRef();

   const { getCountries, getContinentCountries, setLoading } = useContext(CountriesContext);

   useEffect(() => {
      option.current.onclick = () => {
         setter(option.current.innerHTML);
         value == 'All' ? getCountries() : getContinentCountries(value);
         setLoading();
      };
   }, []);

   return <OptionS ref={option}>{value}</OptionS>;
};

export default Option;
