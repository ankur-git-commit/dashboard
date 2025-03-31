import express from "express"
import { lookUpCustomer } from "../controller/customersController.js"

const router = express.Router()

router.route("/").get(lookUpCustomer)

export { router as customerRouter }
