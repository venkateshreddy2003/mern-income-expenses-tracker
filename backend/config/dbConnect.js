const mongoose = require("mongoose");

// connect

const dbConnect = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(
      `mongodb+srv://venkatesh:S6fK26rWKLCoqVwX@tracker.utyegrq.mongodb.net/?retryWrites=true&w=majority`,
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
    console.log("Db connected successfully");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = dbConnect;
