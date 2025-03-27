import { IoDocumentText } from "react-icons/io5"
import MetricCard from "../Metrics/MetricCard"

import { Link } from "react-router"

function DocumentApproval({ headerStyle, bodyStyle }) {
    return (
        <section className="shadow h-full flex flex-col">
            <header className={headerStyle}>
                Document Approval
                <IoDocumentText />
            </header>
            <div className={`${bodyStyle} flex-grow `}>
                <MetricCard title={"Pending"} color={"other"} value={4} />
                <div className="text-end">
                    <h3 className="text-base font-semibold">Quick Links</h3>
                    <nav className="flex flex-col gap-1 text-xs">
                        <Link to="/" className="hover:underline">
                            Mail Lookup
                        </Link>
                        <Link to="/" className="hover:underline">
                            Insert Fax
                        </Link>
                    </nav>
                </div>
            </div>
        </section>
    )
}

export default DocumentApproval
