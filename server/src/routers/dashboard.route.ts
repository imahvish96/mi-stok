import { Router } from "express";
import { getDashboardData } from "../controllers/dashboard.controllers";

const router = Router();

router.get("/", getDashboardData);

export default router;
