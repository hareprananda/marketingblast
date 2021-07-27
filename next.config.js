module.exports = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    mongoDBUrl: `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.3yyvf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  },
};
