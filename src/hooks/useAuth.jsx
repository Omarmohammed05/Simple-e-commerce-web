import React from 'react'

const AuthContext = React.createContext(null)

const dummyUser = {
  id: 'user_1',
  name: 'Jane Appleseed',
  email: 'jane@example.com',
  purchases: [
    { id: 'iphone-15-pro', name: 'iPhone 15 Pro', progress: 100 },
    { id: 'ipad-pro-m4', name: 'iPad Pro (M4)', progress: 35 },
  ],
  achievements: ['Early Adopter', 'Pro Photographer'],
}

export function AuthProvider({ children }) {
  const [user, setUser] = React.useState(null)

  const login = (email, password) => {
    setUser({ ...dummyUser, email })
  }

  const register = (email) => {
    setUser({ ...dummyUser, id: 'user_new', email })
  }

  const logout = () => setUser(null)

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = React.useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
