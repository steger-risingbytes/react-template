import axios from "axios"
import { useRecoilState } from "recoil"
import { authStore } from "../stores/authStore"

export const API_BASE_URL = import.meta.env.BASE_URL || "localhost:8080"

export function useConfiguredNetwork() {
	const [auth] = useRecoilState(authStore)

	const network = axios.create({
		baseURL: API_BASE_URL,
		headers: {
			"Authorization": auth.credentials ? `Bearer ${auth.credentials.accessToken}` : undefined
		}
	})

	return { network }
}