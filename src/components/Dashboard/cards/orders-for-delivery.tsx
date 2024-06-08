import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function OrdersForDelivery() {
  return (
    <Card className="flex p-4 item-center shadow-sm border-none">
      <CardContent className="flex">
        <img
          src="/src/assets/logo-stock-men.svg"
          alt="entregador"
          className="w-auto h-full"
        />
      </CardContent>
      <CardHeader className="flex flex-col justify-center gap-y-4">
        <CardDescription className="text-md text-zinc-800 font-medium">
          Hoje
        </CardDescription>
        <CardTitle className="text-5xl font-bold text-zinc-800">100</CardTitle>
        <CardDescription className="text-sm text-zinc-800 font-medium">
          Pedidos para entregas
        </CardDescription>
      </CardHeader>
    </Card>
  )
}
