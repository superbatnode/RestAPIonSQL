const errorHandler = async(err, req, res, next)=>{
    const status = 500;
    let error = {
        message:"internal server error", 
        original: err.message
    }
    res.status(400).json(error);
}
module.exports = errorHandler;