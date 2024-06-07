import { FilterIcon, Search } from 'lucide-react'

import { Button } from '../ui/button'
import { Dialog, DialogTrigger } from '../ui/dialog'
import { Input } from '../ui/input'
import { OrderDetailsFilters } from './orders-details-filters'

export function OrderTableFilters() {
  return (
    <form action="" className="flex gap-5 justify-center items-center">
      <div className="flex w-full items-center gap-2 rounded-2xl bg-white border border-zinc-300 px-4 py-2 shadow-sm">
        <Input
          className="flex-1 border-0 h-5 w-5 bg-transparent p-0 text-zinc-900 placeholder-black"
          placeholder="Pesquise aqui"
        />
        <Search className="h-5 w-5 text-blue-400" />
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-[180px] h-9">
            <FilterIcon size={20} className="mr-2" />
            Filtrar
          </Button>
        </DialogTrigger>

        <OrderDetailsFilters />
      </Dialog>
    </form>
  )
}
