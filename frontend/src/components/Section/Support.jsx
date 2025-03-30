import { LiaUndoAltSolid } from "react-icons/lia";
import { IoInformation } from "react-icons/io5";
import { MdLocalShipping } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa";
import { MdQuestionMark } from "react-icons/md";
import { TbMovie } from "react-icons/tb";
import { FaBook } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";

import CustomIcons from "../CustomIcons/CustomIcons";

import { Link } from "react-router";

function Support({ headerStyle }) {
    return (
        <section className="flex h-full flex-col rounded-lg shadow">
            <header className={headerStyle}>
                Support
                <MdOutlineSupportAgent />
            </header>
            <div className="flex flex-grow flex-col rounded-lg bg-white py-6 pr-8 pl-3 tracking-tight">
                <div className="flex flex-row justify-between gap-4">
                    <nav className="flex flex-col gap-1 text-sm">
                        <h3 className="text-lg font-semibold">Training</h3>
                        <Link to="/" className="hover:underline">
                            <span className="flex flex-row items-center gap-1">
                                <CustomIcons icon={FaBook} />
                                Training Docs
                            </span>
                        </Link>
                        <Link to="/" className="hover:underline">
                            <span className="flex flex-row items-center gap-1">
                                <CustomIcons icon={TbMovie} />
                                Training Vidoes
                            </span>
                        </Link>
                    </nav>
                    <nav className="flex flex-col gap-1 text-sm">
                        <h3 className="text-lg font-semibold">Marketing</h3>
                        <Link to="/" className="hover:underline">
                            Marketing Resources
                        </Link>
                    </nav>
                    <nav className="flex flex-col gap-1 text-sm">
                        <h3 className="text-lg font-semibold">Support</h3>
                        <Link to="/" className="hover:underline">
                            <span className="flex flex-row items-center gap-3">
                                <span className="text-end">
                                    <CustomIcons
                                        icon={IoInformation}
                                        size={20}
                                    />
                                </span>
                                Support Page / Contact Us
                            </span>
                        </Link>
                        <Link to="/" className="hover:underline">
                            <span className="flex flex-row items-center gap-3">
                                <CustomIcons icon={LiaUndoAltSolid} size={20} />
                                Request a Refund
                            </span>
                        </Link>
                        <Link to="/" className="hover:underline">
                            <span className="flex flex-row items-center gap-3">
                                {/* <span className="text-pink-700"> */}
                                <CustomIcons icon={MdLocalShipping} size={20} />
                                {/* </span> */}
                                File a Shipping Claim
                            </span>
                        </Link>
                        <Link to="/" className="hover:underline">
                            <span className="flex flex-row items-center gap-3">
                                <CustomIcons icon={FaRegLightbulb} size={20} />
                                Knowledge Base
                            </span>
                        </Link>
                        <Link to="/" className="hover:underline">
                            <span className="flex flex-row items-center gap-3">
                                <CustomIcons icon={MdQuestionMark} size={20} />
                                FAQ
                            </span>
                        </Link>
                    </nav>
                </div>
                <h3 className="text-lg font-semibold">Compatible Devices</h3>
                <p>Requires iOS 11 or higher, Android 14.0 or higher</p>
            </div>
        </section>
    );
}

export default Support;
