import { Menu } from 'lucide-react'

import { LogoTrajeton } from '@/assets/logo-trajeton'

import { Button } from '../ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../ui/collapsible'
import { MainNavigation } from './MainNavigation'

export function Sidebar() {
  return (
    <Collapsible className="border-r data-[state=open]:h-screen data-[state=open]:bottom-0 lg:data-[state=closed]:bottom-0 lg:data-[state=closed]:h-screen border-zinc-200 px-5 py-4 lg:py-6 flex flex-col gap-6 fixed left-0 top-0 right-0 z-20 bg-white lg:right-auto lg:relative lg:w-80 lg:border-r">
      <div className="flex items-center justify-between">
        <LogoTrajeton />
        <CollapsibleTrigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Menu className="h-6 w-6" />
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent
        forceMount
        className="data-[state=closed]:hidden lg:data-[state=closed]:flex flex flex-col gap-6"
      >
        <MainNavigation />
      </CollapsibleContent>
    </Collapsible>
  )
}
