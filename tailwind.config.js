/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: [
          'JetBrains Mono',
          'IBM Plex Mono',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace'
        ]
      },
      colors: {
        opencode: {
          canvas: '#161414',
          ink: '#f5f2f2',
          'ink-deep': '#ffffff',
          'surface-soft': '#221e1e',
          'surface-card': '#2b2626',
          'surface-dark': '#161414',
          'surface-dark-elevated': '#221e1e',
          hairline: 'rgba(245,242,242,0.15)',
          'hairline-strong': '#a39f9f',
          body: '#cccccc',
          mute: '#8c8989',
          stone: '#7a7777',
          ash: '#5c5959',
          accent: '#4ba3ff',
          'accent-hover': '#73b9ff',
          'accent-active': '#99cbff',
          danger: '#ff3b30',
          warning: '#ff9f0a',
          success: '#30d158',
        }
      }
    },
    container: {
      center: true,
    },
  },
  plugins: [
    require("@catppuccin/tailwindcss")({
      prefix: "",
      defaultFlavour: "mocha",
    }),
  ],
};
