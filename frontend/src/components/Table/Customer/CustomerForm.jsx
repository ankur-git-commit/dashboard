function CustomerForm() {
    const className = {
        selectBox: `border-1 bg-white rounded-sm`,
        inputBox: `border-1 bg-white rounded-sm`,
        formSelectAlignment: `flex justify-between gap-80`,
        formInputAlignment: `flex justify-between gap-5`,
    };
    return (
        <>
            <div className="bg-[#F6F6F5] p-6">
                <h1 className="pb-10 text-4xl text-[#616060]">
                    Recipient Lookup
                </h1>
                <form>
                    <div className="flex justify-between text-sm font-light">
                        <div className="flex flex-col gap-2">
                            <div className={className.formSelectAlignment}>
                                <label htmlFor="active-status">
                                    Active Status:
                                </label>
                                <select
                                    name="active-status"
                                    id="active-status"
                                    className={className.selectBox}
                                >
                                    <option value="">All Recipients</option>
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
                                >
                                    <option value="">All Recipients</option>
                                    <option value="1">Hold</option>
                                    <option value="">Not On Hold</option>
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
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-1/2 rounded-md border-1 bg-[#003283] text-white"
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default CustomerForm;
