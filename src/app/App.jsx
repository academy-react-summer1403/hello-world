import RouterConfig from "../config/router";
import "./App.css";
import { Fragment } from "react";
import { Contactus } from "@components/chatBox/index";

function App() {
  return (
    <>
      <Fragment>
        <div className="ProjectFont dark:bg-[#1a1a2e] transition duration-300 ease-in-out">
          <RouterConfig />
          <Contactus />
        </div>
      </Fragment>
    </>
  );
}

export default App;
