import { Fragment, useState, useEffect } from "react";

import EditVideo from "./EditVideo";

function ListVideos() {
  const [videos, setVideos] = useState([]);
  const getVideos = async (e) => {
    try {
      const res = await fetch("http://localhost:4000/videos");
      const data = await res.json();
      setVideos(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteVideo = async (id) => {
    try {
      const res = await fetch(`http://localhost:4000/videos/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      setVideos(videos.filter(video => video.video_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getVideos();
  });
  return (
    <Fragment>
    </Fragment>
  );
}

export default ListVideos;
