const componentName = "lamdas3image.responseHandler";

const sendResponse = (reqId, statusCode, data) => {
  const responseHeaders = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Credentials": true,
  };
  console.log({
    reqId,
    componentName,
    statusCode,
    data,
  });

  return {
    statusCode: statusCode,
    headers: responseHeaders,
    body: JSON.stringify(data, null, 2),
  };
};

module.exports = {
  sendResponse
}
