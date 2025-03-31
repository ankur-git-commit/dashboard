import express from "express"
import { lookUpMail } from "../controller/customersController"

const router = express.Router()

router.route("/").get(lookUpMail)

export { router as customerRouter }
