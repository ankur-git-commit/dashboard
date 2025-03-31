import asyncHandler from "express-async-handler"
import supabase from "../config/db.js"

const lookUpCustomer = asyncHandler(async (req, res) => {
    console.log(req.query)
    const { username: userName, first_name: customerName, mailbox: mailboxNumber } = req.query

    let query = supabase
    .from("customers")
    .select("*")

    if (userName) {
        query = query.ilike("username", `%${userName}%`) 
    }

    if (customerName) {
        query = query.ilike("first_name", `%${customerName}%`) 
    }

    if (mailboxNumber) {
        query = query.eq("mailbox", `${mailboxNumber}`) 
    }
    // console.log(query.url.toString())

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


export { lookUpCustomer }
