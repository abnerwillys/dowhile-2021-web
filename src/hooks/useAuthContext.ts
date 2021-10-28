import { useContext } from "react"
import { AuthContext } from "../contexts/auth.context"

export function useAuthContext() {
  const contextData = useContext(AuthContext)

  return contextData
}