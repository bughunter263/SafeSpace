/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // refined accessible palette
        background: '#FAFBFB',        // off-white page background
        surface: '#F6F7F8',           // cards
        muted: '#6B7280',             // neutral muted text
        charcoal: '#0F1724',          // primary text (dark charcoal)
        accent: '#4F8BFF',            // primary soft blue accent
        'accent-600': '#3F75E6',
        'accent-500': '#4F8BFF',
        'accent-400': '#78A8FF',
        'glass': 'rgba(255,255,255,0.6)'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial'],
        heading: ['Poppins', 'Inter', 'sans-serif']
      },
      boxShadow: {
        subtle: '0 6px 22px rgba(15,23,36,0.06)'
      },
      borderRadius: {
        xl: '14px'
      }
    }
  },
  plugins: []
};
