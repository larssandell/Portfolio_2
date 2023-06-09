import { ThemeProvider, createTheme, useMediaQuery } from '@mui/material';
import { createContext, useEffect, useMemo, useState } from 'react';

export const ColorModeContext = createContext({
    toggleMode: () => {},
    // mode: 'dark',
    mode: true,
});

export const ColorContextProvider = ({ children }) => {
    const preferredMode = useMediaQuery('(prefers-color-scheme: dark)');

    // console.log('pref mode', preferredMode);
    const [mode, setMode] = useState(true);
    const [palette, setPalette] = useState('dark');

    const colorMode = useMemo(
        () => ({
            toggleMode: () => setMode((prev) => !prev),
            // setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
            mode,
        }),
        [mode]
    );

    useEffect(() => {
        if (mode === true) {
            setPalette('dark');
        } else {
            setPalette('light');
        }
    }, [mode]);

    const theme = createTheme({
        palette: {
            mode: palette,
            ...(palette === 'dark'
                ? {
                      // Custom background color for dark mode
                      background: {
                          default: '#1a1a1a',
                          paper: '#1a1a1a',
                      },
                      text: {
                          primary: '#ffffff',
                          secondary: '#999999',
                          variant: '#bf5b04',
                      },
                  }
                : {
                      // Custom background color for light mode
                      background: {
                          default: '#fffdfa',
                          paper: '#fffdfa',
                      },
                      text: {
                          primary: '#000000',
                          secondary: '#666666',
                          variant: '#bf5b04',
                      },
                  }),
        },
        spacing: 4,
    });

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ColorModeContext.Provider>
    );
};
