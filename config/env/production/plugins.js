module.exports = ({ env }) => ({
  upload: {
    provider: 'dropbox',
    providerOptions: {
      accessToken: env('MY_TOKEN'),
    },
  },
});
