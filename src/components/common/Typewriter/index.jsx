/* eslint-disable react/prop-types */
import TypewriterEffect from "typewriter-effect";

const Typewriter = ({ options, component, onInit }) => {
  return (
    <TypewriterEffect
      options={options}
      component={component}
      onInit={onInit}
      // style={{
      //   direction: "rtl",
      //   textAlign: "left",
      //   unicodeBidi: "plaintext",
      // }}
    />
  );
};

export { Typewriter };
