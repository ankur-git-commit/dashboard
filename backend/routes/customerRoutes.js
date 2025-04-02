import express from "express"
import { lookUpCustomer, addCustomer, deleteCustomer } from "../controller/customersController.js"

const router = express.Router()

router.route("/").get(lookUpCustomer).post(addCustomer)
router.route("/:id").delete(deleteCustomer)

export { router as customerRouter }
