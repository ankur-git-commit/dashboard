import expressAsyncHandler from "express-async-handler"
import { v4 as uuidv4 } from "uuid"
import supabase from "../config/db.js"

const orderLookup = expressAsyncHandler(async (req, res) => {
    console.log(req.query)

    try {
        const { id: id_number, customers: customer_first_name } = req.query

        let query = supabase.from("orders").select("*")

        if (customer_first_name) {
            console.log('yes')
        }


        if (id_number) {
            query = query.eq("id", `${id_number}`)
            // query = query.ilike("username", `%${userName}%`)

        }
        if (customer_first_name) {
            query = query.ilike("customers", `%${customer_first_name}%`)
        }

        const { data, error } = await query

        if (error) {
            res.status(500).json({ success: false, error: error.message })
        }

        console.log(query.url.toString())


        res.status(200).json({
            success: true,
            count: data.length,
            data,
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: "Data fetching failed",
            error: error.message,
        })
    }
})

const addOrder = expressAsyncHandler(async (req, res) => {})

const deleteOrder = expressAsyncHandler(async(req,res) => {
    
})

export { orderLookup, addOrder }
