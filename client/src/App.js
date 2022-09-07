import { Fragment } from "react";
import ListVideos from "./components/ListVideos";
import FilterBar from "./components/FilterBar/FilterBar";
import VideoCard from "./components/VideoCard";

import "./App.css";

function App() {
  return (
    <Fragment>
      <div className="import-videos">
        <FilterBar />
        <VideoCard />
        <ListVideos />
      </div>
    </Fragment>
  );
}

export default App;
