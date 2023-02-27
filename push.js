var push = require('web-push');

let vapidKeys = {
    publicKey: 'BNEa19-jnKDgREO3yk7yNlNOvapafwekyD1zguV_fT7VoiZ7PfrbVwUcFkDyXvtzYcWA5FqY3CrI-jC-9M1zN4U',
    privateKey: 'RC-lwjZXlmRSy4xD9VDTsEGclQQauWRdr2CQV9OaQ_I'
  };

push.setVapidDetails('mailto:milkyborbon30@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {};

console.log(vapidKeys);