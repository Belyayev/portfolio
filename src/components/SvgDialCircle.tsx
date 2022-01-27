import { useEffect, useState } from "react";

interface ISvg {
  x?: number;
  y?: number;
  text?: string;
  color?: string;
  value?: number;
  delay?: number;
}

function SVGDialCircle(props: ISvg) {
  const [hover, setHover] = useState(false);
  const [value, setValue] = useState(0);
  const [show, setShow] = useState(false);

  let percentage = 0;
  if (props.value) {
    percentage = props.value;
  }

  let delay = 0;
  if (props.delay) {
    delay = props.delay;
  }

  useEffect(() => {
    let timer = setTimeout(() => setShow(true), delay);
    return () => {
      clearTimeout(timer);
    };
  }, [delay]);

  useEffect(() => {
    let counter = 0;
    let timer = setInterval(function () {
      counter += 1;
      setValue(counter);
      if (counter >= percentage) {
        clearInterval(timer);
      }
    }, 15);
    return () => {
      clearInterval(timer);
    };
  }, [percentage, show]);

  let color = "lime";
  if (props.color) {
    color = props.color;
  }

  let txtStyle;
  let txtColor;
  if (hover) {
    txtStyle = {
      transition: "1s ease",
      stroke: "lime",
    };
    txtColor = "lime";
  } else {
    txtStyle = {
      transition: "1s ease",
      stroke: color,
    };
    txtColor = color;
  }

  let y = 105;
  if (props.y) y = props.y;
  let text = props.text;

  let txtWidth = 10;
  if (props.text) txtWidth = props.text.length * 5.5 + 5;
  if (txtWidth > 80) txtWidth = 80;

  const dashArray = 30 * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * value) / 100;

  return show ? (
    <div
      className="skill-card"
      style={{
        margin: "1rem",
        transition: "all 1s",
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
            fill={color}
            stroke={color}
            fillOpacity="0.1"
            points={
              "1,0 32,0 40,5 88,5 91,1 97,1 97,88 83,102 " +
              txtWidth +
              ",102 " +
              txtWidth +
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
          fill={txtColor}
          fontFamily="Share Tech Mono"
          fontSize="10"
        >
          {text}
        </text>
        <circle
          cx="50"
          cy="52"
          r="30"
          stroke={color}
          opacity="0.1"
          fill="none"
          strokeWidth="9"
          strokeDasharray="2"
        />
        <circle
          cx="50"
          cy="52"
          r="30"
          style={txtStyle}
          fill="none"
          strokeWidth="9"
          strokeDasharray="2"
          mask={"url(#" + text + value + ")"}
        />
        <mask id={text + value.toString()}>
          <circle
            cx="50"
            cy="52"
            r="30"
            transform="rotate(-90 50 52)"
            stroke="white"
            fill="none"
            strokeWidth="15"
            strokeDasharray={dashArray}
            strokeDashoffset={dashOffset}
          />
        </mask>
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
      </svg>
    </div>
  ) : null;
}

SVGDialCircle.defaultProps = {
  text: "JavaScript",
};

export default SVGDialCircle;
