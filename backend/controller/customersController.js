import asyncHandler from "express-async-handler"
import supabase from "../config/db.js"

const lookUpMail = asyncHandler(async (req, res) => {
    const { userName, customerName, mailboxNumber } = req.query

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

    const { data, error } = await query

    if (error) {
        res.status(500).json({ success: false, error: error.message })
    }

    return res.json({
        success: true,
        count: data.length,
        data,
    })
})

export { lookUpMail }
