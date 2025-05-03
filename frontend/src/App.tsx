import { RouterProvider } from 'react-router-dom'
import './App.css'
import { Route } from "./router/index"
import ContextProvider from './Context/ContextProvider'

function App() {
  return (
    <>
      <ContextProvider>
        <RouterProvider router={Route} />
      </ContextProvider>
    </>
  )
}

export default App
