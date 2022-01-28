import { useState } from "react";

interface ISvg {
  x?: number;
  y?: number;
  text?: string;
  color?: string;
  value?: number;
  delay?: number;
}

function SVGContacts(props: ISvg) {
  const [hover, setHover] = useState(false);

  let color = "lime";
  if (props.color) {
    color = props.color;
  }

  let txtColor;
  if (hover) {
    txtColor = "lime";
  } else {
    txtColor = color;
  }

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        version="1.1"
        viewBox="0 0 484 134"
      >
        <g stroke={color} fill="none">
          <polyline
            id="top-outline"
            points="124,28 140,13 177,13 193,21 231,21 235,15 404,15 415,29 484,29 "
          />

          <path
            id="two-stripes"
            fill={color}
            opacity={0.8}
            d="M128 100l278 0 -7 7 -276 0c2,-2 4,-5 5,-7zm-2 -68l349 0 -7 7 -338 0c-1,-3 -2,-5 -4,-7z"
          />

          <polygon fill={color} points="110,12 137,12 123,25 " />
          <path
            id="main-field"
            fill={color}
            opacity={0.2}
            d="M131 40l334 0 -55 55 -280 0c4,-8 7,-18 7,-28 0,-10 -2,-19 -6,-27z"
          />
          <polyline
            id="bottom-outline"
            points="122,111 111,122 165,122 168,116 399,116 415,100 "
          />

          <path
            id="largest circle"
            d="M67 0c37,0 67,30 67,67 0,37 -30,67 -67,67 -37,0 -67,-30 -67,-67 0,-37 30,-67 67,-67z"
          />
          <path
            id="fourth-circle"
            d="M67 9c32,0 58,26 58,58 0,32 -26,58 -58,58 -32,0 -58,-26 -58,-58 0,-32 26,-58 58,-58z"
          />
          <path
            id="third-circle"
            d="M67 9c32,0 58,26 58,58 0,32 -26,58 -58,58 -32,0 -58,-26 -58,-58 0,-32 26,-58 58,-58z"
          />
          <path
            id="second-circle"
            d="M67 19c26,0 48,22 48,48 0,26 -22,48 -48,48 -26,0 -48,-22 -48,-48 0,-26 22,-48 48,-48z"
          />
          <path
            id="smallest-circle"
            d="M67 26c23,0 41,18 41,41 0,23 -18,41 -41,41 -23,0 -41,-18 -41,-41 0,-23 18,-41 41,-41z"
          />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Belyayev"
          >
            <text
              x="140"
              y="65"
              fill={txtColor}
              stroke={txtColor}
              fontFamily="Share Tech Mono"
              fontSize="20"
              cursor="pointer"
            >
              github.com/Belyayev
            </text>
          </a>
        </g>
      </svg>
    </div>
  );
}

SVGContacts.defaultProps = {
  text: "JavaScript",
};

export default SVGContacts;
