import { useReducer } from 'react';
import CountriesReducer from './CountriesReducer';
import CountriesContext from './CountriesContext';

const CountriesState = ({ children }) => {
   const initialState = {
      countries: [],
      country: [],
      loading: true,
   };

   const [state, dispatch] = useReducer(CountriesReducer, initialState);

   const getContinentCountries = async continent => {
      dispatch({ type: 'SET_LOADING', payload: null });
      dispatch({ type: 'CLEAR_COUNTRY', payload: null });
      const res = await fetch(`https://restcountries.com/v3.1/region/${continent}`);
      const data = await res.json();
      dispatch({ type: 'GET_COUNTRIES', payload: data });
   };

   const getCountries = async () => {
      dispatch({ type: 'SET_LOADING', payload: null });
      dispatch({ type: 'CLEAR_COUNTRY', payload: null });
      const res = await fetch('https://restcountries.com/v3.1/all');
      const data = await res.json();
      dispatch({ type: 'GET_COUNTRIES', payload: data });
   };

   const getCountry = async code => {
      try {
         dispatch({ type: 'SET_LOADING', payload: null });
         const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
         const data = await res.json();
         dispatch({ type: 'GET_COUNTRY', payload: data.at(0) });
      } catch (error) {
         dispatch({ type: 'SET_NOT_FOUND', payload: null });
         console.error('Country not found.');
      }
   };

   const setLoading = () => {
      dispatch({ type: 'SET_LOADING', payload: null });
   };

   return (
      <CountriesContext.Provider
         value={{
            countries: state.countries,
            country: state.country,
            getCountries,
            getContinentCountries,
            getCountry,
            loading: state.loading,
            setLoading,
         }}>
         {children}
      </CountriesContext.Provider>
   );
};

export default CountriesState;
