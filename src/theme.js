const getColors = () => ({
  white: '#FFF',
  black: '#333',
  yellow: '#FFFFDD',
  gray: '#D5D5D5',
  whiteTransparent: 'rgba(255, 255, 255, .2)',
  blue1: '#3E5B76',
  blue2: '#628DB6',
});

const getBreakpoints = () => ({
  big: '1500px',
  big2: '1120px',
  middle: '1000px',
  small: '600px',
});

const getShadows = () => ({
  black: '0 0 20px rgba(0, 0, 0, .1)',
  green: '0 0 20px rgba(48, 190, 118, .5)',
  light: '0px 8px 14.5px rgba(13,51,32,0.1)',
});

const theme = {
  colors: { ...getColors() },
  breakpoints: { ...getBreakpoints() },
  shadows: { ...getShadows() },
};

export default theme;
