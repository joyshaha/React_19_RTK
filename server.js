const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const ennvironment = require("dotenv");

const app = express();

// initialize ennvironment
ennvironment.config();

// Connect to Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// express application routes
// app.get("/", (req, res) => {
//   console.log("first");
//   res.send("Hello World");
// });

// Routes
app.use("/", require("./routes/home"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/users"));
app.use("/api/posts", require("./routes/post"));
app.use("/api/videos", require("./routes/videos"));
app.use("/api/transactions", require("./routes/transactions"));
app.use("/api/podcasts", require("./routes/podcast"));

// define default error handler
function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  // console.error(err.stack);
  res.status(500).json({ error: err.message });
}
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
