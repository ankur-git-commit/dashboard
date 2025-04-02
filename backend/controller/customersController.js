import asyncHandler from "express-async-handler"
import supabase from "../config/db.js"


const lookUpCustomer = asyncHandler(async (req, res) => {
    console.log(req.query)
    const {
        username: userName,
        first_name: customerName,
        mailbox: mailboxNumber,
        active: activeStatusParam,
        hold: accountOnHoldParam,
        docs_status: documentStatus,
    } = req.query

    const accountOnHold = accountOnHoldParam === "true" ? 1 : 0
    const activeStatus =
        activeStatusParam === undefined
            ? undefined
            : activeStatusParam === "false"
            ? 0
            : 1

    let query = supabase.from("customers").select("*")

    if (userName) {
        query = query.ilike("username", `%${userName}%`)
    }

    if (customerName) {
        query = query.ilike("first_name", `%${customerName}%`)
    }

    if (mailboxNumber) {
        query = query.eq("mailbox", `${mailboxNumber}`)
    }

    if (activeStatus) {
        query = query.eq("active", `${activeStatus}`)
    }

    if (accountOnHold) {
        query = query.eq("hold", `${accountOnHold}`)
    }

    if (documentStatus) {
        query = query.eq("docs_status", `${documentStatus}`)
    }

    console.log(query.url.toString())

    const { data, error } = await query
    // console.log(query.url.toString())

    if (error) {
        res.status(500).json({ success: false, error: error.message })
    }

    res.json({
        success: true,
        count: data.length,
        data,
    })
})

const addCustomer = asyncHandler(async () => {

})

export { lookUpCustomer, addCustomer }

/* 

    // Define query filters with their corresponding operations
    const queryFilters = {
        username: { value: userName, operation: 'ilike', format: value => `%${value}%` },
        first_name: { value: customerName, operation: 'ilike', format: value => `%${value}%` },
        mailbox: { value: mailboxNumber, operation: 'eq', format: value => `${value}` },
        active: { value: activeStatus, operation: 'eq', format: value => value },
        hold: { value: hold, operation: 'eq', format: value => value },
        doc_status: { value: documentStatus, operation: 'eq', format: value => value }
    }

    // Apply each filter if the value exists
    for (const [field, { value, operation, format }] of Object.entries(queryFilters)) {
        if (value) {
            query = query[operation](field, format(value))
        }
    }

*/
