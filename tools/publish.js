const path = require('path');
const build = require('./build');
const task = require('./task');
const config = require('./config');
const s3 = require('s3');

// Build and deploy the app to S3
module.exports = task('deploy', () => Promise.resolve()
	.then(() => build())
	.then(() => new Promise((resolve, reject) => {
  const client = s3.createClient({
    s3Options: {
      region: 'us-west-1',
      sslEnabled: true,
    },
  });
  const uploader = client.uploadDir({
    localDir: 'public',
    deleteRemoved: true,
    s3Params: { Bucket: 'raddad.band', ACL: 'public-read' },
  });
  uploader.on('error', reject);
  uploader.on('end', resolve);
})));