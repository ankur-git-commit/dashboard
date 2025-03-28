import { FaPlayCircle } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { Link } from "react-router";
import MetricCard from "../Metrics/MetricCard";

function TodoList({ headerStyle }) {
    return (
        <section className="flex h-full flex-col shadow">
            <header className={headerStyle}>
                <span className="flex flex-row items-center gap-2">
                    Todo List
                    <FaPlayCircle />
                </span>{" "}
                <FaList />
            </header>

            <div className="flex flex-grow flex-col gap-4 bg-white px-3 py-6 tracking-tight">
                <div className={`flex flex-row flex-wrap justify-between`}>
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-semibold">
                            {" "}
                            Tasks for today:
                        </h3>
                        <div className="flex gap-2">
                            <MetricCard
                                title={"Open"}
                                value={7}
                                color={"grey"}
                                bold={true}
                            />
                            <MetricCard
                                title={"Overdue"}
                                value={2}
                                color={"other"}
                                bold={true}
                            />
                        </div>
                    </div>
                    <div className="text-end">
                        <h3 className="text-base font-semibold">Quick Links</h3>
                        <nav className="flex flex-col gap-1 text-xs">
                            <Link to="/" className="hover:underline">
                                Payment Declined
                            </Link>
                            <Link to="/" className="hover:underline">
                                Task History
                            </Link>
                        </nav>
                    </div>
                </div>
                <h4 className="font-semibold">Overdue details:</h4>
                <div className="flex flex-wrap gap-1 text-center">
                    <MetricCard
                        title={"Ship"}
                        value={7}
                        color={"other"}
                        bold={false}
                    />
                    <MetricCard
                        title={"Scan"}
                        value={0}
                        color={"other"}
                        bold={false}
                    />
                    <MetricCard
                        title={"Shred"}
                        value={0}
                        color={"other"}
                        bold={false}
                    />
                    <MetricCard
                        title={"Discard"}
                        value={0}
                        color={"other"}
                        bold={false}
                    />
                    <MetricCard
                        title={"Consolidate"}
                        value={0}
                        color={"other"}
                        bold={false}
                    />

                    <MetricCard
                        title={<span>Consolidate</span>}
                        value={0}
                        color={"other"}
                        bold={false}
                    />
                </div>
            </div>
        </section>
    );
}

export default TodoList;
