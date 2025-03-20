'use client'

import { useEffect } from "react"
import { useUserContext } from "./context/UserContext"
import Home from "./home/page"
import Login from "./login/page"
import { useAuthenticationService } from "./service/AuthenticationService"

export default function Page() {
  const auth = useAuthenticationService()
  const { user, setUser } = useUserContext()
  //const user = true

  useEffect(() => {
    const currentUser = auth.getUser()
    if(currentUser) {
      setUser(currentUser)
    }
  }, [auth, setUser])

  return (
    <>
      {user ? <Home /> : <Login />}
    </>
  )
}
