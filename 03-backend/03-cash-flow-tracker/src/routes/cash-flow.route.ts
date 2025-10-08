import express from "express";
import { getAllCashflow } from "../controllers/cash-flow.controller.js";

const router = express.Router();

router.route("/").get(getAllCashflow);

export default router;
