const { PutObjectCommand } = require("@aws.sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

const componentName = "lamdas3image.s3UploadObject";

const s3UploadObject = async (reqId, fileName, type) => {

// define bucket parameters
  const bucketParams = {
      Bucket: process.env.S3_BUCKET_NAME,
      Key: fileName,
      ContentType: type //"multipart/form-data"
  };

  console.log({reqId, componentName, "message": "Bucket params", data: bucketParams});

  try {
    // Create a command to put the object in the S3 bucket.
    const command = new PutObjectCommand(bucketParams);

    // Create the presigned URL.
    const signedUrl = await getSignedUrl(s3Client, command, {
      expiresIn: 600,
    });
    console.log({reqId, componentName, message: `Putting "${bucketParams.Key}" using signedUrl with body "${bucketParams.Body}"`, data: {signedUrl}});

    return signedUrl;
  } catch (exp) {
    console.error({reqId, componentName, message: "Error generating upload presigned s3 URL", Error: exp});
    throw exp;
  }


};

module.exports = {
  s3UploadObject
}