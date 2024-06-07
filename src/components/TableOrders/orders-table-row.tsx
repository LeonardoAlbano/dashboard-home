import { Trash2Icon } from 'lucide-react'

import { Button } from '../ui/button'
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
      <TableCell className="font-semibold text-zinc-800 text-center">
        Entregue
      </TableCell>
      <TableCell className="text-center">
        <Button variant="ghost" size="xs">
          <Trash2Icon />
        </Button>
      </TableCell>
    </TableRow>
  )
}
