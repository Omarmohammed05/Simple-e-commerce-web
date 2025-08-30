import React from 'react'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Button } from '../components/ui/button'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

export default function Auth() {
  const { login, register } = useAuth()
  const [isLogin, setIsLogin] = React.useState(true)
  const navigate = useNavigate()

  const onSubmit = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const email = form.get('email')
    const password = form.get('password')
    if (isLogin) login(email, password)
    else register(email, password)
    navigate('/dashboard')
  }

  return (
    <div className="mx-auto max-w-md border rounded-lg p-6 space-y-6">
      <div className="text-center space-y-1">
        <h1 className="text-2xl font-semibold">{isLogin ? 'Login' : 'Create account'}</h1>
        <p className="text-muted-foreground text-sm">Welcome to AppleStore</p>
      </div>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required placeholder="you@example.com" />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" type="password" required placeholder="••••••••" />
        </div>
        {!isLogin && (
          <div>
            <Label htmlFor="confirm">Confirm Password</Label>
            <Input id="confirm" type="password" required placeholder="••••••••" />
          </div>
        )}
        <Button type="submit" className="w-full">{isLogin ? 'Login' : 'Register'}</Button>
      </form>
      <Button variant="outline" className="w-full">Continue with Google</Button>
      <div className="text-sm text-muted-foreground text-center">
        {isLogin ? 'New here?' : 'Already have an account?'}{' '}
        <button className="underline" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Create account' : 'Login'}
        </button>
      </div>
    </div>
  )
}
