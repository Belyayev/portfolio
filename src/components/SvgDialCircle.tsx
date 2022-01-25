import { useState } from "react";

interface ISvg {
  x?: number;
  y?: number;
  text?: string;
  color?: string;
  value?: number;
}

function SVGDialCircle(props: ISvg) {
  const [hover, setHover] = useState(false);

  let color = "lime";
  if (props.color) {
    color = props.color;
  }
  let value = 0;
  if (props.value) {
    value = props.value;
  }

  let cardStyle;
  if (hover) {
    cardStyle = {
      transition: "1s ease",
      fill: color,
      fillOpacity: "0.4",
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
  if (props.text) x1 = props.text.length * 5 + 8;
  if (x1 > 80) x1 = 80;

  // let cirX = 77 + Math.cos(1.5) * 30;
  // let cirY = 82 + Math.sin(1.5) * 30;

  return (
    <div
      style={{
        margin: "1rem",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97 110" width="100%">
        <mask id="myMask">
          <rect x="0" y="0" width="50" height="50" fill="white" />
        </mask>
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
          fontSize="10"
        >
          {text}
        </text>
        <circle
          cx="50"
          cy="52"
          r="30"
          stroke="black"
          fill="none"
          strokeWidth="9"
          strokeDasharray="2"
        />
        <text
          x="50%"
          y="58"
          textAnchor="middle"
          fill={color}
          fontFamily="Share Tech Mono"
          fontSize="20"
        >
          {value + "%"}
        </text>
        {/* <path
          d={" M 50 22 A 25 25 0 0 1 " + cirX + " " + cirY}
          stroke={color}
          fill="none"
          strokeWidth="9"
          strokeDasharray="2"
        /> */}
        <circle
          cx="50"
          cy="52"
          r="30"
          stroke={color}
          fill="none"
          strokeWidth="9"
          strokeDasharray="2"
          mask="url(#myMask)"
        />
      </svg>
    </div>
  );
}

SVGDialCircle.defaultProps = {
  text: "JavaScript",
};

export default SVGDialCircle;
