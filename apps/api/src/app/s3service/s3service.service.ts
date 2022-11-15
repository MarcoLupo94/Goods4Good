import { S3 } from 'aws-sdk';
import { Logger, Injectable } from '@nestjs/common';
import { environment } from '../../environments/environment';

@Injectable()
export class S3serviceService {
  async upload(file) {
    const { originalname } = file;
    const bucketS3 = environment.AWS_S3_BUCKET;
    return await this.uploadS3(file.buffer, bucketS3, originalname);
  }

  async uploadS3(file, bucket, name) {
    // ONLY WORKS WITH JPEG
    const contentType = file.type;
    const s3 = this.getS3();
    const params = {
      Bucket: bucket,
      Key: String(name),
      Body: file,
      ACL: 'public-read',
      ContentType: 'image/jpeg',
    };
    return new Promise((resolve, reject) => {
      s3.upload(params, (err, data) => {
        if (err) {
          Logger.error(err);
          reject(err.message);
        }
        resolve(data);
      });
    });
  }

  getS3() {
    return new S3({
      accessKeyId: environment.Access_Key_ID_aws,
      secretAccessKey: environment.Secret_Access_Key_aws,
    });
  }
}
