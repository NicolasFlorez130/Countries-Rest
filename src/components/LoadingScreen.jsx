import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import CountriesContext from '../contexts/countries/CountriesContext';
import earth from '../assets/he.gif';

const Screen = styled.div`
   ${tw`
      bg-skin-base
      fixed
      flex justify-center items-center
      font-semibold
      h-screen w-full
      opacity-60
      text-2xl
      inset-0
      `}

   ${({ $loading }) => {
      return !$loading ? tw`hidden` : '';
   }}

   img {
      ${tw`
         w-3/5
         xl:(w-2/5)
      `}
   }
`;

const LoadingScreen = () => {
   const { loading } = useContext(CountriesContext);

   return (
      <Screen $loading={loading}>
         <img src={earth} alt="" />
      </Screen>
   );
};

export default LoadingScreen;
