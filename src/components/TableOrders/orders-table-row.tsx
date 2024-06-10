import { Trash2Icon } from 'lucide-react'

import { Button } from '../ui/button'
import { Dialog, DialogTrigger } from '../ui/dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { TableCell, TableRow } from '../ui/table'
import { OrderConfirmDelete } from './order-confirm-delete'

export function OrderTableRow() {
  return (
    <TableRow className="border-b border-zinc-400">
      <TableCell className="text-blue-500 font-bold text-center text-sm md:text-base">
        123456
      </TableCell>
      <TableCell className="font-bold text-center text-zinc-800 text-sm md:text-base ">
        R$200,00
      </TableCell>
      <TableCell className="font-bold text-zinc-800 text-center text-sm md:text-base">
        22/04/2024
      </TableCell>
      <TableCell className="font-bold text-zinc-800 text-center text-sm md:text-base">
        Dinheiro
      </TableCell>
      <TableCell className="font-semibold text-zinc-800 text-center w-[150px] md:w-[200px]">
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
                className="bg-orange-200 rounded-full text-orange-500 font-normal"
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

          <OrderConfirmDelete />
        </Dialog>
      </TableCell>
    </TableRow>
  )
}
