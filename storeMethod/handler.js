const { StatusCodes } = require("http-status-codes");
const { v4: uuidv4 } = require('uuid');
const reqId = uuidv4();

const { sendResponse } = require("./utils/responseHandler")

const componentName = "lamdas3image.handler";
module.exports.hello = async (event) => {
  try{
    const body  = JSON.parse(event.body);
    const type = body.type == "pdf" ? "application/pdf" : (body.type == "jpg" || body.type == "jpeg" ? "image/jpeg" : "image/png");
    
    return sendResponse(reqId, StatusCodes.OK, {
      message: "Signed URL generated to upload file",
      data: {
          signedURL
      }
    
    });

  }catch(exp){
     console.error({reqId, componentName, message: "Error while uploading", Error:exp});
     return sendResponse(reqId, StatusCodes.INTERNAL_SERVER_ERROR, {
      Error: exp.message
     })
  }
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
