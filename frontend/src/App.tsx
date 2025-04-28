import { RouterProvider } from 'react-router-dom'
import './App.css'
import {Route} from "./router/index"
function App() {


  return (
    <>
      <RouterProvider router={Route}/>
    </>
  )
}

export default App
