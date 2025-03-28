import React from "react";
import { Link } from "react-router";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-gray-300 bg-gray-100 py-2 text-center text-xs text-gray-600">
            <div className="container mx-auto px-4">
                <p className="mb-1">
                    © 2015-{currentYear} | Powered by USZoom.com |
                    <Link
                        to="/terms"
                        className="mx-1 text-gray-600 hover:underline"
                    >
                        Terms of Service
                    </Link>{" "}
                    |
                    <Link
                        to="/privacy"
                        className="mx-1 text-gray-600 hover:underline"
                    >
                        Privacy Policy
                    </Link>{" "}
                    |
                    <Link
                        to="/export"
                        className="mx-1 text-gray-600 hover:underline"
                    >
                        Export Policy
                    </Link>
                </p>
                <p>
                    For support{" "}
                    <Link
                        to="/support"
                        className="text-gray-600 hover:underline"
                    >
                        Click Here
                    </Link>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
