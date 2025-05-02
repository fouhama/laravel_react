import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
    <header>
        <nav className="flex justify-between items-center bg-gray-800 text-white p-4">
            <div className="text-2xl font-bold">My App</div>
            <ul className="flex space-x-4">
                <li><a href="/" className="hover:text-gray-400">Home</a></li>
                <li><a href="/users" className="hover:text-gray-400">Users</a></li>
                <li><a href="/login" className="hover:text-gray-400">Login</a></li>
                <li><a href="/register" className="hover:text-gray-400">Register</a></li>
                <li><a href="/about" className="hover:text-gray-400">About</a></li>
                <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
            </ul>
            
        </nav>
    </header>
        <Outlet/>
    <footer>
        footer
    </footer>
    </>
  )
}

export default Layout