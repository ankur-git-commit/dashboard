import express from "express"
import { lookUpMail } from "../controller/customersController.js"

const router = express.Router()

router.route("/").get(lookUpMail)

export { router as customerRouter }
