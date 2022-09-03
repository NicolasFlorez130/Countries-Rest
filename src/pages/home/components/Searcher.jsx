import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Search = styled.div`
   ${tw`
      bg-skin-element
      flex
      px-6
      rounded-md
      shadow-md
   `}

   & > * {
      ${tw`
         bg-skin-element
         px-4 py-4
      `}
   }

   input {
      ${tw`
      w-full

         focus:(
            outline-none
         )
      `}
   }
`;

const Searcher = ({ setter }) => {
   return (
      <Search>
         <label htmlFor="search">
            <i className="fa-solid fa-magnifying-glass"></i>
         </label>
         <input
            onChange={e => setter(e.target.value)}
            id="search"
            type="text"
            placeholder="Search for a country..."
         />
      </Search>
   );
};

export default Searcher;
