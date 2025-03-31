import dotenv from "dotenv"
import connectDB from "../config/db.js"
dotenv.config()

async function testConnection() {
    try {
        let { data: customers, error } = await connectDB
            .from("customers")
            .select("*")
            .limit(5)

        if (error) throw error

        console.log("Successfully connected to Supabase!")
        console.log(customers)
    } catch (error) {
        console.log("Connection to Supabase failed")
        console.error(error)
    }
}

// testConnection()

export default testConnection
