import { categoryModel } from "../../models/category-model/create-category-model.js";


export const createCategoryController = async (req, res) => {
	try {
	  const { name } = req.body;
	 // const category = new categoryModel({ name, user: req.userId });
	 const newCategory = await categoryModel.create({name : name})
	 // await category.save();
	 return res.status(201).json(newCategory);
	} catch (err) {
	  console.error(err.message);
	  if(err.message.includes("duplicate key error"))
	return  res.status(400).json({ message: "Category already exists" });
	}
  }