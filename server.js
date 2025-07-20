const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
require("dotenv").config();

const userRoutes = require("./routes/userroute");
const claimRoutes = require("./routes/claimroute");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/api/users", userRoutes(io));
app.use("/api/claims", claimRoutes(io));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    server.listen(5000, () => console.log("Server running on port 5000"));
  })
  .catch((err) => console.log(err));

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);
});
