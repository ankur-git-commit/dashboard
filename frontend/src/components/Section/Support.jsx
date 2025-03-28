import { FaUndo } from "react-icons/fa";
import { IoInformation } from "react-icons/io5";
import { MdLocalShipping } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa";
import { MdQuestionMark } from "react-icons/md";
import { TbMovie } from "react-icons/tb";
import { FaBook } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";

import { Link } from "react-router";

function Support({ headerStyle }) {
    return (
        <section className="flex h-full flex-col shadow">
            <header className={headerStyle}>
                Support
                <MdOutlineSupportAgent />
            </header>
            <div className="flex flex-grow flex-row justify-between gap-4 bg-white px-3 py-6 tracking-tight">
                <nav className="flex flex-col gap-1 text-sm">
                    <h3 className="text-base font-semibold">Training</h3>
                    <Link to="/" className="hover:underline">
                        <span className="flex flex-row items-center gap-1">
                            <FaBook />
                            Training Docs
                        </span>
                    </Link>
                    <Link to="/" className="hover:underline">
                        <span className="flex flex-row items-center gap-1">
                            <TbMovie />
                            Training Vidoes
                        </span>
                    </Link>
                </nav>
                <nav className="flex flex-col gap-1 text-sm">
                    <h3 className="text-base font-semibold">Marketing</h3>
                    <Link to="/" className="hover:underline">
                        Marketing Resources
                    </Link>
                </nav>
                <nav className="flex flex-col gap-1 text-sm">
                    <h3 className="text-base font-semibold">Training</h3>
                    <Link to="/" className="hover:underline">
                        <span className="flex flex-row items-center gap-1">
                            <IoInformation />
                            Support Page / Contact Us
                        </span>
                    </Link>
                    <Link to="/" className="hover:underline">
                        <span className="flex flex-row items-center gap-1">
                            <FaUndo />
                            Request a Refund
                        </span>
                    </Link>
                    <Link to="/" className="hover:underline">
                        <span className="flex flex-row items-center gap-1">
                            <MdLocalShipping />
                            File a Shipping Claim
                        </span>
                    </Link>
                    <Link to="/" className="hover:underline">
                        <span className="flex flex-row items-center gap-1">
                            <FaRegLightbulb />
                            Knowledge Base
                        </span>
                    </Link>
                    <Link to="/" className="hover:underline">
                        <span className="flex flex-row items-center gap-1">
                            <MdQuestionMark />
                            FAQ
                        </span>
                    </Link>
                </nav>
            </div>
        </section>
    );
}

export default Support;
