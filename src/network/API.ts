import { useConfiguredNetwork } from "../config/network"
import { IPostAuthLogin } from "./Types"

export function useAPI() {
	const { network } = useConfiguredNetwork()

	return {

		PostAuthLogin(username: string, password: string) {
			return network.post<IPostAuthLogin>("/auth/login", {
				data: {
					username,
					password
				}
			})
		}

	}
}