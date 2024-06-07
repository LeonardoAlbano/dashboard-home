import { Table, TableBody, TableHead, TableHeader, TableRow } from '../ui/table'
import { OrderTableRow } from './orders-table-row'

export function OrdersTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-zinc-100">
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
          return <OrderTableRow key={i} />
        })}
      </TableBody>
    </Table>
  )
}
