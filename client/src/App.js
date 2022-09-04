import { Fragment } from "react";
import ListVideos from "./components/ListVideos";
import FilterBar from "./components/FilterBar/FilterBar";

import "./App.css";

function App() {
  return (
    <Fragment>
      <div className="import-videos">
        {/* <FilterBar /> */}
        <ListVideos />
      </div>
    </Fragment>
  );
}

export default App;
