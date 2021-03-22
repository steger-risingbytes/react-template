import * as React from "react"
import { Redirect, Route } from "react-router-dom"
import { useRecoilState } from "recoil"
import { Routes } from "../../../config/Routes"
import { authStore } from "../../../stores/authStore"

export function NoAuthOnlyRoute(props: {
    exact?: boolean
    path?: string
    children?: React.ReactNode
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
						pathname: Routes.ROOT
					}}
				/>
			)}
		</Route>
	)
}