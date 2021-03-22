import { Snackbar } from "@material-ui/core"
import { Alert } from "@material-ui/lab"
import * as React from "react"
import { useRecoilState } from "recoil"
import { errorStore } from "../../stores/errorStore"

export function ErrorSnackbar() {

	const [error] = useRecoilState(errorStore)

	return (
		<Snackbar open={error.display}>
			
			<Alert severity={
				error.error?.type === "ERROR" ? "error" :
					error.error?.type === "WARNING" ? "warning" : "info"
            
			}>{error.error?.message}</Alert>
			
		</Snackbar>
	)
}