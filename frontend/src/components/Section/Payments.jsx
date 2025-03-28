import { FaMoneyCheckAlt } from "react-icons/fa";

import { Link } from "react-router";

function Payments({
    lastPaymentDay = "03/16/2025",
    lastPaymentAmount = "$522",
    pendingCommission = "$600",
    toBePaidON = "04/02/2025",
}) {
    return (
        <section className="shadow">
            <header className="flex w-full items-center justify-between rounded-t bg-[#004E91] px-4 py-2 text-xl font-semibold text-white">
                Payments <FaMoneyCheckAlt />
            </header>
            <div className="flex flex-row justify-between rounded-b bg-white px-3 py-6 tracking-tight">
                <div className="mt-4 flex flex-col gap-2 text-sm">
                    <p className="text-gray-700">
                        Last Payment Day:{" "}
                        <span className="font-medium text-gray-900">
                            {lastPaymentDay}
                        </span>
                    </p>
                    <p className="text-gray-700">
                        Last Payment Amount:{" "}
                        <span className="font-medium text-gray-900">
                            {lastPaymentAmount}
                        </span>
                    </p>
                    <p className="text-gray-700">
                        Pending Commission:{" "}
                        <span className="font-medium text-gray-900">
                            {pendingCommission}
                        </span>
                    </p>
                    <p className="text-gray-700">
                        To Be Paid On:{" "}
                        <span className="font-medium text-gray-900">
                            {toBePaidON}
                        </span>
                    </p>
                </div>
                <div className="flex flex-col gap-1 text-end">
                    <h3 className="text-base font-semibold">Reports</h3>
                    <nav className="flex flex-col gap-1 text-xs">
                        <Link to="/" className="hover:underline">
                            Credits/Debits
                        </Link>
                        <Link to="/" className="hover:underline">
                            Commission Payments
                        </Link>
                        <Link to="/" className="hover:underline">
                            Revenue Growth Report
                        </Link>
                        <Link to="/" className="hover:underline">
                            Products Sold
                        </Link>
                        <Link to="/" className="hover:underline">
                            Order Totals
                        </Link>
                        <Link to="/" className="hover:underline">
                            Sales Tax Setup
                        </Link>
                    </nav>
                </div>
            </div>
        </section>
    );
}

export default Payments;
