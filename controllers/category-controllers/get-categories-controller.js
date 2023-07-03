import { categoryModel } from "../../models/category-model/create-category-model.js";


export const getCategoriesController = async (req, res) => {
	try {
	 
	 
	 const listOfCategories = await categoryModel.find()
	
	 return res.status(200).json(listOfCategories);
	} catch (err) {
	  console.error(err.message);
	  
	return  res.status(400).json({ message: err});
	}
  }