import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Link } from 'react-router-dom';

const CardS = styled.div`
   ${tw`
      bg-skin-element
      my-6
      overflow-hidden
      rounded-md
      shadow-lg
      w-full
   `}

   .dataContainer {
      ${tw`p-10`}

      h2 {
         ${tw`
            break-words
            font-bold
            pb-4
            text-2xl
         `}
      }

      .field {
         ${tw`py-1`}

         .label {
            ${tw`font-semibold`}
         }
      }
   }
`;

const Card = ({ country }) => {
   return (
      <CardS className="countryCard" id={country.name.common.replaceAll(' ', '_')}>
         <Link to={`/country/${country.altSpellings[0]}`}>
            <img
               tw="object-cover w-full"
               src={country.flags.svg}
               alt={`${country.name.common} flag`}
            />
            <div className="dataContainer">
               <h2>{country.name.common}</h2>
               <div className="field">
                  <span className="label">Population: </span>
                  <span>{new Intl.NumberFormat().format(country.population)}</span>
               </div>
               <div className="field">
                  <span className="label">Region: </span>
                  <span>{country.region}</span>
               </div>
               <div className="field">
                  <span className="label">Capital: </span>
                  <span>{country.capital}</span>
               </div>
            </div>
         </Link>
      </CardS>
   );
};

export default Card;
