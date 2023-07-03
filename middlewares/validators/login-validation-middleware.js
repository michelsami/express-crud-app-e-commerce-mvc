import * as z from 'zod';

const loginSchemaValidation = z.object({
	email :z.string().email(),
	password: z.string().min(8).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/),
	
})

export const validatelogin = (req,res,next)=>{

	
	try {
		const validationPassed = loginSchemaValidation.parse(req.body);

		next()
	} catch (err) {
		if (err instanceof z.ZodError) {
			const validationErrors = err.errors.map(err => {
				if(err.message == 'Invalid'){
					
					err.message = "password: must be 8 characters with at least 1 capital and 1 small and 1 special character"
				}
				return err.message
			});
			
			return res.status(400).json({ message: validationErrors.join(', ') });
		  }
	}
}

