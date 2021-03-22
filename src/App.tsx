import { MuiThemeProvider } from "@material-ui/core"
import * as React from "react"
import { RecoilRoot } from "recoil"
import { AppRouter } from "./components/routers/AppRouter"
import { theme } from "./config/theme"
import "./index.css"

export function App() {
	return (
		<RecoilRoot>
			<MuiThemeProvider theme={theme}>
				<AppRouter />
			</MuiThemeProvider>
		</RecoilRoot>
	)
}