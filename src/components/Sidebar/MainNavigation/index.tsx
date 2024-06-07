import {
  Box,
  GraduationCap,
  Home,
  PackageOpen,
  Shapes,
  UsersRound,
} from 'lucide-react'

import { NavItem } from './NavItem'

export function MainNavigation() {
  return (
    <nav className="space-y-4">
      <NavItem title="Home" icon={Home} />
      <NavItem title="Estoque" icon={Box} />
      <NavItem title="Categorias" icon={Shapes} />
      <NavItem title="Escolas" icon={GraduationCap} />
      <NavItem title="Gestão de pedidos" icon={PackageOpen} />
      <NavItem title="Usuários" icon={UsersRound} />
    </nav>
  )
}
