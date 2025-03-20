import nookies from 'nookies'
import api from '.'

export type AuthUserProps = {
  email: string;
  password: string;
}

export type UserProps = {
  token: string;
  user: string;
}

class Authentication {
  static #instance: Authentication

  private constructor() { }

  public static getInstance() {
    if (!Authentication.#instance) {
      Authentication.#instance = new Authentication()
    }

    return Authentication.#instance
  }

  async login(userData: AuthUserProps, setUser: (user: string | null) => void) {
    try {
      const response = api.post<UserProps>('authenticate', userData)
      const userDataResponse = (await response).data
      nookies.set(null, 'TK', userDataResponse.token)
      nookies.set(null, 'USER', userDataResponse.user)
      setUser(userDataResponse.user)
    } catch (error) {
      console.log(error)
    }
  }

  getTokenValue() {
    const cookies = nookies.get()
    const token = cookies.TK

    if (!token) {
      return null
    }

    return token
  }

  getUser() {
    const cookies = nookies.get()
    const user = cookies.USER

    if (!user) {
      return null
    }

    return user
  }
}

const useAuthenticationService = () => {
  return Authentication.getInstance()
}

export { useAuthenticationService }