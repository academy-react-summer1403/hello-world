import RouterConfig from "../config/router";
import "./App.css";
import { Fragment } from "react";

function App() {
  return (
    <>
      <Fragment>
        <div className="ProjectFont dark:bg-[#1a1a2e]">
          <RouterConfig />
        </div>
      </Fragment>
    </>
  );
}

export default App;
