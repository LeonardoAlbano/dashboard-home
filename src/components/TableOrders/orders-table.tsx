import { Trash2Icon } from 'lucide-react'

import { Button } from '../ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table'

export function OrdersTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-zinc-50">
          <TableHead className="font-bold text-zinc-950 text-center">
            Núm. Pedido
          </TableHead>
          <TableHead className="font-bold text-zinc-950 text-center">
            Valor
          </TableHead>
          <TableHead className="font-bold text-zinc-950 text-center">
            Data
          </TableHead>
          <TableHead className="font-bold text-zinc-950 text-center">
            Forma de pagamento
          </TableHead>
          <TableHead className="font-bold text-zinc-950 text-center">
            Status
          </TableHead>
          <TableHead className="font-bold text-zinc-950 text-center">
            Ação
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.from({ length: 10 }).map((_, i) => {
          return (
            <TableRow key={i}>
              <TableCell className="text-blue-500 font-bold text-center">
                123456
              </TableCell>
              <TableCell className="font-bold text-center">R$200,00</TableCell>
              <TableCell className="font-medium text-center">
                22/04/2024
              </TableCell>
              <TableCell className="font-medium text-center">
                Dinheiro
              </TableCell>
              <TableCell className="font-medium text-center">
                Entregue
              </TableCell>
              <TableCell className="text-center">
                <Button variant="ghost" size="sm">
                  <Trash2Icon />
                </Button>
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
