import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Navigation = styled.nav`
   ${tw`
      bg-skin-element
      flex justify-between
      px-6 py-8
   `}

   h1 {
      ${tw`
         font-bold
      `}
   }

   button {
      ${tw`
         font-semibold
      `}
   }
`;

const Nav = ({ wrapper }) => {
   const [activeTheme, setActiveTheme] = useState(' Dark Mode');
   const [iconClasses, setIconClasses] = useState('fa-solid fa-moon');

   const changeTheme = () => {
      if (wrapper.current.classList.toggle('light')) {
         setActiveTheme(' Light Mode');
         setIconClasses('fa-solid fa-sun');
      } else {
         setActiveTheme(' Dark Mode');
         setIconClasses('fa-solid fa-moon');
      }
   };

   return (
      <Navigation>
         <div className="flex justify-between m-auto max-w-screen-xl w-full">
            <h1>Where in the world?</h1>
            <button onClick={changeTheme}>
               <i className={iconClasses}></i>
               {activeTheme}
            </button>
         </div>
      </Navigation>
   );
};

export default Nav;
