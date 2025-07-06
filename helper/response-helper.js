class ResponseHelper{
    constructor(){

    }
    replySuccess = (res,message) => {
        let status_code = 200,
        status = 'success';
        return res.status(status_code).json({
            status,
            message
        })
    }
    replyError = (res, error) => {
        let status = error.status || 'fail';
        error.status_code = error?.status_code || 500;
        error.message = error?.message || 'Internal Server Error Occurred'
        return res.status(error.status_code).json({
            status,
            message: error.message
        })
    }   
}

module.exports = ResponseHelper;