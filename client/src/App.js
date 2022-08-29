import { Fragment } from "react";
import ListVideos from "./components/ListVideos";

import "./App.css";

function App() {
  return (
    <Fragment>
      <div className="import-videos">
        <ListVideos />
      </div>
    </Fragment>
  );
}

export default App;
