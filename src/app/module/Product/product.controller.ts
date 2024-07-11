import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ProductServices } from "./product.service";

const createProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.createProduct(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product created successfully",
    data: result,
  });
});
const getAllProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.getAllProduct(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product retrieved successfully",
    data: result,
  });
});
const getSingleProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.getSingleProduct(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product retrieved successfully",
    data: result,
  });
});
const updateProductById = catchAsync(async (req, res) => {
  const result = await ProductServices.updateProductById(req.params.id,req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product updated successfully",
    data: result,
  });
});
export const ProductController = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProductById
};
