"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controllers_1 = require("../controllers/product.controllers");
const router = (0, express_1.Router)();
router.get("/", product_controllers_1.getProducts);
router.post("/", product_controllers_1.createProduct);
exports.default = router;
