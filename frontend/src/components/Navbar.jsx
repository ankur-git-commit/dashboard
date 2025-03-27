import { MdDashboard } from "react-icons/md"
import { FaUserCircle } from "react-icons/fa"
import { MdExitToApp } from "react-icons/md"

function Navbar({ username = "First Last", role = "Mail Center Owner" }) {
    return (
        <>
            <header className="bg-[#004E91] border-none pb-4 px-4 text-white font-poppins">
                <div className="flex justify-end">
                    <p className="text-xs font-semibold">
                        Welcome <span className="text-black">{username}</span> [
                        {role}]
                    </p>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <h2 className="flex items-center gap-2 font-semibold text-xl cursor-pointer hover:text-amber-300">
                        <MdDashboard size={42} className="" /> Dashboard
                    </h2>
                    <h2 className="font-semibold text-xl">
                        Mail Center Dashboard
                    </h2>
                    <nav className="flex items-center gap-4 text-sm font-medium">
                        <p className="cursor-pointer hover:text-gray-400">
                            <span>Support</span>
                        </p>
                        <p className="flex flex-row items-center gap-1 justify-center cursor-pointer hover:text-gray-400">
                            <FaUserCircle aria-hidden="true" />
                            <span>My Account</span>
                        </p>
                        <p className="flex flex-row items-center gap-1 justify-center cursor-pointer hover:text-gray-400">
                            <MdExitToApp aria-hidden="true" />
                            <span>Logoff</span>
                        </p>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Navbar
