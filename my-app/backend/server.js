const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3001;

// Middleware to parse JSON bodies
app.use(express.json());

const dbURI =
  "mongodb+srv://simonhallak3:B9fQRohJNgeISs3I@soundforsleep.f573e6z.mongodb.net/?retryWrites=true&w=majority&appName=soundforsleep";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB database");
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

// Import and use your form submission route
const formSubmitRouter = require("./api/submit-form"); // Adjust the path as necessary
app.use(formSubmitRouter);

app.get("/", (req, res) => {
  res.json({ message: "API is working" });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
