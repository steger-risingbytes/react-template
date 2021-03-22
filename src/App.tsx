import * as React from "react"
import { RecoilRoot } from "recoil"
import { AppRouter } from "./components/routers/AppRouter"
import "./index.css"

export function App() {
	return (
		<RecoilRoot>
			<AppRouter />
		</RecoilRoot>
	)
}