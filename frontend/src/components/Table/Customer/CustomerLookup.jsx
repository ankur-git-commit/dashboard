/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import axios from "axios";
import CustomerForm from "./CustomerForm";

function CustomerLookup() {
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await axios.get("/api/customers");
    //         const responseData = await response.data
    //         // console.log(response);
    //         // console.log(data)\
    //         setData(responseData)
    //         // console.log(data)
    //         return data
    //     };

    //     // setData(customersTables)
    //     // console.log(data)
    //     fetchData()
    // }, []);


    return (
        <>
            <CustomerForm />
        </>
    );
}

export default CustomerLookup;
