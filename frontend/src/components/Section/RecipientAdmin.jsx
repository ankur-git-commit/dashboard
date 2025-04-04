import { FaUserGroup } from "react-icons/fa6";
import { FaPlayCircle } from "react-icons/fa";
import { Link } from "react-router";
import MetricCard from "../Metrics/MetricCard";

function RecipientAdmin({ headerStyle, bodyStyle }) {
    return (
        <section className="flex h-full flex-col rounded-lg shadow">
            <header className={headerStyle}>
                <span className="flex flex-row items-center gap-2">
                    Recipient Admin
                    <Link to="https://www.youtube.com/watch?v=cgEee-p87-8">
                        {/*  some random yt tutorial link for ipostal1 */}
                        <FaPlayCircle />
                    </Link>
                </span>
                <FaUserGroup />
            </header>
            <div className={`${bodyStyle} flex-grow`}>
                <MetricCard title={"Active"} color={"grey"} value={177} />
                <div className="text-end">
                    <h3 className="text-base font-semibold">Quick Links</h3>
                    <nav className="flex flex-col gap-1 text-xs">
                        <Link to="/recipient_lookup" className="hover:underline">
                            Recipient Lookup
                        </Link>
                        <Link to="/" className="hover:underline">
                            Send Email
                        </Link>
                        <Link to="/recipient_add" className="hover:underline">
                            Manually add Recipient
                        </Link>
                        <Link to="/" className="hover:underline">
                            Add Additional Name
                        </Link>
                    </nav>
                </div>
            </div>
        </section>
    );
}

export default RecipientAdmin;
