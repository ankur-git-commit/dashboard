import { createClient } from "@supabase/supabase-js"
import dotenv from 'dotenv'
dotenv.config()

const URL = process.env.SUPABASE_URL
const SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY
const MAIN_KEY = process.env.SUPABASE_KEY


const supabase = createClient(URL, MAIN_KEY)


const connectDB = async () => {
    try {
        console.log(
            `The connection to supabase has been established at ${URL}`.cyan.underline
        )

    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

const testConnection = async (conn) => {
    try {
        const { data, error } = await conn
            .from('customers')
            .select('CID')
            .limit(2)

        if (error) {
            console.log("Error fetching CID from customers:", error)
        } else {
            console.log("Query result:", data)
        }
    } catch (error) {
        console.log("Exception while fetching data from customers table:", error)
    }
}


export  {connectDB, supabase as default}
