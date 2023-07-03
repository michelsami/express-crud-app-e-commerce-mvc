import mongoose from "mongoose";


const createProductSchema = new mongoose.Schema({
	name: {
		type : String,
		required: [true, "Product name is required"],
		unique : [true, "The Product name must be unique"],
		minlength : [3, "The Product name must be at least 3 characters"]
	},
	price: {
		type:Number,
		required: [true, "Price is required"],
	}, 
	category_id: {
		type: mongoose.Schema.Types.ObjectId,
    	ref: 'categories',
		required:[true, "Product has to be linked with category by category_id"]
	}
}, { timestamps: true })


export const productModel = mongoose.model("products", createProductSchema)