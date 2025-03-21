'use client'

import React, { createContext, useEffect, useState, useContext } from 'react'
import { useAuthenticationService } from '../service/AuthenticationService'

type UserContextType = {
  user: string | null;
  setUser: (user: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined)

type UserProviderProps = {
  children: React.ReactNode
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const auth = useAuthenticationService()
  const [user, setUser] = useState<string | null>(null)

  useEffect(() => {
    const currentUser = auth.getUser()
    if (currentUser) {
      setUser(currentUser)
    }
  }, [auth])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider')
  }
  return context
}