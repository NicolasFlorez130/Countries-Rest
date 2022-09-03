import React, { useRef, useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Option from './Option';

const Open = styled.div`
   ${tw`
      bg-skin-element
      cursor-pointer
      flex items-center justify-between
      px-10 py-4
      rounded-md
      shadow-md
      w-3/5

      md:(w-full)
   `}
`;

const Options = tw.div`
      absolute
      bg-skin-element
      mt-2
      px-10 py-4
      rounded-md
      shadow-md
      w-3/5

      md:(w-full)
`;

const countries = ['All', 'Africa', 'America', 'Asia', 'Europe', 'Oceania'];

const Select = () => {
   const [optionsValue, setOptionsValue] = useState('Filter by Region');

   const options = useRef();

   const open = () => options.current.classList.toggle('hidden');

   return (
      <div>
         <Open onClick={open} name="continents">
            <span>{optionsValue}</span>
            <i className="fa-solid fa-angle-down"></i>
         </Open>
         <div tw="relative">
            <Options onClick={open} ref={options} className="selectContinent hidden">
               {countries.map(country => (
                  <Option key={country} value={country} setter={setOptionsValue}></Option>
               ))}
            </Options>
         </div>
      </div>
   );
};

export default Select;
