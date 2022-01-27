module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xxsmx':{'max':'321px'},

      'xsm':'484px',
      'xsmx':{'max':'483px'},

      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'smx': {'max': '639px'},

      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'mdx': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'lgx': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      'xlx': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '2xlx': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }  
    },
    
    extend: {},
  },
  plugins: [],
}