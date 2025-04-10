/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";

function OrderSearchForm() {
    const [orderStatus, setOrderStatus] = useState("");
    const [productStatus, setProductStatus] = useState("");
    const [documentStatus, setDocumentStatus] = useState("");
    const [recipientSearch, setRecipientSearch] = useState("");
    const [mailboxSearch, setMailboxSearch] = useState("");
    const [resultData, setResultData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleOrderStatus = (event) => {
        // setActiveStatus(event.target.value);
    };
    const handleProduct = (event) => {
        // setHoldStatus(event.target.value);
    };
    const handleDocumentStatus = (event) => {
        // setDocumentStatus(event.target.value);
    };
    const handleRecipientSearch = (event) => {
        setRecipientSearch(event.target.value);
    };
    const handleMailboxSearch = (event) => {
        setMailboxSearch(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const handleSearchEvent = async () => {
        const queryParams = new URLSearchParams();


        console.log(queryParams.toString());
        const response = await axios.get(
            `/api/customers/?${queryParams.toString()}`,
        );
        setResultData(response.data.data);
    };

    const className = {
        selectBox: `border bg-white rounded-sm w-50`,
        inputBox: `border bg-white rounded-sm pl-1`,
        formSelectAlignment: `flex justify-between gap-80`,
        formInputAlignment: `flex justify-between gap-5`,
    };

    return (
        <>
            <div className="bg-[#F6F6F5] p-6">
                <h1 className="pb-10 text-4xl text-[#616060]">
                    Recipient Lookup
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className="flex justify-between text-sm font-light">
                        <div className="flex flex-col gap-1">
                            <div className={className.formSelectAlignment}>
                                <label htmlFor="order-id">
                                    Product/Service:
                                </label>
                                <select
                                    name="order-id"
                                    id="order-id"
                                    className={className.selectBox}
                                    value={productStatus}
                                    onChange={handleProduct}
                                >
                                    <option value="">Active Recipients</option>
                                    <option value="1">Active</option>
                                    <option value="0">Non Active</option>
                                </select>
                            </div>
                            <div className={className.formSelectAlignment}>
                                <label htmlFor="order-status">
                                    Order Status:
                                </label>
                                <select
                                    name="order-status"
                                    id="order-status"
                                    className={className.selectBox}
                                    value={orderStatus}
                                    onChange={handleOrderStatus}
                                >
                                    <option value="">All Recipients</option>
                                    <option value="1">Hold</option>
                                    <option value="0">Not On Hold</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className={className.formInputAlignment}>
                                <label htmlFor="order-id">
                                    Order Id:
                                </label>
                                <input
                                    type="text"
                                    name="order-id"
                                    id="order-id"
                                    className={className.inputBox}
                                    value={recipientSearch}
                                    onChange={handleRecipientSearch}
                                />
                            </div>
                            <div className={className.formInputAlignment}>
                                <label htmlFor="mailbox-search">
                                    Mailbox Search:
                                </label>
                                <input
                                    type="text"
                                    name="mailbox-search"
                                    id="mailbox-search"
                                    className={className.inputBox}
                                    value={mailboxSearch}
                                    onChange={handleMailboxSearch}
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    onClick={() => handleSearchEvent()}
                                    className="w-1/2 rounded-md border-1 bg-[#003283] text-white hover:bg-[#0055aa]"
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default OrderSearchForm;
