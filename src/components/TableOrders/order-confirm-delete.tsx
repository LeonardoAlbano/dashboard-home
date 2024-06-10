import { Button } from '../ui/button'
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog'

export function OrderConfirmDelete() {
  return (
    <DialogContent className="w-[400px] ">
      <DialogHeader className="space-y-4">
        <DialogTitle>Excluir pedido</DialogTitle>
        <DialogDescription className="text-md text-zinc-900 font-normal ">
          Você realmente deseja excluir o pedido? Essa ação não poderá ser
          desfeita
        </DialogDescription>
      </DialogHeader>

      <Button className="rounded-xl font-semibold text-md ">
        Sim, excluir
      </Button>
      <Button
        variant="ghost"
        className=" rounded-xl  hover:bg-orange-200 text-orange-500 font-semibold text-md hover:text-orange-500 -mt-2 "
      >
        Não excluir
      </Button>
    </DialogContent>
  )
}
