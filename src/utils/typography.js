import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: ['IBM Plex Sans', 'sans-serif'],
  bodyFontFamily: ['IBM Plex Sans', 'sans-serif'],
  bodyColor: 'hsl(0, 0%, 15%',
  // See below for the full list of options.
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
