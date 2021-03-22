import { atom } from "recoil"
import { recoilPersist } from "recoil-persist"

const { persistAtom } = recoilPersist()

interface ICredentials {
    accessToken: string
    refreshToken: string
    expiresIn: number
}

export type IAuthStore = {
    credentials?: ICredentials
    isAuthenticated: boolean
}

export const authStore = atom<IAuthStore>({
	key: "auth-store",
	default: {
		isAuthenticated: false
	},
	effects_UNSTABLE: [persistAtom]
})