// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonBlue: '#00d4ff',  // 60% - couleur principale
        neonPurple: '#8f00ff', // 30% - couleur d’accentuation
        neonPink: '#ff00e6',   // 10% - couleur secondaire
        darkBg: '#0d0f1c',     // arrière-plan sombre
        lightBg: '#1c1e3c',
        accent: '#00e676',
      },
      fontFamily: {
        futuristic: ['Orbitron', 'sans-serif'],
      },
      animation: {
        pulseNeon: 'pulseNeon 2s infinite',
        fadeIn: 'fadeIn 0.5s ease-out forwards',
        bounceIn: 'bounceIn 1s ease-in-out forwards',
      },
      keyframes: {
        pulseNeon: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.5)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
