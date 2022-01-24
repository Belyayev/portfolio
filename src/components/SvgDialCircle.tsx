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
  let y = 105;
  if (props.y) y = props.y;
  let text = props.text;

  return (
    <div
      style={{
        margin: "1rem",
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97 110" width="100%">
        <g stroke="none" fill={color}>
          <polygon
            fillOpacity={0.15}
            stroke={color}
            points="1,0 32,0 40,5 88,5 91,1 97,1 97,88 84,102 62,102 60,94 1,94 1,81 3,76 3,41 1,37 "
          />
          <polygon points="98,90 98,101 87,101 " />
          <polygon points="0,38 2,41 2,76 0,79 " />
          <polygon points="40,4 46,4 46,1 36,1 " />
          <polygon points="48,4 57,4 57,1 48,1 " />
          <polygon points="59,4 65,4 65,1 59,1 " />
          <polygon points="67,4 69,4 69,1 67,1 " />
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
