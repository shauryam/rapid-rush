import {sharedColors} from './colors';



export const whiteAndPurple = {
  id: 'lightWithPurple',
  colors: {
    primaryButtonBackground: sharedColors.purple,
    primaryColor: sharedColors.purple,
    primaryButtonText: '#FFFFFF',
    appBackground: '#FFFFFF',
    secondaryButtonBackground: '#FFFFFF',
    secondaryButtonText: sharedColors.purple,
    secondaryButtonBorderColor: sharedColors.purple
  },
  // typography, spacing, etc.
};

export const darkWithPurple= {
  id: 'darkWithPurple',
  colors: {
    primaryButtonBackground: sharedColors.purple,
    primaryButtonText: '#FFFFFF',
    appBackground: '#333232',
    secondaryButtonBackground: '#FFFFFF',
    secondaryButtonText: '#FFFFFF',
    secondaryButtonBorderColor: sharedColors.purple
  },
  // typography, spacing, etc.
};


// Export all themes in a single object for easy access
const themes = {
    whiteAndPurple,
    darkWithPurple
};

export default themes;