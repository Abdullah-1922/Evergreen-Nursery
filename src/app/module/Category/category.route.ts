import express from "express";
import { CategoryControllers } from "./category.controller";
const route = express.Router();
route.post("/create-category", CategoryControllers.createCategory);
route.patch("/update-category", CategoryControllers.updateCategoryArray);
route.get("/", CategoryControllers.getAllCategory);
export const CategoryRoute = route;
