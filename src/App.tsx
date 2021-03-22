import { MuiThemeProvider } from "@material-ui/core"
import * as React from "react"
import { RecoilRoot } from "recoil"
import { AppRouter } from "./components/routers/AppRouter"
import { ErrorSnackbar } from "./components/ui/ErrorSnackBar"
import { theme } from "./config/theme"
import "./index.css"

export function App() {
	return (
		<RecoilRoot>
			<MuiThemeProvider theme={theme}>
				<AppRouter />
				<ErrorSnackbar />
			</MuiThemeProvider>
		</RecoilRoot>
	)
}