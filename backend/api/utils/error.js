import e from "express";

export const errorHandler = (statusCode, message) => {
    const error = new Error(message);
    error.statusCode = statusCode
    error.message = message;
    return error;
}

export default errorHandler