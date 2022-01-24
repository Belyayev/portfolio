/*
Sci-Fi styled react component button
made using SVG with animations on hover and click
it takes optional parameters for size, color and text
all functionality is packed into single component file
--------------------------------------------
import SvgButton from "./SvgButton";
<SvgButton text="home" color="red" x={100} y={30} />
--------------------------------------------
https://github.com/Belyayev/svg-payground
*/

import { useState } from "react";
interface ISvg {
  x?: number;
  y?: number;
  text?: string;
  color?: string;
}

function SVGDialCircle(props: ISvg) {
  let color = "lime";
  if (props.color) {
    color = props.color;
  }

  let x = 150;
  if (props.x) x = props.x;
  let y = 40;
  if (props.y) y = props.y;
  let text = props.text;

  return (
    <div
      style={{
        margin: "1rem",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 503 533"
        width="100%"
      >
        <g stroke={color} fill={color}>
          <polygon
            fill="none"
            points="5,1 165,1 205,32 438,32 465,14 500,14 500,454 430,524 183,524 175,511 5,511 5,415 15,392 15,211 5,187 "
          />
          <polygon points="502,470 502,519 451,519 " />
          <polygon points="1,195 9,211 9,392 1,408 " />
          <polygon points="6,518 24,518 24,532 6,532 " />
          <polygon points="32,518 65,518 65,532 32,532 " />
          <polygon points="73,518 92,518 92,532 73,532 " />
          <polygon points="99,518 108,518 108,532 99,532 " />
          <polygon points="117,518 152,518 152,532 117,532 " />
          <polygon points="170,518 160,518 160,532 178,532 " />
        </g>
      </svg>
    </div>
  );
}

SVGDialCircle.defaultProps = {
  text: "button",
};

export default SVGDialCircle;
