const successMessage = (res,statusCode,message,body) =>{
    res.status(statusCode).json({
        status: statusCode,
        message: message,
        body:body,
        error:null
    });
}
const errorMessage = (res,statusCode,message,body) =>{
    res.status(statusCode).json({
        status: statusCode,
        message: message,
        body:null,
        error:body

});
}
module.exports={successMessage,errorMessage}