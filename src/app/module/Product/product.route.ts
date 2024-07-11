import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { ProductValidation } from "./product.validation";
import { ProductController } from "./product.controller";
const router = express.Router();

router.post(
  "/create-product",
  validateRequest(ProductValidation.createProductValidation),
  ProductController.createProduct
);
router.get("/", ProductController.getAllProduct);
router.get("/:id", ProductController.getSingleProduct);
router.patch("/:id", validateRequest(ProductValidation.updateProductValidation),ProductController.updateProductById);

export const ProductRoute = router;
