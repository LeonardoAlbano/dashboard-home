import { Button } from '../ui/button'
import { Checkbox } from '../ui/checkbox'
import { DialogContent, DialogHeader, DialogTitle } from '../ui/dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { Separator } from '../ui/separator'

export function OrderDetailsFilters() {
  return (
    <DialogContent className="w-[450px]">
      <DialogHeader>
        <DialogTitle>Filtro</DialogTitle>
      </DialogHeader>

      <Separator orientation="horizontal" />

      <h1 className="text-xl font-semibold">Por data</h1>
      <form className="space-y-7">
        <div className="flex gap-3 items-center text-lg ">
          <Checkbox id="filterSearch" className="rounded-full w-5 h-5" />
          <label htmlFor="filterSearch">Todos</label>
        </div>

        <div className="flex gap-3 items-center text-lg ">
          <Checkbox id="filterSearch" className="rounded-full w-5 h-5" />
          <label htmlFor="filterSearch">até 7 dias</label>
        </div>

        <div className="flex gap-3 items-center text-lg ">
          <Checkbox id="filterSearch" className="rounded-full w-5 h-5" />
          <label htmlFor="filterSearch">até 15 dias</label>
        </div>

        <div className="flex gap-3 items-center text-lg ">
          <Checkbox id="filterSearch" className="rounded-full w-5 h-5" />
          <label htmlFor="filterSearch">até 30 dias</label>
        </div>

        <div className="flex gap-3 items-center text-lg ">
          <Checkbox id="filterSearch" className="rounded-full w-5 h-5" />
          <label htmlFor="filterSearch">Mais de 30 dias</label>
        </div>

        <div className="flex flex-col gap-3 text-lg">
          <div className="flex items-center gap-3">
            <Checkbox
              id="filterSearchCustom"
              className="rounded-full w-5 h-5"
            />
            <label htmlFor="filterSearchCustom">Personalizado</label>
          </div>
          <div
            className="space-x-3
"
          >
            <span>de</span>
            <input type="date" className="border rounded p-1" />
            <span>à</span>
            <input type="date" className="border rounded p-1" />
          </div>
        </div>
        <Separator orientation="horizontal" />

        <h1 className="font-semibold text-xl">Por Status</h1>

        <Select>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>

          <SelectContent>
            <div className="space-y-3">
              <SelectItem
                value="processing"
                className="bg-blue-200 rounded-full text-blue-500 font-normal text-center"
              >
                Em preparação
              </SelectItem>
              <SelectItem
                value="delivering"
                className="bg-orange-200 rounded-full text-orange-500 font-normal "
              >
                Em entrega
              </SelectItem>
              <SelectItem
                value="delivered"
                className="bg-green-200 rounded-full text-green-500 font-normal"
              >
                Entregue
              </SelectItem>
            </div>
          </SelectContent>
        </Select>

        <Separator />

        <div className="flex justify-between">
          <Button type="button" variant="ghost">
            Limpar seleção
          </Button>

          <Button type="submit">Filtrar</Button>
        </div>
      </form>
    </DialogContent>
  )
}
