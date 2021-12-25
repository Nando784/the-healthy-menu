import React from 'react'
import RepeatBackground from "../images/RepeatBackground.png";

function Background() {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          backgroundImage: `url(${RepeatBackground})`,
          backgroundRepeat: 'repeat-y'
        }}
      />
    </>
  );
}

export default Background
