import { createTheme } from "@mui/material";

export const linearBackground: string = "linear-gradient(180deg, #161E27 0%, #16212E 100%)";



const theme = createTheme({
    typography: {
        fontFamily: 'Raleway, sans-serif'
    },
    palette: {
        primary: {
            light: '#dff8fe',
            main: '#00d0ff',
            dark: '#0066af',
            contrastText: '#172331'
        },
        
        background: {
            default: "#172331",
            paper: '#172331',
        },
        text: {
            primary: '#fff',
            secondary: '#172331'
        },
        success: {
            light: '#e2faec',
            main: '#35df90',
            dark: '#007626',
            contrastText: '#172331'
        },
        warning: {
            light: '#fef3df',
            main: '#fab648',
            dark: '#e15000',
            contrastText: '#172331'
        },
        error: {
            light: '#f9e6e6',
            main: '#f47a61',
            dark: '#b1160d',
            contrastText: '#172331'
        }
    }
})


export const globalStyles = {
    "*": {
        // Disable Blue Highlight when Touch/Press object with cursor: 'pointer' in Android
        WebkitTapHighlightColor: "transparent",
        // scrollbar
        scrollbarWidth: "5px",
        scrollbarHeight: "5px",
        scrollbarColor: `${theme.palette.primary.main} #00000033`,
        outline: "none !important",
      },
      "*::-webkit-scrollbar": {
        height: "5px",
        width: "5px",
      },
      "*::-webkit-scrollbar-track": {
        background: "#00000033",
      },
      "*::-webkit-scrollbar-thumb": {
        background: `${theme.palette.primary.main}aa`,
      },
      "*::-webkit-scrollbar-thumb:hover": {
        background: theme.palette.primary.main,
      },
      body: {
        overflowX: "hidden",
      },
      // App Body Scrollbar
      "&::-webkit-scrollbar": {
        width: "5px",
        height: "5px",
      },
      "&::-webkit-scrollbar-track": {
        background: "#00000033",
      },
      "&::-webkit-scrollbar-thumb": {
        background: `${theme.palette.primary.main}aa`,
      },
      "&::-webkit-scrollbar-thumb:hover": {
        background: theme.palette.primary.main,
      },
}


export default theme