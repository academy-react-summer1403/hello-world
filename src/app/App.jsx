import RouterConfig from "../config/router";
import "./App.css";
import { Fragment } from "react";
import {Contactus} from "@components/chatBox/index"

function App() {
  return (
    <>
      <Fragment>
        <div className="ProjectFont dark:bg-[#1a1a2e]">
          <RouterConfig />
          <Contactus/>
        </div>
      </Fragment>
    </>
  );
}

export default App;
// import { useRef } from "react";
// import { motion, useInView } from "framer-motion";

// const Panel = () => {
  // const ref = useRef(null);
  // const isInView = useInView(ref, { threshold: 0.1 });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 50 }}
//       animate={isInView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.5, ease: "easeOut" }}
//       className="p-4 bg-white shadow-md rounded-lg"
//     >
//       <h2 className="text-xl font-bold">Your Panel Content</h2>
//       <p>This panel will animate into view as you scroll down.</p>
//     </motion.div>
//   );
// };

// export default Panel;
