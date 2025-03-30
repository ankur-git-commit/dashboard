import { FiPackage } from "react-icons/fi";
import { FaPlayCircle } from "react-icons/fa";
import { FaRegQuestionCircle } from "react-icons/fa";
import MetricCard from "../Metrics/MetricCard";

import { Link } from "react-router";

function Pickups({ headerStyle }) {
    return (
        <section className="flex h-full flex-col shadow rounded-lg">
            <header className={headerStyle}>
                <span className="flex flex-row items-center gap-2">
                    Pickups
                    <Link to="https://www.youtube.com/watch?v=cgEee-p87-8">
                        {/*  some random yt tutorial link for ipostal1 */}
                        <FaPlayCircle />
                    </Link>
                    <FaRegQuestionCircle />
                </span>
                <FiPackage />
            </header>
            <div className="flex flex-grow flex-col items-start gap-4 rounded-b-lg bg-white px-3 py-6 tracking-tight">
                <MetricCard title={"Pickups"} />
                <p>Create Pickup</p>
            </div>
        </section>
    );
}

export default Pickups;
