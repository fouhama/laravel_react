import { Link, Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
    <header>
        <nav className="flex justify-between items-center bg-gray-800 text-white p-4">
            <div className="text-2xl font-bold">My App</div>
            <ul className="flex space-x-4">
                <li><Link to={'/'}  className="hover:text-gray-400">Home</Link></li>
                <li><Link to="/users" className="hover:text-gray-400">Users</Link></li>
                <li><Link to="/login" className="hover:text-gray-400">Login</Link></li>
                <li><Link to="/register" className="hover:text-gray-400">Register</Link></li>
                <li><Link to="/about" className="hover:text-gray-400">About</Link></li>
                <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
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