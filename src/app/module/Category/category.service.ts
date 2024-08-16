import { Category } from "./category.model";

const createCategory = async (payload: { category: string }) => {
  const currentCategoryObj = await Category.findOne({});

  if (currentCategoryObj) {
    // Push the new category to the existing array
    currentCategoryObj.category.push(payload.category);

    // Save the updated document
    const result = await currentCategoryObj.save();
    return result;
  } else {
    // If no document exists, create a new one with the payload
    const newCategory = await Category.create({ category: [payload.category] });
    return newCategory;
  }
};

const getAllCategory = async () => {
  const result = await Category.find({});
  return result;
};

const updateCategoryArray=async(payload:any)=>{
  const currentCategoryObj = await Category.findOne({});

  if (currentCategoryObj) {
    // Push the new category to the existing array
    currentCategoryObj.category =payload.category

    // Save the updated document
    const result = await currentCategoryObj.save();
    return result;
  } else {
    // If no document exists, create a new one with the payload
    const newCategory = await Category.create({ category: payload.category });
    return newCategory;
  }




}



export const CategoryServices = {
  createCategory,
  getAllCategory,
  updateCategoryArray
};
