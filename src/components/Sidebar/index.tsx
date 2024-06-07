import { LogoTrajeton } from '@/assets/logo-trajeton'

import { MainNavigation } from './MainNavigation'

export function Sidebar() {
  return (
    <aside className="border-r border-zinc-200 px-5 py-8 space-y-8">
      <LogoTrajeton />
      <MainNavigation />
    </aside>
  )
}
