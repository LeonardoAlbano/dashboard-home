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
    <DialogContent>
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

        <div className="flex gap-3 items-center text-lg ">
          <Checkbox id="filterSearch" className="rounded-full w-5 h-5" />
          <label htmlFor="filterSearch">Personalizado</label>
          <data value=""></data>
        </div>
        <Separator orientation="horizontal" />

        <h1>Por Status</h1>

        <Select>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>

          <SelectContent>
            <SelectItem
              value="processing"
              className="bg-blue-200 rounded-full text-blue-500 font-normal"
            >
              Em preparação
            </SelectItem>
            <SelectItem
              value="delivering"
              className="bg-orange-200 text-orange-500 font-normal rounded-ful"
            >
              Em entrega
            </SelectItem>
            <SelectItem
              value="delivered"
              className="bg-green-200 rounded-ful text-green-500 font-normal"
            >
              Entregue
            </SelectItem>
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
