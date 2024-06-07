import { Search } from 'lucide-react'

import { OrdersTable } from '../TableOrders/orders-table'
import { OrderTableFilters } from '../TableOrders/orders-table-filter'
import { Input } from '../ui/input'
import { OrdersCard } from './cards/orders-card'
import { OrdersForDelivery } from './cards/orders-for-delivery'
import { SchoolListCard } from './cards/school-list-card'
import { StockCard } from './cards/stock-card'
import { TotalMinimumStock } from './cards/total-minimum-stock'
import { TotalNewClients } from './cards/total-new-clients'
import { TotalProducts } from './cards/total-products'

export function Dashboard() {
  return (
    <main className="pb-12 bg-blue-100">
      <div className="p-6 bg-blue-800 flex flex-col md:flex-row gap-3">
        <div className="flex w-full items-center gap-2 rounded-2xl bg-white border border-zinc-300 px-4 py-2 shadow-sm">
          <Input
            className="flex-1 border-0 h-5 w-5 bg-transparent p-0 text-zinc-900 placeholder-black"
            placeholder="Pesquise aqui"
          />
          <Search className="h-5 w-5 text-blue-400" />
        </div>
        <div className="flex gap-3 items-center whitespace-nowrap px-6">
          <img
            className="rounded-full w-10 h-10"
            src="http://github.com/leonardoalbano.png"
            alt=""
          />

          <span className="text-lg text-white font-medium text-center">
            Usuário ADM
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-4 p-7">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
          <OrdersCard />
          <StockCard />
          <SchoolListCard />
        </div>
      </div>

      <div className="flex flex-col gap-4 p-7">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
          <OrdersForDelivery />
          <div className="space-y-4 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 ">
              <TotalProducts />
              <TotalMinimumStock />
            </div>
            <TotalNewClients />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 px-7">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
          <h1 className="text-3xl font-bold  tracking-tight">
            Lista de pedidos
          </h1>
        </div>

        <div className="space-y-6">
          <OrderTableFilters />
          <div className="bg-white border-b-4 border-zinc-400">
            <OrdersTable />
          </div>
        </div>
      </div>
    </main>
  )
}
