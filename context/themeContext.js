// External imports
import { createContext, useContext, useState } from 'react';

// Internal imports
import themes  from '@/app/styles/theme';

const ThemeContext = createContext({
  theme: themes.whiteAndPurple,
  setTheme: () => {}
});


/** 
 * Provides theme context to child components.
 * Wrap this provider around components that need access to the theme context.
 */
export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(themes.whiteAndPurple);

    return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  
}

export const useTheme = () => useContext(ThemeContext)

