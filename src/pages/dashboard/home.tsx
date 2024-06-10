import { Dashboard } from '@/components/Dashboard'
import { Sidebar } from '@/components/Sidebar'

export function Home() {
  return (
    <div className="min-h-screen grid grid-cols-app lg:grid-cols-desktop antialiased">
      <Sidebar />
      <Dashboard />
    </div>
  )
}
