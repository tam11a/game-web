import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import BaseRoutes from "./routes";
import theme, { globalStyles } from "@styles/theme";

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<GlobalStyles styles={globalStyles} />
				<BaseRoutes />
			</ThemeProvider>
		</>
	);
}

export default App;
