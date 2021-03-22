import * as React from "react"
import { RecoilRoot } from "recoil"
import { AppRouter } from "./components/routers/AppRouter"

export function App() {
	return (
		<RecoilRoot>
			<AppRouter />
		</RecoilRoot>
	)
}