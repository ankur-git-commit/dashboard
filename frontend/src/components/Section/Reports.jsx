import { BiSolidReport } from "react-icons/bi";
import { Link } from "react-router";

function Reports({ headerStyle }) {
    return (
        <section className="flex h-full flex-col rounded-lg bg-white shadow">
            <header className={headerStyle}>
                Reports
                <BiSolidReport />
            </header>
            <div className="flex flex-row rounded-b-lg bg-white px-3 py-6 tracking-tight">
                <nav className="flex flex-1 flex-col gap-1 text-base">
                    <Link to="/" className="hover:underline">
                        USPS Quarterly Report
                    </Link>
                    <Link to="/" className="hover:underline">
                        Expired Recipients
                    </Link>
                    <Link to="/" className="hover:underline">
                        Inactive Recipients
                    </Link>
                    <Link to="/" className="hover:underline">
                        Active Recipients
                    </Link>
                    <Link to="/" className="hover:underline">
                        Recipients On Hold
                    </Link>
                </nav>
                <nav className="flex flex-1 flex-col gap-1 text-base">
                    <Link to="/" className="hover:underline">
                        Tasks Activity Report
                    </Link>
                    <Link to="/" className="hover:underline">
                        Tasks Completed Report
                    </Link>
                    <Link to="/" className="hover:underline">
                        Overdue Tasks Report
                    </Link>
                    <Link to="/" className="hover:underline">
                        Customer Growth
                    </Link>
                    <Link to="/" className="hover:underline">
                        Invoices
                    </Link>
                    <Link to="/" className="hover:underline">
                        Task Hours for Recipient
                    </Link>
                </nav>
            </div>
        </section>
    );
}

export default Reports;
