const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
  } catch (e) {
    console.log(e);
  }
}

module.exports = connect;