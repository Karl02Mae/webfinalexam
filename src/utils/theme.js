const theme = (isDarkMode) => ({
    palette: {
        mode: isDarkMode ? 'dark' : 'light',
        primary: {
            //main: '#639BC8',
            main: isDarkMode ? "#3b1c35" : '#9E5E93',
            contrastText: 'rgba(0, 0, 0, 0.87)',
        },
        secondary: {
            main: '#F1BFCB',
            contrastText: 'rgba(0, 0, 0, 0.87)',
        },
        thirtiary: {
            main: '#39D400',
        },
        background: {
            default: isDarkMode ? "#1a1a1a" : '#f0f0f0',
          },
        info: {
            main: '#2196f3',
        },
    },
    typography: {
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
    },
});
export default theme;