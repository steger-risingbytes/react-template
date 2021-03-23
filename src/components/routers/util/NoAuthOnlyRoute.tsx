import * as React from "react"
import { Redirect, Route } from "react-router-dom"
import { useRecoilState } from "recoil"
import { Routes } from "../../../config/routes"
import { authStore } from "../../../stores/authStore"

export function NoAuthOnlyRoute(props: {
    exact?: boolean
    path?: string
    children?: React.ReactNode
	redirect?: string
}) {
	const [auth] = useRecoilState(authStore)

	return (
		<Route
			exact={props.exact}
			path={props.path}
		>
			{!auth.credentials ? (
				<>
					{props.children}
				</>
			) : (
				<Redirect 
					to={{
						pathname: props.redirect || Routes.ROOT
					}}
				/>
			)}
		</Route>
	)
}