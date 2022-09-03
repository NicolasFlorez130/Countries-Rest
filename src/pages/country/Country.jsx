import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'twin.macro';
import CountriesContext from '../../contexts/countries/CountriesContext';
import LoadingScreen from './../../components/LoadingScreen';
import Button from './components/Button';

const Body = styled.div`
   ${tw`
      grid
      m-auto
      max-w-screen-xl
      px-6 py-10

      sm:(grid-cols-2)
   `}

   .secDiv {
      ${tw`
         grid

         sm:(ml-6)
      `}
   }

   .container {
      ${tw`
         grid
         lg:( grid-cols-2 )
      `}
   }

   img {
      ${tw`mb-12`}
   }

   h2 {
      ${tw`
         font-bold text-3xl
         mb-10
      `}
   }
`;

const FieldsContainer = tw.div`
   mb-10
   lg:( mr-3 )
`;

const Field = styled.div`
   ${tw`mb-2`}

   .label {
      ${tw`font-semibold`}
   }
`;

const ButtonsContainer = tw.div``;

const getLanguages = obj => {
   const langs = [];
   obj && Object.entries(obj).forEach(lang => langs.push(lang.at(1)));
   return langs.join(', ');
};

const Country = () => {
   const { country, getCountry, loading } = useContext(CountriesContext);

   const { id } = useParams();

   useEffect(() => {
      getCountry(id);
   }, [id]);

   if (!country)
      return (
         <div className='h-full p-6'>
            <Button $loading={loading} dest="/">
               <i className="fa-solid fa-arrow-left"></i> Back
            </Button>
            <div className="flex items-center justify-center ">Country Not Found</div>
         </div>
      );

   return (
      <>
         <LoadingScreen />
         <Body>
            <div>
               <Button $loading={loading} dest="/">
                  <i className="fa-solid fa-arrow-left"></i> Back
               </Button>
               <img src={country.flags?.svg} alt={`${country.name?.common} flag`} />
            </div>
            <div className="secDiv">
               <h2>{country.name?.common}</h2>
               <div className="container">
                  <FieldsContainer>
                     <Field>
                        <span className="label">Native Name: </span>
                        <span>
                           {country.name != null &&
                              Object.values(country.name.nativeName)[0].common}
                        </span>
                     </Field>
                     <Field>
                        <span className="label">Population: </span>
                        <span>{new Intl.NumberFormat().format(country.population)}</span>
                     </Field>
                     <Field>
                        <span className="label">Region: </span>
                        <span>{country.region}</span>
                     </Field>
                     <Field>
                        <span className="label">Sub Region: </span>
                        <span>{country.subregion}</span>
                     </Field>
                     <Field>
                        <span className="label">Capital: </span>
                        <span>{country.capital}</span>
                     </Field>
                  </FieldsContainer>
                  <FieldsContainer>
                     <Field>
                        <span className="label">Top Level Domain: </span>
                        <span>{country.tld}</span>
                     </Field>
                     <Field>
                        <span className="label">Currencies: </span>
                        <span>
                           {country.currencies != null && Object.values(country.currencies)[0].name}
                        </span>
                     </Field>
                     <Field>
                        <span className="label">Languages: </span>
                        <span>{getLanguages(country.languages)}</span>
                     </Field>
                  </FieldsContainer>
               </div>
               <h3 className="font-semibold mb-6 text-xl">Border Countries: </h3>
               <ButtonsContainer>
                  {country?.borders &&
                     country.borders.map(
                        (border, i) =>
                           i < 3 && (
                              <Button key={border} dest={`/country/${border}`}>
                                 {border}
                              </Button>
                           )
                     )}
               </ButtonsContainer>
            </div>
         </Body>
      </>
   );
};

export default Country;
