import { ArrowLeft, ArrowRight } from 'lucide-react'

import { Button } from '../ui/button'

export interface PaginationProps {
  pageIndex: number
  totalCount: number
  perPage: number
}

export function Pagination({
  pageIndex,
  perPage,
  totalCount,
}: PaginationProps) {
  const pages = Math.ceil(totalCount / perPage) || 1

  return (
    <div className="flex items-center justify-between bg-white py-1">
      <div className="">
        <Button
          variant="outline"
          className="bg-trasnparent hover:bg-orange-100 border-none"
        >
          <ArrowLeft size={18} className="text-orange-500 mr-2" />
          <span className="text-orange-500 font-medium">Anterior</span>
        </Button>
      </div>

      <div className="flex items-center gap-6 lg:gap-8">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className=" h-8 w-8 p-0 bg-transparent hover:bg-orange-200 border-none hover:text-orange-500"
          >
            <span>{pageIndex + 1}</span>
          </Button>

          <Button
            variant="outline"
            className=" h-8 w-8 p-0 bg-transparent hover:bg-orange-200 border-none hover:text-orange-500"
          >
            <span>{pageIndex + 2}</span>
          </Button>

          <Button
            variant="outline"
            className=" h-8 w-8 p-0 bg-transparent hover:bg-orange-200 border-none hover:text-orange-500"
          >
            <span>...</span>
          </Button>

          <Button
            variant="outline"
            className=" h-8 w-8 p-0 bg-transparent hover:bg-orange-200 border-none hover:text-orange-500"
          >
            <span>{pageIndex + 9}</span>
          </Button>

          <Button
            variant="outline"
            className=" h-8 w-8 p-0 bg-transparent hover:bg-orange-200 border-none hover:text-orange-500"
          >
            <span>{pageIndex + 10} </span>
          </Button>

          <Button
            variant="outline"
            className=" h-8 w-8 p-0 bg-transparent hover:bg-orange-200 border-none hover:text-orange-500"
          >
            <span>{pages}</span>
          </Button>
        </div>
      </div>

      <div className="">
        <Button
          variant="outline"
          className="bg-trasnparent hover:bg-orange-100 border-none"
        >
          <span className="text-orange-500 font-medium">Próximo</span>
          <ArrowRight size={18} className="text-orange-500 ml-2" />
        </Button>
      </div>
    </div>
  )
}
