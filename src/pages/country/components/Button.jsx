import React from 'react';
import tw from 'twin.macro';
import { Link } from 'react-router-dom';

const ButtonS = tw.button`
   bg-skin-element
   font-semibold
   mb-12
   px-6 py-2
   rounded-md
   shadow-md
`;

const Button = ({ children, dest }) => {
   return (
      <span className="mr-2">
         <Link to={dest}>
            <ButtonS>{children}</ButtonS>
         </Link>
      </span>
   );
};

export default Button;
