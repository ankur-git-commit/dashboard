import { MdDashboard } from "react-icons/md"
import { FaUserCircle } from "react-icons/fa"
import { MdExitToApp } from "react-icons/md"
import { Link } from "react-router"

function Navbar({ username = "First Last", role = "Mail Center Owner" }) {
    const handleLoggout = () => {}

    return (
        <header className="bg-[#004E91] border-none pb-4 px-4 text-white">
            <div className="flex justify-end mb-[-5px]">
                <p className="text-sm font-semibold">
                    Welcome <span className="text-black">{username}</span> [
                    {role}]
                </p>
            </div>
            <div className="flex flex-row justify-between items-center">
                <Link to="/">
                    <h2 className="flex items-center gap-2 font-semibold text-xl cursor-pointer hover:text-gray-300">
                        <MdDashboard size={42} /> Dashboard
                    </h2>
                </Link>
                <h2 className="font-bold text-xl ">Mail Center Dashboard</h2>
                <nav className="flex items-center gap-4 text-sm font-bold">
                    <Link
                        to="/support"
                        className="cursor-pointer hover:text-gray-400"
                    >
                        <span>Support</span>
                    </Link>
                    <Link
                        to="/account"
                        className="flex flex-row items-center gap-1 cursor-pointer hover:text-gray-400"
                    >
                        <FaUserCircle aria-hidden="true" />
                        <span>My Account</span>
                    </Link>
                    <button
                        onClick={handleLoggout}
                        className="flex flex-row items-center gap-1 cursor-pointer hover:text-gray-400"
                    >
                        <MdExitToApp aria-hidden="true" />
                        <span>Logoff</span>
                    </button>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
