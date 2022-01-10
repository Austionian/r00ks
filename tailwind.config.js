const colors = require('tailwindcss/colors')

module.exports = {
    purge: {
      // Use *.tsx if using TypeScript
      content: [
        './pages/**/*.tsx',
        './components/**/*.tsx',
        './components/*.tsx'
      ],
      options: {
        safelist: ['bg-python', 'bg-typescript', 'bg-flask', 'bg-django'],
      },
    },
    theme: {
      colors: colors,
      extend: {
        colors: {
          'primary-blue': '#3164dc',
          'python': '#3572a5',
          'typescript': '#2c7389',
          'flask': '#505050',
          'django': '#092e20',
        },
      }
    }
}