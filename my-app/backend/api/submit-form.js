// api/submit-form.js
const mongoose = require("mongoose");
const dbURI =
  "mongodb+srv://simonhallak3:B9fQRohJNgeISs3I@soundforsleep.f573e6z.mongodb.net/?retryWrites=true&w=majority&appName=soundforsleep";

// Connect to MongoDB (Consider moving connection logic outside to avoid multiple connections)
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
  name: String,
  mood: String,
});
const User = mongoose.model("User", userSchema);

module.exports = async (req, res) => {
  if (req.method === "POST") {
    const { name, mood } = req.body;
    const newUser = new User({ name, mood });
    try {
      await newUser.save();
      res.status(201).send("User added");
    } catch (error) {
      res.status(500).send("Error saving user: " + error.message);
    }
  } else {
    res.status(405).send("Method Not Allowed");
  }
};
