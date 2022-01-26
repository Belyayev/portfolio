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

  // let cirX = 50 + Math.cos((90 * Math.PI) / 180) * 31;
  // let cirY = 20 + Math.sin((90 * Math.PI) / 180) * 31;

  const cos = Math.cos;
  const sin = Math.sin;
  const π = Math.PI;

  const f_matrix_times = ([[a, b], [c, d]]: number[][], [x, y]: number[]) => [
    a * x + b * y,
    c * x + d * y,
  ];
  const f_rotate_matrix = (x: number) => [
    [cos(x), -sin(x)],
    [sin(x), cos(x)],
  ];
  const f_vec_add = ([a1, a2]: number[], [b1, b2]: number[]) => [
    a1 + b1,
    a2 + b2,
  ];

  const f_svg_ellipse_arc = (
    [cx, cy]: number[],
    [rx, ry]: number[],
    [t1, Δ]: number[],
    φ: number
  ) => {
    /* [
returns a SVG path element that represent a ellipse.
cx,cy → center of ellipse
rx,ry → major minor radius
t1 → start angle, in radian.
Δ → angle to sweep, in radian. positive.
φ → rotation on the whole, in radian
URL: SVG Circle Arc http://xahlee.info/js/svg_circle_arc.html
Version 2019-06-19
 ] */
    Δ = Δ % (2 * π);
    const rotMatrix = f_rotate_matrix(φ);
    const [sX, sY] = f_vec_add(
      f_matrix_times(rotMatrix, [rx * cos(t1), ry * sin(t1)]),
      [cx, cy]
    );
    const [eX, eY] = f_vec_add(
      f_matrix_times(rotMatrix, [rx * cos(t1 + Δ), ry * sin(t1 + Δ)]),
      [cx, cy]
    );
    const fA = Δ > π ? 1 : 0;
    const fS = Δ > 0 ? 1 : 0;
    const path_2wk2r = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    path_2wk2r.setAttribute(
      "d",
      "M " +
        sX +
        " " +
        sY +
        " A " +
        [rx, ry, (φ / (2 * π)) * 360, fA, fS, eX, eY].join(" ")
    );
    return path_2wk2r;
  };

  let path = f_svg_ellipse_arc([50, 50], [31, 31], [3, 4.7], 0);
  console.log(path);

  const dashArray = 30 * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * value) / 100;

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
        <circle
          cx="50"
          cy="52"
          r="30"
          transform="rotate(-90 50 52)"
          stroke={color}
          opacity={0.5}
          fill="none"
          strokeWidth="15"
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
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
        <g stroke={color} fill="none" strokeWidth="15" opacity="0.5">
          {/* <path d="M 19.310232605386194 54.37472024985588 A 31 31 0 1 1 54.754589723173794 80.633215250187"></path> */}
        </g>
        {/* <path
          d={" M 50 22 A 25 25 0 0 1 " + cirX + " " + cirY}
          stroke={color}
          fill="none"
          strokeWidth="9"
          strokeDasharray="2"
        /> */}
        {/* <path
          d={"M 50 21 A 31 31 0 0 1" + cirX + " " + cirY}
          fill="none"
          opacity={0.5}
          stroke={color}
          strokeWidth="15"
        /> */}
      </svg>
    </div>
  );
}

SVGDialCircle.defaultProps = {
  text: "JavaScript",
};

export default SVGDialCircle;
