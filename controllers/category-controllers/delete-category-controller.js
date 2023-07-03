import { categoryModel } from "../../models/category-model/create-category-model.js";


export const deleteCategoryByID = async(req, res)=>{
	const categoryID = req.params.id;
	
	try {
		const getCategory = await categoryModel.find({_id : categoryID});
		const deleteCategory = await categoryModel.deleteOne({_id : categoryID});
		if (deleteCategory.deletedCount == 0){
			return res.status(200).json({message : "There is no category with that id"})
		}
		return res.status(200).json({deletedCategory: getCategory, status: deleteCategory, message : "Category is deleted"})
	} catch (error) {
		return res.status(400).json({message : "There is no category with that id"})
	}
}