import { IoIosMailOpen } from "react-icons/io";
import { FaPlayCircle } from "react-icons/fa";
import { FaRegQuestionCircle } from "react-icons/fa";
import MetricCard from "../Metrics/MetricCard";

import { Link } from "react-router";

function InsertMail({ headerStyle, bodyStyle }) {
    const date = new Date().toISOString().split("T")[0];
    return (
        <section className="flex h-full flex-col shadow">
            <header className={headerStyle}>
                <span className="flex flex-row items-center gap-2">
                    Insert Mail (use App)
                    <Link to="https://www.youtube.com/watch?v=cgEee-p87-8">
                        {/*  some random yt tutorial link for ipostal1 */}
                        <FaPlayCircle />
                    </Link>
                    <FaRegQuestionCircle />
                </span>{" "}
                <IoIosMailOpen />
            </header>
            <div className={`${bodyStyle} flex-grow`}>
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-semibold">Insertions:</h3>
                    <div className="flex flex-wrap gap-2">
                        <MetricCard
                            title={"Today"}
                            value={0}
                            color={"grey"}
                            bold={true}
                        />
                        <MetricCard
                            title={"This Month"}
                            value={49}
                            color={"grey"}
                            bold={true}
                        />
                        <MetricCard
                            title={"Pending"}
                            value={0}
                            color={"other"}
                            bold={true}
                        />
                    </div>
                    <p>
                        Last Day Mail Inserted:{" "}
                        <span className="font-semibold">{date}</span>
                    </p>
                </div>
                <div className="text-end">
                    <h3 className="text-base font-semibold">Quick Links</h3>
                    <nav className="flex flex-col gap-1 text-xs">
                        <Link to="/" className="hover:underline">
                            Mail Lookup
                        </Link>
                        <Link to="/" className="hover:underline">
                            Insert Fax
                        </Link>
                        <Link to="/" className="hover:underline">
                            Inster Mail Manual
                        </Link>
                        <Link to="/" className="hover:underline">
                            Auto Insert
                        </Link>
                        <Link to="/" className="hover:underline">
                            Print Labels
                        </Link>
                        <Link to="/" className="hover:underline">
                            Mail Received for Unapproved Recipient
                        </Link>
                        <Link to="/" className="hover:underline">
                            Mail Received for Mailbox On Hold
                        </Link>
                        <Link to="/" className="hover:underline"></Link>
                    </nav>
                </div>
            </div>
        </section>
    );
}

export default InsertMail;
