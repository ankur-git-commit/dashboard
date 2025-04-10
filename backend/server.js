import express from "express"
import dotenv from "dotenv"
import colors from "colors"
dotenv.config()
import { connectDB } from "./config/db.js"
import supabase from "./config/db.js"
import { customerRouter } from "./routes/customerRoutes.js"
import { orderRouter } from "./routes/ordersRoutes.js"

// Define server PORT
const PORT = process.env.PORT || 3000
// Establish Supabase connection
connectDB()

// import path from "path"
// import { fileURLToPath } from "url"
// import supabase from "./config/db.js"
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)
// const rootPath = path.resolve(__dirname, "../../")

// Create instance of express
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api/customers", customerRouter)
app.use("/api/orders", orderRouter)

app.listen(PORT, () => {
    console.log(`server is running at PORT : ${PORT}`)
})
