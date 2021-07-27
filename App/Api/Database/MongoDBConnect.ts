import mongoose from "mongoose";
import getConfig from "next/config";

const { serverRuntimeConfig } = getConfig();

async function MongoDBConnect(ifConnected: () => void) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(serverRuntimeConfig.mongoDBUrl, {
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useNewUrlParser: true,
    });
  }
  return ifConnected();
}

export default MongoDBConnect;
