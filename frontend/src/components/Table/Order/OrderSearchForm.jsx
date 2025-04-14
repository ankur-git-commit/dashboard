/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";
import products from "./products";
import OrderResults from "./OrderResults";

function OrderSearchForm() {
    const [orderId, setOrderId] = useState("");
    const [recipientSearch, setRecipientSearch] = useState("");
    const [product, setProduct] = useState("");
    const [orderStatus, setOrderStatus] = useState("");

    const [resultData, setResultData] = useState({});

    const handleProductSearch = (event) => {
        setProduct(event.target.value);
    };
    const handleOrderId = (event) => {
        setOrderId(event.target.value);
    };
    const handleRecipientSearch = (event) => {
        setRecipientSearch(event.target.value);
    };
    const handleOrderStatus = (event) => {
        setOrderStatus(event.target.value);
    };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    // };

    const handleSearchEvent = async (event) => {
        event.preventDefault();
        const queryParams = new URLSearchParams();

        if (orderId) queryParams.append('id', orderId)
        if (recipientSearch) queryParams.append('customers', recipientSearch)
        if (product) queryParams.append('products', product)
        if (orderStatus) queryParams.append('order_status', orderStatus)


        // console.log(typeof queryParams.toString())

        // console.log(queryParams.toString());
        const response = await axios.get(
            `/api/orders/?${queryParams.toString()}`,
        );
        setResultData(response.data.data);
        console.log(resultData)
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
                <form onSubmit={handleSearchEvent}>
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
                                    value={product}
                                    onChange={handleProductSearch}
                                >
                                    <option value="">
                                        All Product/Services
                                    </option>
                                    {products.map((item, index) => {
                                        return (
                                            <option
                                                key={index}
                                                value={item.product}
                                            >
                                                {item.product}
                                            </option>
                                        );
                                    })}
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
                                    <option value="">All Order Statuses</option>
                                    <option value="Paid">Paid</option>
                                    <option value="Shipped">Shipped</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className={className.formInputAlignment}>
                                <label htmlFor="order-id">Order Id:</label>
                                <input
                                    type="text"
                                    name="order-id"
                                    id="order-id"
                                    pattern="[0-9]{1,8}"
                                    maxLength={8}
                                    className={className.inputBox}
                                    value={orderId}
                                    onChange={handleOrderId}
                                />
                            </div>
                            <div className={className.formInputAlignment}>
                                <label htmlFor="mailbox-search">
                                    Recipient Name/Company:
                                </label>
                                <input
                                    type="text"
                                    name="mailbox-search"
                                    id="mailbox-search"
                                    className={className.inputBox}
                                    value={recipientSearch}
                                    onChange={handleRecipientSearch}
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    // onClick={() => handleSearchEvent()}
                                    className="w-1/2 rounded-md border-1 bg-[#003283] text-white hover:bg-[#0055aa]"
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <OrderResults data={resultData} />
        </>
    );
}

export default OrderSearchForm;
