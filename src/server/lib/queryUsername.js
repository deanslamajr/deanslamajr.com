import dynamodb from 'dynamodb';
import nconf from 'nconf';

const constants = nconf.file(`${__dirname}/../config/constants.json`);

const db = dynamodb.ddb({ 
  accessKeyId: constants.get('accessKeyId'), 
  secretAccessKey: constants.get('secretAccessKey'),
  endpoint: constants.get('endpoint')
});

export default (username) => {
  return new Promise((resolve, reject) => {
    db.getItem(constants.get('table'), username, null, {}, (err, res, cap) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    })
  });
};