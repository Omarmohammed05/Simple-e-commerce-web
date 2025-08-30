import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { Badge } from '../components/ui/badge'

export default function Dashboard() {
  const { user } = useAuth()

  if (!user) return <div>Please login to view your dashboard.</div>

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold">Welcome, {user.name.split(' ')[0]}</h1>
        <p className="text-muted-foreground">Here are your recent purchases and progress.</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-medium">Purchased products</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {user.purchases.map((p) => (
            <div key={p.id} className="border rounded-lg p-4">
              <div className="font-medium">{p.name}</div>
              <div className="h-2 bg-muted rounded mt-2 overflow-hidden">
                <div className="h-full bg-foreground" style={{ width: `${p.progress}%` }} />
              </div>
              <div className="text-xs text-muted-foreground mt-1">Progress {p.progress}%</div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-medium">Achievements</h2>
        <div className="flex flex-wrap gap-2">
          {user.achievements.map((a) => (
            <Badge key={a} variant="secondary">{a}</Badge>
          ))}
        </div>
      </section>
    </div>
  )
}
