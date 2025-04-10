import { Router } from "express"
import { orderLookup } from "../controller/ordersController.js"

const router = Router()

router.route("/").get(orderLookup)

export { router as orderRouter }
