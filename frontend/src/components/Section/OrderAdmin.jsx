import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router";

function OrderAdmin({ headerStyle }) {
    return (
        <section className="flex h-full flex-col shadow rounded-lg">
            <header className={headerStyle}>
                Order Admin
                <FaShoppingCart />
            </header>
            <div className="flex flex-col rounded-b-lg bg-white px-3 py-6 tracking-tight">
                <nav className="flex flex-col gap-1 text-base">
                    <Link to="/" className="hover:underline">
                        Shipped Orders
                    </Link>
                    <Link to="/order_lookup" className="hover:underline">
                        Order Lookup
                    </Link>
                    <Link to="/" className="hover:underline">
                        Refund Lookup
                    </Link>
                    <Link to="/" className="hover:underline">
                        Manual Order
                    </Link>
                </nav>
            </div>
        </section>
    );
}

export default OrderAdmin;
