import {sharedColors} from './colors';



export const whiteAndPurple = {
  id: 'lightWithPurple',
  colors: {
    primaryButtonBackground: sharedColors.purple,
    primaryButtonText: '#FFFFFF',
    appBackground: '#FFFFFF',

    secondaryButtonBackground: '#FFFFFF',
    secondaryButtonText: sharedColors.purple,
    secondaryButtonBorderColor: sharedColors.purple
    // other colors...
  },
  // typography, spacing, etc.
};

export const dark= {
  id: 'dark',
  colors: {
    primary: '#90CAF9',
    secondary: '#FFD54F',
    background: '#121212',
    text: '#FFFFFF',
    // other colors...
  },
  // typography, spacing, etc.
};


// Export all themes in a single object for easy access
const themes = {
    whiteAndPurple,
    dark
};

export default themes;