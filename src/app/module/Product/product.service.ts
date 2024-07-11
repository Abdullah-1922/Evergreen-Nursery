import httpStatus from "http-status";
import QueryBuilder from "../../builder/QueryBuilder";
import AppError from "../../errors/AppError";
import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProduct = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};
const getAllProduct = async (query: Record<string, unknown>) => {
  const productQuery = new QueryBuilder(Product.find(), query)
    .search(["description", "name"])
    .filter()
    .sort()
    .paginate()
    .fields();
  const result = await productQuery.modelQuery;
  return result;
};
const getSingleProduct = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};
const updateProductById = async (id: string, payload: Partial<TProduct>) => {
  const isProductExist = Product.findById(id);
  if (!isProductExist) {
    throw new AppError(httpStatus.NOT_FOUND, "Invalid product Id");
  }

  const result = await Product.findByIdAndUpdate(id, payload, { new: true });
  return result;
};
export const ProductServices = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProductById,
};
