import { useState } from "react";

interface ISvg {
  x?: number;
  y?: number;
  text?: string;
  color?: string;
}

function SVGDialCircle(props: ISvg) {
  const [hover, setHover] = useState(false);

  let color = "lime";
  if (props.color) {
    color = props.color;
  }

  let cardStyle;
  if (hover) {
    cardStyle = {
      transition: "1s ease",
      fill: "black",
      fillOpacity: "0.1",
      stroke: color,
    };
  } else {
    cardStyle = {
      transition: "1s ease",
      fill: color,
      fillOpacity: "0.2",
      stroke: color,
    };
  }

  let y = 105;
  if (props.y) y = props.y;
  let text = props.text;

  let x1 = 10;
  if (props.text) x1 = props.text.length * 5 + 10;
  if (x1 > 80) x1 = 80;

  return (
    <div
      style={{
        margin: "1rem",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97 110" width="100%">
        <g stroke="none" fill={color}>
          <polygon
            style={cardStyle}
            points={
              "1,0 32,0 40,5 88,5 91,1 97,1 97,88 83,102 " +
              x1 +
              ",102 " +
              x1 +
              ",94 1,94 1,81 3,76 3,41 1,37 "
            }
          />
          <polygon points="98,90 98,101 87,101 " />
          <polygon points="0,37 2,41 2,76 0,80 " />
          <polygon points="40,4 46,4 46,1 36,1 " />
          <polygon points="48,4 57,4 57,1 48,1 " />
          <polygon points="59,4 65,4 65,1 59,1 " />
          <polygon points="67,4 70,4 70,1 67,1 " />
          <polygon points="72,4 82,4 82,1 72,1 " />
          <polygon points="87,4 84,4 84,1 89,1 " />
        </g>
        <text
          x="0"
          y={y}
          fill={color}
          fontFamily="Share Tech Mono"
          fontSize={10}
        >
          {text}
        </text>
      </svg>
    </div>
  );
}

SVGDialCircle.defaultProps = {
  text: "JavaScript",
};

export default SVGDialCircle;
