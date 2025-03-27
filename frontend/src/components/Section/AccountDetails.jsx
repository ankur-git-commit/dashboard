import { FaStore } from "react-icons/fa"
import { Link } from "react-router"

function AccountDetails({
    companyName = "Global ERP Solutions",
    mailCenterName = "Global ERP Solutions",
    mailCenterStreetAddress = "201 - 1065 Canadian Place, Mississauga ON L4W 0C2",
    mailCenterID = 4356,
    mailCenterOwner = "First Last",
}) {
    return (
        <section className="shadow">
            <header className="flex w-full items-center justify-between rounded-t bg-[#004E91] px-4 py-2 text-xl font-semibold text-white">
                {companyName} <FaStore />
            </header>
            <div className="flex flex-row justify-between rounded-b bg-white px-3 py-6 tracking-tight">
                <div className="flex flex-col text-sm gap-2 mt-4">
                    <p className="text-gray-700">
                        Mail Center Name:{" "}
                        <span className="font-medium text-gray-900">{mailCenterName}</span>
                    </p>
                    <p className="text-gray-700">
                        Mail Center Street Address:{" "}
                        <span className="font-medium text-gray-900">
                            {mailCenterStreetAddress}
                        </span>
                    </p>
                    <p className="text-gray-700">
                        Mail Center ID:{" "}
                        <span className="font-medium text-gray-900">{mailCenterID}</span>
                    </p>
                    <p className="text-gray-700">
                        Mail Center Owner:{" "}
                        <span className="font-medium text-gray-900">{mailCenterOwner}</span>
                    </p>
                </div>
                <div className="flex flex-col gap-1 text-end">
                    <h3 className="text-base font-semibold">Quick Links</h3>
                    <nav className="flex flex-col gap-1 text-xs">
                        <Link to="/" className="underline">Send Signup Link</Link>
                        <Link to="/" className="hover:underline">Mail Center Setup</Link>
                        <Link to="/" className="hover:underline">iPostal1 website</Link>
                        <Link to="/" className="hover:underline">Store Responsibility Chart</Link>
                    </nav>
                </div>
            </div>
        </section>
    )
}

export default AccountDetails
