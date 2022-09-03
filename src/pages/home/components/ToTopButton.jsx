import React from 'react';
import tw from 'twin.macro';

const Button = tw.button`
   bg-skin-element
   fixed
   flex items-center justify-center
   bottom-6 right-6
   rounded-full
   shadow-md
   w-14 h-14
`;

const ToTopButton = () => {
   return (
      <Button onClick={() => window.scrollTo(0, 0)}>
         <i className="fa-solid fa-arrow-up"></i>
      </Button>
   );
};

export default ToTopButton;
