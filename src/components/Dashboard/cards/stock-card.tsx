import { Box } from 'lucide-react'

import { Card, CardHeader, CardTitle } from '../../ui/card'

export function StockCard() {
  return (
    <Card className="py-3 border-none shadow-sm">
      <CardHeader className="space-y-7">
        <Box size={60} className="text-green-500" />
        <CardTitle className="text-3xl text-zinc-800"> Estoque </CardTitle>
      </CardHeader>
    </Card>
  )
}
