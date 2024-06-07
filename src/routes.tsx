import { createBrowserRouter } from 'react-router-dom'

import { Home } from './pages/dashboard/home'

export const router = createBrowserRouter([{ path: '/', element: <Home /> }])
