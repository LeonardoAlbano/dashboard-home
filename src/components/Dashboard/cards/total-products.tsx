import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function TotalProducts() {
  return (
    <Card>
      <CardHeader className=" justify-center gap-y-2">
        <CardDescription className="text-lg text-zinc-800 font-medium">
          Total
        </CardDescription>
        <CardTitle className="text-4xl font-bold text-zinc-800">100</CardTitle>
        <CardDescription className="text-sm text-zinc-800 font-medium">
          Produtos
        </CardDescription>
      </CardHeader>
    </Card>
  )
}
