import * as z from 'zod';

const createCategorySchemaValidation = z.object({
	name :z.string().min(3),
})

export const validateCategoryCreation = (req,res,next)=>{

	
	try {
		const validationPassed = createCategorySchemaValidation.parse(req.body);

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

