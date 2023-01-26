const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected Database ...");
  })
  .catch((err) => {
    console.log("Connection not working! Error: ", err);
  });
