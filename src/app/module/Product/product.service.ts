import httpStatus from "http-status";
import QueryBuilder from "../../builder/QueryBuilder";
import AppError from "../../errors/AppError";
import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProduct = async (payload: TProduct) => {
  if (payload.stock == 0) {
    payload.status = "OUT-OF-STOCK";
  }
  const result = await Product.create(payload);
  return result;
};
const getAllProduct = async (query: Record<string, unknown>) => {
  const productQuery = new QueryBuilder(Product.find(), query)
    .search([ "name"])
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await productQuery.modelQuery.exec();

  // console.log(result);
  const meta = await productQuery.countTotal();
  return { result, meta };
};
const getSingleProduct = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};
const updateProductById = async (id: string, payload: Partial<TProduct>) => {
  const isProductExist =await Product.findById(id);
  if (!isProductExist) {
    throw new AppError(httpStatus.NOT_FOUND, "Invalid product Id");
  }

  const result = await Product.findByIdAndUpdate(id, payload, { new: true });
  return result;
};
const deleteProductById = async (id: string) => {
  const isProductExist =await Product.findById(id);
 
  if (!isProductExist) {
    
    throw new AppError(httpStatus.NOT_FOUND, "Invalid product Id");
  }

  const result = await Product.findByIdAndDelete(id);
  return result;
};
export const ProductServices = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProductById,
  deleteProductById
};
