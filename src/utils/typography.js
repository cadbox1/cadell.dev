import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '17px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Lato', 'sans-serif'],
  bodyFontFamily: ['Lato', 'sans-serif'],
  bodyColor: 'hsl(0, 0%, 0%', // I don't like lightening the body colour
  // See below for the full list of options.
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
