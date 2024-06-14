import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "Mobile App Developer",
          "Desktop App Developer",
          "Open Source Contributor",
          "Full Stack Developer",
          "Blockchain Developer",
          "DevOps Engineer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
