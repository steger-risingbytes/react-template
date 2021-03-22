import * as React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Routes } from "../../config/routes"
import { LoginSite } from "../sites/LoginSite"
import { NotFoundSite } from "../sites/NotFoundSite"
import { NoAuthOnlyRoute } from "./util/NoAuthOnlyRoute"


export function AppRouter() {
	return (
		<BrowserRouter>
			<Switch>
                
				<NoAuthOnlyRoute exact path={Routes.AUTH.LOGIN}>
					<LoginSite />
				</NoAuthOnlyRoute>

				{/* 404 - NOT FOUND  */}
				<Route>
					<NotFoundSite />
				</Route>
				

			</Switch>
		</BrowserRouter>
	)
}