// placeholder file for config.js which includes sensitive API keys, secrets and IDs.
// kindly copy the contents of this file into your config.js in the same folder and
// ensure that the config.js file created is added to your gitignore.

const config = {
  instagramOAuth: {
    instagramClientID: 'FILL_ME_IN',
    instagramClientSecret: 'FILL_ME_IN',
  },
  mongodb: {
    uri_dev: 'mongodb://localhost/inkindexauth',
    uri_staging: undefined,
    uri_prod: undefined,
  },
  restdb: {

  },
};

module.exports = config;
