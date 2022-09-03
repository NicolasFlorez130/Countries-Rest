/** @type {import('tailwindcss').Config} */

module.exports = {
   content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         screens: {
            'xs': '375px'
         },
         fontFamily: {
            nunito: "'Nunito Sans', serif"
         },
         textColor: {
            skin: {
               base: 'var(--color-text-base)'
            }
         },
         backgroundColor: {
            skin: {
               base: 'var(--color-background-base)',
               element: 'var(--color-element-base)'
            }
         }
      },
   },
   plugins: [],
}