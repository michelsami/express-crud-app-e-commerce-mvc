export const globalError = (err, req, res, next)=>{
	res.status(404).json({error : err, message : err.message})
}
