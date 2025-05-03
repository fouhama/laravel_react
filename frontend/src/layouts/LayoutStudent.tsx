import { Context, ContextType } from "@/Context/ContextProvider"
import { useContext, useEffect } from "react"
import { Link, Outlet, useNavigate } from "react-router-dom"


const LayoutStudent = () => {
    const navigate = useNavigate()
    const { auth, setAuth } = useContext(Context) as ContextType
    useEffect(() => {
        if (!auth.isAuth) {
            navigate('/login')
        }
    }, [auth, navigate])
    const Logout = () => {
        setAuth({ isAuth: false, email: '' })
    }

    return (
        <>
            {auth.isAuth && (
                <>
                    <header>
                        <nav className="flex justify-between items-center bg-gray-800 text-white p-4">
                            <div className="text-2xl font-bold">My App</div>
                            <ul className="flex space-x-4">
                                <li><Link to={'/dashboard'} className="hover:text-gray-400">Dashboard</Link></li>
                                <li><Link to="/users" className="hover:text-gray-400">Users</Link></li>
                                <li><Link to="/about" className="hover:text-gray-400">About</Link></li>
                                <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
                                <li><button onClick={Logout} className="hover:text-gray-400">logout</button></li>
                            </ul>

                        </nav>
                    </header>
                    <Outlet />
                </>
            )}

        </>
    )
}

export default LayoutStudent