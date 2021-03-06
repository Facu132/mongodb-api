const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const songRoute = require("./routes/songRoute");
const userRoute = require("./routes/userRoute");

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexion'));
db.once('open', function() {
  console.log("MongoDB conecting with Express");
});

const server = express();
server.use(cors());
server.use(express.json());

server.route("/songs")
  .get(songRoute.findAllSongs)
  .post(songRoute.addNewSong)

server.route("/users")
  .get(userRoute.findAllUsers)
  .post(userRoute.addNewUser)

server.route("/song/:nameSong")
  .get(songRoute.findSong)
  .put(songRoute.updateSong)
  .delete(songRoute.deleteSong)

server.route("/user/:nameUser")
  .get(userRoute.findUser)
  .put(userRoute.updateUser)
  .delete(userRoute.deleteUser)

server.post("/users/:nameUser/song", userRoute.addSongToLikedSong)
server.delete("/users/:nameUser/:nameSong", userRoute.deleteSongToLikedSong)

server.listen(process.env.PORT);