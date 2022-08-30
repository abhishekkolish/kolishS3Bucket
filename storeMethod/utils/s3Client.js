// import { S3Client } from "@aws-sdk/client-s3";
const { S3Client}  = require("@aws-sdk/client-s3")

// Set the AWS Region here.
const REGION = process.env.API_REGION;

// Create an Amazon S3 service client object.
const s3Client = new S3Client({ region: REGION });

// export { s3Client };
module.exports = {
  s3Client
}
