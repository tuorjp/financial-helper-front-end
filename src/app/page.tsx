'use client'

import { useUserStore } from '@/context/userStore'
import Home from './home/page'
import Login from './login/page'

export default function Page() {
  const { user } = useUserStore()

  return (
    <>
      {user ? <Home /> : <Login />}
    </>
  )
}
