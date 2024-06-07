import { PackageOpen } from 'lucide-react'

import { Card, CardHeader, CardTitle } from '../../ui/card'
export function OrdersCard() {
  return (
    <Card className="py-3">
      <CardHeader className="space-y-7">
        <PackageOpen size={60} className="text-primary" />
        <CardTitle className="text-3xl text-zinc-800"> Pedidos </CardTitle>
      </CardHeader>
    </Card>
  )
}
