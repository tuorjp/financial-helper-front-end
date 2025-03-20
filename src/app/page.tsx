'use client'

import Home from "./home/page"
import Login from "./login/page"
import { useAuthenticationService } from "./service/AuthenticationService"

export default function Page() {
  const auth = useAuthenticationService()
  const user = auth.getUser()
  // const user = true

  return (
    <>
      {user ? <Home /> : <Login />}
    </>
  )
}
