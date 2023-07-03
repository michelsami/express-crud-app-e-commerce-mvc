import mongoose from "mongoose";


const createCategorySchema = new mongoose.Schema({
	name: {
		type : String,
		required: [true, "Category name is required"],
		unique : [true, "The category name must be unique"],
		minlength : [3, "The category name must be at least 3 characters"]
	}
}, { timestamps: true })


export const categoryModel = mongoose.model("categories", createCategorySchema)