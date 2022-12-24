import BaseRoutes from "./routes"
// import { ThemeProvider } from '@mui/material/styles';
import theme from "./styles/theme";
import { CssBaseline, GlobalStyles, Experimental_CssVarsProvider } from '@mui/material'


function App() {

  return (
    <>
      <Experimental_CssVarsProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles styles={{}}/>
        <BaseRoutes />
      </Experimental_CssVarsProvider>
    </>
  )
}

export default App
