export const errorHandler = (statuCode,message)=>{
    const error =new Error();
    error.message =message;
    return error;
};