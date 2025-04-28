import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
    <header>
        header
    </header>
        <Outlet/>
    <footer>
        footer
    </footer>
    </>
  )
}

export default Layout