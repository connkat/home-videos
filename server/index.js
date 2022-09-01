const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());


//create a video
app.post("/videos", async (req, res) => {
  try {
    const { year, month, day, person, videolink, description, others, holiday } = req.body;
    const newVideo = await pool.query(
      "INSERT INTO video (year) VALUES($1) RETURNING *",
      [year]
    );

    res.json(newVideo.rows[0]);
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

//update a video
app.put("/videos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateVideo = await pool.query(
      "UPDATE video SET description = $1 WHERE video_id = $2",
      [description, id]
    );

    res.json("Video was updated!");
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
