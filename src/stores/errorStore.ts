import { atom, useRecoilState } from "recoil"


interface IError {
    message: string
    type: "ERROR" | "WARNING" | "INFORMATION"
}

export type IErrorStore = {
    error?: IError
    display: boolean
}

export const errorStore = atom<IErrorStore>({
	key: "error-store",
	default: {
		display: false
	}
})

export function useErrorAction() {
	const [, setError] = useRecoilState(errorStore)

	const toggleError = (error: IError, time?: number) => {
		setError({
			display: true,
			error
		})
		setTimeout(() => {
			setError({
				display: false
			})
		}, time || 3000)
	}

	return {

		toggleError,

		toggleNetworkError(message?: string, n?: number) {
			toggleError({
				message: message ? `Network Error - ${message}` : "Network Error",
				type: "ERROR"
			}, n)
		}

	}
}