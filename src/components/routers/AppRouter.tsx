import * as React from "react"
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import { Routes } from "../../config/routes"
import { LoginSite } from "../sites/LoginSite"
import { NotFoundSite } from "../sites/NotFoundSite"
import { NoAuthOnlyRoute } from "./util/NoAuthOnlyRoute"


export function AppRouter() {
	return (
		<BrowserRouter>
			<Switch>

				<Route exact path={Routes.ROOT}>
					<Redirect
						to={{
							pathname: Routes.AUTH.LOGIN
						}}
					/>
				</Route>
                
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