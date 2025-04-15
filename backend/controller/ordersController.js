import expressAsyncHandler from "express-async-handler"
import { v4 as uuidv4 } from "uuid"
import supabase from "../config/db.js"

const orderLookup = expressAsyncHandler(async (req, res) => {
    try {
        const {
            id: id_number,
            customers: customer_first_name,
            products: product_type, // Changed from product to products to match frontend
            order_status: orderStatus,
        } = req.query

        const page = parseInt(req.query.page, 10) || 0;
        const per_page = parseInt(req.query.per_page, 10) || 20;

        // calculate range for pagination
        const from = page * per_page
        const to = from + per_page - 1

        console.log(`Pagination: page=${page}, per_page=${per_page}, range=${from}-${to}`);

        // Helper function to apply filters to both main query and count query
        const applyFilters = (query) => {
            if (id_number) {
                query = query.eq("id", `${id_number}`)
            }
            if (customer_first_name) {
                query = query.ilike("customers", `%${customer_first_name}%`)
            }
            if (product_type) {
                query = query.eq("products", `${product_type}`)
            }
            if (orderStatus) {
                query = query.eq("order_status", `${orderStatus}`)
            }
            return query
        }

        // Build main query with filters
        let query = supabase.from("orders").select("*")
        query = applyFilters(query)

        // Apply pagination to main query
        const paginatedQuery = query.range(from, to).limit(per_page);

        // Get count of total matching records with the same filters
        let countQuery = supabase.from("orders").select("*", { count: "exact", head: true })
        countQuery = applyFilters(countQuery)
        const { count, error: countError } = await countQuery

        if (countError) {
            return res.status(500).json({
                success: false,
                message: "Error counting records",
                error: countError.message
            })
        }

        // Execute main query to get data
        const { data, error } = await paginatedQuery

        if (error) {
            return res.status(500).json({
                success: false,
                message: "Error fetching records",
                error: error.message
            })
        }

        console.log(`Found ${count} total records matching filters`)
        console.log(`Returning ${data.length} records for page ${page}`)

        res.status(200).json({
            success: true,
            count: count || 0, // Total number of filtered records
            page: Number(page), // Current page (0-indexed)
            per_page: Number(per_page),
            total_pages: Math.ceil((count || 0) / per_page), // Calculate total pages
            data: data || [], // The actual records for this page
        })
    } catch (error) {
        console.error("Unexpected error in orderLookup:", error)
        res.status(500).json({
            success: false,
            message: "Data fetching failed",
            error: error.message,
        })
    }
})

const addOrder = expressAsyncHandler(async (req, res) => {})

const deleteOrder = expressAsyncHandler(async (req, res) => {})

export { orderLookup, addOrder }
