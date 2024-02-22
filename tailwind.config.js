/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary/2':'hsla(356, 84%, 59%, 1)',
				'primary': 'hsla(356, 84%, 59%, 1)',
        'grey/1': 'hsla(220, 12%, 95%, 1)',
        'grey/2': '#E4E4E4',
        'grey/6': '#666666',
        'grey-light': 'hsla(212, 18%, 79%, 1)',
        'grey-dark':'hsla(0, 0%, 60%, 1)',
        'neutral-white': 'hsla(0, 0%, 99%, 1)',
        'neutral-black': 'hsla(0, 0%, 20%, 1)',
        'gradient-dark': '180deg, #000000 0%, rgba(34, 34, 34, 0.2) 100%',
        'blue': '#337AB7'
			},
      screens: {
        xs: "480px",
        "3xl": "1920px",
      },
    },
    fontFamily: {
			Lato: ['Lato', 'sans-serif'],
      Jakarta: ['Plus Jakarta Sans', 'sans-serif']
		},
    fontWeight: {
      300: '300',
      400: '400',
      500: '500',
      600: '600',
      700: '700',
      800: '800',
      900: '900',
    }
  },
  plugins: [],
}

