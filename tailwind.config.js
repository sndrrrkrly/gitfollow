const colors = require('tailwindcss/colors');
const options = {
     darkMode: 'class',
     content: [
          './src/**/*.{js,jsx,ts,tsx,html,css}',
     ],
     theme: {
          fontFamily: {
               sans: [
                   'Inter',
                   '-apple-system',
                   'BlinkMacSystemFont',
                   'Segoe UI',
                   'Roboto',
                   'Helvetica',
                   'Arial',
                   'sans-serif',
               ],
   
               mono: [
                   'Menlo',
                   'Monaco',
                   'Courier New',
                   'monospace',
               ],
          },

          fontSize: {
               tiny: '0.625rem',
               xs: '.75rem',
               sm: '.875rem',
               base: '1rem',
               lg: '1.125rem',
               xl: '1.25rem',
               '2xl': '1.5rem',
               '3xl': '1.875rem',
               '4xl': '2.25rem',
               '5xl': '3rem',
               '6xl': '4rem',
               '7xl': '5rem',            
          },

          colors: {
               white: colors.white,
               black: colors.black,
               slate: colors.slate,
               gray: colors.gray,
               neutral: colors.neutral,
               stone: colors.stone,
               red: colors.red,
               orange: colors.orange,
               amber: colors.amber,
               yellow: colors.yellow,
               lime: colors.lime,
               green: colors.green,
               emerald: colors.emerald,
               teal: colors.teal,
               cyan: colors.cyan,
               sky: colors.sky,
               blue: colors.blue,
               indigo: colors.indigo,
               violet: colors.violet,
               purple: colors.purple,
               fuchsia: colors.fuchsia,
               pink: colors.pink,
               rose: colors.rose,

               primary: 'var(--color-light)',
               secondary: 'var(--color-dark)',
          },
   
          spacing: {
               0: '0px',
               1: '5px',
               1.5: '6px',
               2: '10px',
               3: '15px',
               4: '20px',
               5: '30px',
               5.5: '35px',
               6: '40px',
               6.5: '50px',
               7.5: '55px',
               7: '60px',
               8: '75px',
               9: '80px',
               10: '90px',
               11: '100px',
               11.5: '105px',
               12.5: '125px',
               15: '150px',
               15.5: '180px',
               18: '183px',
               19: '195px',
               20: '210px',
               21: '15rem',
               24: '12rem',
               250: '250px',
               400: '400px',
               600: '600px',
               635: '635px',
               850: '850px',
               '5l': '10rem',
               '55l': '285px',
               '6l': '300px',
               '7l': '320px',
               'n1/2': '-70%',
          },
             
          borderWidth: {
               DEFAULT: '1px',
               
               0: '0px',
               4: '4px',
               2: '2px',
          },
   
          borderRadius: {
               5: '5px',
               8: '8px',
               40: '40px',
               
               'full': '9999px',
          },
   
          extend: {
               outline: {
                   'no-chrome': 'none',
               },
          },

          extend: {},
     },

     plugins: [],
};

module.exports = options;