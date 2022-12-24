import BaseRoutes from "./routes"
import { ThemeProvider } from '@mui/material/styles';
import theme from "./styles/theme";
import { CssBaseline, GlobalStyles } from '@mui/material'


function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles styles={{}}/>
        <BaseRoutes />
      </ThemeProvider>
    </>
  )
}

export default App
