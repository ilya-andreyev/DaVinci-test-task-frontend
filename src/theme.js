const getColors = () => ({
  white: '#FFF',
  black: '#333',
  yellow: '#FFFFDD',
  gray1: '#D5D5D5',
  gray2: '#EEEEEE',
  whiteTransparent: 'rgba(255, 255, 255, .2)',
  blue1: '#3E5B76',
  blue2: '#628DB6',
});

const theme = {
  colors: { ...getColors() },
};

export default theme;
