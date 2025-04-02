import express from "express"
import { lookUpCustomer, addCustomer } from "../controller/customersController.js"

const router = express.Router()

router.route("/").get(lookUpCustomer).post(addCustomer)

export { router as customerRouter }
