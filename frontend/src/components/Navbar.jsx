import { MdDashboard } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { MdExitToApp } from "react-icons/md";
import { Link } from "react-router";

function Navbar({ username = "First Last", role = "Mail Center Owner" }) {
    const handleLoggout = () => {};

    return (
        <header className="border-none bg-[#004E91] px-4 pb-4 text-white">
            <div className="mb-[-5px] flex justify-end">
                <p className="text-sm font-semibold">
                    Welcome <span className="text-black">{username}</span> [
                    {role}]
                </p>
            </div>
            <div className="flex flex-row items-center justify-between">
                <Link to="/">
                    <h2 className="flex cursor-pointer items-center gap-2 text-xl font-semibold hover:text-gray-300">
                        <MdDashboard size={42} /> Dashboard
                    </h2>
                </Link>
                <h2 className="text-xl font-bold">Mail Center Dashboard</h2>
                <nav className="flex items-center gap-4 text-sm font-bold">
                    <Link
                        to="/support"
                        className="cursor-pointer hover:text-gray-400"
                    >
                        <span>Support</span>
                    </Link>
                    <Link
                        to="/account"
                        className="flex cursor-pointer flex-row items-center gap-1 hover:text-gray-400"
                    >
                        <FaUserCircle aria-hidden="true" />
                        <span>My Account</span>
                    </Link>
                    <button
                        onClick={handleLoggout}
                        className="flex cursor-pointer flex-row items-center gap-1 hover:text-gray-400"
                    >
                        <MdExitToApp aria-hidden="true" />
                        <span>Logoff</span>
                    </button>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
