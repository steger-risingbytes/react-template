import * as React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { NotFoundSite } from "../sites/NotFoundSite"


export function AppRouter() {
	return (
		<BrowserRouter>
			<Switch>
                


				{/* 404 - NOT FOUND  */}
				<Route>
					<NotFoundSite />
				</Route>
				

			</Switch>
		</BrowserRouter>
	)
}