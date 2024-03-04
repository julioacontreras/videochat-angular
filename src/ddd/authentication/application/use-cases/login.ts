import { Authentication } from "../../domains/types/Authentication"

export const login = (auth: Authentication) => {
    console.log(auth)
    return true
} 