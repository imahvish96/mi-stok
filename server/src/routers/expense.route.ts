import { Router } from "express";
import { getExpensesByCategory } from "../controllers/expense.controllers";

const router = Router();

router.get("/", getExpensesByCategory);

export default router;
