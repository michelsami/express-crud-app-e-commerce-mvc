import * as z from 'zod';

const updateProductSchemaValidation = z.object({
	name :z.string().min(3),
	price: z.number()
})

export const validateProductUpdate = (req,res,next)=>{

	
	try {
		const validationPassed = updateProductSchemaValidation.parse(req.body);

		next()
	} catch (err) {
		if (err instanceof z.ZodError) {
			const validationErrors = err.errors.map(err => {
				
				return err.message
			});
			
			return res.status(400).json({ message: validationErrors.join(', ') });
		  }
	}
}

