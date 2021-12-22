import React from 'react'
import RepeatBackground from "../images/RepeatBackground.png";

function Background() {
  return (
    <>
      <img
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex:-1
        }}
        src={RepeatBackground}
        alt="Background"
      />
    </>
  );
}

export default Background
