import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

if (localStorage.getItem('theme') == null) {
   localStorage.setItem('theme', ' Dark Mode');
}

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
   const [activeTheme, setActiveTheme] = useState(localStorage.getItem('theme'));
   const [iconClasses, setIconClasses] = useState('fa-solid fa-moon');

   useEffect(() => {
      if (localStorage.getItem('theme') == ' Light Mode') {
         wrapper.current.classList.add('light');
         setIconClasses('fa-solid fa-sun');
      }
   }, []);

   const changeTheme = () => {
      if (wrapper.current.classList.toggle('light')) {
         localStorage.setItem('theme', ' Light Mode');
         setActiveTheme(' Light Mode');
         setIconClasses('fa-solid fa-sun');
      } else {
         localStorage.setItem('theme', ' Dark Mode');
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
