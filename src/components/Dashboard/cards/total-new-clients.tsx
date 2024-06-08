import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function TotalNewClients() {
  return (
    <Card className="shadow-sm border-none">
      <CardHeader className=" justify-center gap-y-2">
        <CardDescription className="text-lg text-zinc-800 font-medium">
          Total
        </CardDescription>
        <CardTitle className="text-4xl font-bold text-zinc-800">100</CardTitle>
        <CardDescription className="text-md text-zinc-800 font-medium">
          Novos clientes
        </CardDescription>
      </CardHeader>
    </Card>
  )
}
