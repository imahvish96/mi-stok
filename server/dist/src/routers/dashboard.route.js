"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dashboard_controllers_1 = require("../controllers/dashboard.controllers");
const router = (0, express_1.Router)();
router.get("/", dashboard_controllers_1.getDashboardData);
exports.default = router;
