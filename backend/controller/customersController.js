import asyncHandler from "express-async-handler"
import supabase from "../config/db.js"
import { v4 as uuidv4 } from "uuid"

// @desc get customer data
// @route /api/customers
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

// helper function
// check if username already exists
const checkDuplicateUsername = async (username) => {
    try {
        const { data, error } = await supabase
            .from("customers")
            .select("username")
            .eq("username", username)
            .maybeSingle()

        if (error) throw error

        if (data) {
            return true
        } else {
            return false
        }
    } catch (error) {
        console.error(error)
        throw error
    }
}

// @desc create new customer record
// @route /api/customers
const addCustomer = asyncHandler(async (req, res) => {
    const userName = req.query.username

    try {
        const checkUsername = await checkDuplicateUsername(userName)

        if (checkUsername) {
            return res.status(404).json({
                success: false,
                message: `${userName} already exists in the database, use a unique username`,
            })
        }

        const customerRecord = {
            cid: uuidv4(),
            username: userName,
            last_name: req.query.last_name,
            first_name: req.query.first_name,
            company_name: req.query.company_name,
            store: req.query.store,
            mailbox: req.query.mailbox,
            active: req.query.active,
            hold: req.query.hold,
            blocked: req.query.blocked,
            docs_status: req.query.docs_status,
            bill: req.query.bill,
            country: req.query.country,
            autoship: req.query.autoship,
            start_date: req.query.start_date,
            expiry_date: req.query.expiry_date,
            last_login: req.query.last_login,
        }

        const { error } = await supabase
            .from("customers")
            .insert([customerRecord])

        if (error) throw error

        res.json({
            success: true,
            message: `${userName} has been added to the database`,
        })
    } catch (error) {
        res.json({
            success: false,
            message: "Failed to add record to the db",
            error: error.message,
        })
    }
})

// helper function to check the validation of id
const checkCustomerId = async (id) => {
    try {
        const { data, error } = await supabase
            .from("customers")
            .select("cid")
            .eq("cid", id)
            .maybeSingle()

        if (data) {
            return true
        } else {
            return false
        }
    } catch (error) {
        console.log("Error checking customer ID:", error)
        throw error
    }
}

// @desc delete a customer record
// @route /api/customers/:id
const deleteCustomer = asyncHandler(async (req, res) => {
    const id = req.params.id

    try {
        const IdExits = await checkCustomerId(id)

        if (!IdExits) {
            return res.status(404).json({
                success: false,
                message: `Customer with ID ${id} cannot be found in the DB`,
            })
        }
        const { error } = await supabase
            .from("customers")
            .delete()
            .eq("cid", id)

        if (error) throw error
        res.status(200).json({
            success: true,
            message: `Customer record with ${id} is deleted successfully`,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to delete from the db",
            error: error.message,
        })
    }
})

export { lookUpCustomer, addCustomer, deleteCustomer }

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
