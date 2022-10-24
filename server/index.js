const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());


//create a user
app.post("/users", async (req, res) => {
  try {
    const { firstName, email, password } = req.body;
    const newUser = await pool.query(
      "INSERT INTO users (firstName, email, password) VALUES($1, $2, $3) RETURNING *",
      [firstName, email, password]
    );

    res.json(nenwUsers.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get all videos
app.get("/videos", async (req, res) => {
  try {
    const allVideos = await pool.query("SELECT * FROM videos");
    res.json(allVideos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get a video
app.get("/videos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const video = await pool.query("SELECT * FROM videos WHERE video_id = $1", [
      id
    ]);

    res.json(video.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//delete a video
app.delete("/videos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteVideo = await pool.query("DELETE FROM videos WHERE video_id = $1", [
      id
    ]);
    res.json("Video was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(4000, () => {
  console.log("server has started on port 4000");
});
