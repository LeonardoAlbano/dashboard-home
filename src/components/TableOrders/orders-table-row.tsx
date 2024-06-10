import { Trash2Icon } from 'lucide-react'

import { Button } from '../ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { TableCell, TableRow } from '../ui/table'

export function OrderTableRow() {
  return (
    <TableRow className="border-b border-zinc-400">
      <TableCell className="text-blue-500 font-bold text-center">
        123456
      </TableCell>
      <TableCell className="font-bold text-center text-zinc-800">
        R$200,00
      </TableCell>
      <TableCell className="font-bold text-zinc-800 text-center">
        22/04/2024
      </TableCell>
      <TableCell className="font-bold text-zinc-800 text-center">
        Dinheiro
      </TableCell>
      <TableCell className="font-semibold text-zinc-800 text-center w-[200px]">
        <Select>
          <SelectTrigger className="border-none flex items-center justify-center gap-2 rounded-full">
            <SelectValue />
          </SelectTrigger>

          <SelectContent>
            <div className="space-y-3">
              <SelectItem
                value="processing"
                className="bg-blue-200 rounded-full text-blue-500 font-normal"
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
      </TableCell>
      <TableCell className="text-center">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost" size="xs">
              <Trash2Icon />
            </Button>
          </DialogTrigger>

          <DialogContent className="w-[400px]">
            <DialogHeader className="space-y-4">
              <DialogTitle>Excluir pedido</DialogTitle>
              <DialogDescription className="text-md text-zinc-900 font-medium ">
                Você realmente deseja excluir o pedido? Essa ação não poderá ser
                desfeita
              </DialogDescription>
            </DialogHeader>

            <Button className="rounded-xl font-semibold text-md ">
              Sim, excluir
            </Button>
            <Button
              variant="ghost"
              className=" rounded-xl  hover:bg-orange-200 text-orange-500 font-semibold text-md hover:text-orange-500 "
            >
              Não excluir
            </Button>
          </DialogContent>
        </Dialog>
      </TableCell>
    </TableRow>
  )
}
