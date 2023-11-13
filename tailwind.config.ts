import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'custom-purple': '#AE3E97', // Puedes darle el nombre que prefieras
        'custom-red': '#FE0000', // Puedes darle el nombre que prefieras
        'custom-azul': '#00AEEF', // Puedes darle el nombre que prefieras
      },
    },
  },
  plugins: [],
}
export default config
