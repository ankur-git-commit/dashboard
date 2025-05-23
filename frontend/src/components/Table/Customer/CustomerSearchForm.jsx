/* eslint-disable no-unused-vars */
import CustomerResults from "./CustomerResults";
import { useState } from "react";
import axios from "axios";

function CustomerSearchForm() {
    const [activeStatus, setActiveStatus] = useState("");
    const [holdStatus, setHoldStatus] = useState("");
    const [documentStatus, setDocumentStatus] = useState("");
    const [recipientSearch, setRecipientSearch] = useState("");
    const [mailboxSearch, setMailboxSearch] = useState("");
    const [resultData, setResultData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleActiveStatus = (event) => {
        setActiveStatus(event.target.value);
    };
    const handleHoldStatus = (event) => {
        setHoldStatus(event.target.value);
    };
    const handleDocumentStatus = (event) => {
        setDocumentStatus(event.target.value);
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

        if (activeStatus) queryParams.append("active", activeStatus);
        if (holdStatus) queryParams.append("hold", holdStatus);
        if (documentStatus) queryParams.append("docs_status", documentStatus);
        if (recipientSearch) queryParams.append("first_name", recipientSearch);
        if (mailboxSearch) queryParams.append("mailbox", mailboxSearch);

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
                                <label htmlFor="active-status">
                                    Active Status:
                                </label>
                                <select
                                    name="active-status"
                                    id="active-status"
                                    className={className.selectBox}
                                    value={activeStatus}
                                    onChange={handleActiveStatus}
                                >
                                    <option value="">Active Recipients</option>
                                    <option value="1">Active</option>
                                    <option value="0">Non Active</option>
                                </select>
                            </div>
                            <div className={className.formSelectAlignment}>
                                <label htmlFor="hold-status">
                                    Hold Status:
                                </label>
                                <select
                                    name="hold-status"
                                    id="hold-status"
                                    className={className.selectBox}
                                    value={holdStatus}
                                    onChange={handleHoldStatus}
                                >
                                    <option value="">All Recipients</option>
                                    <option value="1">Hold</option>
                                    <option value="0">Not On Hold</option>
                                </select>
                            </div>
                            <div className={className.formSelectAlignment}>
                                <label htmlFor="document-status">
                                    Document Status:
                                </label>
                                <select
                                    name="document-status"
                                    id="document-status"
                                    className={className.selectBox}
                                    value={documentStatus}
                                    onChange={handleDocumentStatus}
                                >
                                    <option value="">All</option>
                                    <option value="No Docs">
                                        No Docs Received
                                    </option>
                                    <option value="Approved">Approved</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Online Notary">
                                        Online notary request sent
                                    </option>
                                    <option value="Transfer Pending">
                                        Transfer pending
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className={className.formInputAlignment}>
                                <label htmlFor="recipient-search">
                                    Recipient Search:
                                </label>
                                <input
                                    type="text"
                                    name="recipient-search"
                                    id="recipient-search"
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
            <CustomerResults data={resultData} />
        </>
    );
}

export default CustomerSearchForm;
