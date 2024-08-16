import { Router } from "express";
import { ProductRoute } from "../module/Product/product.route";
import { CategoryRoute } from "../module/Category/category.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/products",
    route: ProductRoute,
  },

  {
    path: "/category",
    route: CategoryRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
