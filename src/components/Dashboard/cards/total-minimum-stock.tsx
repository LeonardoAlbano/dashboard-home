import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function TotalMinimumStock() {
  return (
    <Card>
      <CardHeader className=" justify-center gap-y-2">
        <CardDescription className="text-lg text-zinc-800 font-medium">
          Total
        </CardDescription>
        <CardTitle className="text-4xl font-bold text-red-600">2</CardTitle>
        <CardDescription className="text-md text-zinc-800 font-medium">
          Estoque mínimo
        </CardDescription>
      </CardHeader>
    </Card>
  )
}
