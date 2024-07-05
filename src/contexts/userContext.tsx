import { createContext, useState, Dispatch, SetStateAction, ReactNode } from "react";

export type User = {
  points: number
}

export interface UserContextInterface {
  user: User,
  setUser: Dispatch<SetStateAction<User>>
}

const defaultState = {
  user: {
    points: 0,
  },
  // setUser: (user: User) => {
  setUser: () => {

  }
} as UserContextInterface

export const UserContext = createContext(defaultState);

type UserProviderProps = {
  children: ReactNode
}

export default function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User>({
    points: 153000
  })

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}