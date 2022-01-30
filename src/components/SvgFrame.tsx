import { useEffect } from "react";
import { useState } from "react";

interface ISvg {
  x?: number;
  y?: number;
  text?: string;
  color?: string;
  value?: number;
  type?: string;
}

function SVGFrame(props: ISvg) {
  const [hover, setHover] = useState(false);
  const [angle, setAngle] = useState(0);

  if (hover) {
  }

  let color = "lime";
  if (props.color) {
    color = props.color;
  }

  useEffect(() => {
    let timer = setInterval(function () {
      setAngle(angle + 1);
      // draw();
    }, 40);
    return () => {
      clearInterval(timer);
    };
  }, [angle, draw]);

  // Initialising the canvas
  let canvas = document.createElement("canvas");
  // var canvas = document.querySelector("canvas"),
  let ctx = canvas.getContext("2d");

  // Setting the width and height of the canvas
  canvas.width = 500;
  canvas.height = 500;

  // Setting up the letters
  let letters =
    "ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ";
  letters.split("");

  // Setting up the columns
  var fontSize = 10,
    columns = canvas.width / fontSize;

  // Setting up the drops
  var drops: number[] = [];
  for (var i = 0; i < columns; i++) {
    drops[i] = 1;
  }

  // Setting up the draw function

  function draw() {
    if (ctx != null) {
      ctx.fillStyle = "rgba(0, 0, 0, .1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (var i = 0; i < drops.length; i++) {
        var text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = "#0f0";
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
      }
    }
  }

  // Loop the animation
  // setInterval(draw, 50);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* <canvas>ok</canvas> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        viewBox="0 0 2003 2779"
      >
        <defs>
          <linearGradient
            id="grad1"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
            gradientTransform={"rotate(" + angle + ")"}
          >
            <stop offset="0%" stop-color="#2dd5ff" stop-opacity="1" />
            <stop offset="40%" stop-color="white" stop-opacity="1" />
            <stop offset="60%" stop-color="#3889eb" stop-opacity="1" />
            <stop offset="100%" stop-color="#2dd5ff" stop-opacity="1" />
          </linearGradient>
        </defs>
        <g stroke="url(#grad1)" fill="url(#grad1)">
          <polygon
            fill={color}
            fillOpacity={0.2}
            strokeWidth="20px"
            points="372,103 689,103 819,216 1211,216 1321,128 1796,128 1900,218 1900,1237 1784,1316 1784,1960 1900,2058 1900,2454 1631,2676 1203,2676 1051,2540 731,2540 620,2643 307,2643 166,2530 166,1982 277,1886 277,1345 191,1257 191,251 "
          />
          <g>
            <path d="M1905 1827l0 1 0 2 0 2 0 2 -1 2 0 1 -1 2 0 2 -1 1 -1 2 -1 1 -1 2 -1 1 -1 1 -1 2 -1 1 -1 1 -2 1 -1 1 -2 1 -1 1 -2 1 -1 1 -2 1 -1 0 -2 1 -2 0 -1 1 -2 0 -2 0 -2 1 -2 0 0 0 -2 0 -1 -1 -2 0 -2 0 -2 -1 -1 0 -2 -1 -2 0 -1 -1 -2 -1 -1 -1 -2 -1 -1 -1 -2 -1 -1 -1 -1 -1 -1 -1 -2 -2 -1 -1 -1 -1 -1 -2 0 -1 -1 -2 -1 -1 -1 -2 0 -2 -1 -1 0 -2 0 -2 -1 -2 0 -2 0 -1 0 0 0 -2 0 -2 1 -2 0 -2 0 -1 1 -2 0 -2 1 -1 1 -2 1 -2 0 -1 1 -2 1 -1 1 -1 2 -2 1 -1 1 -1 1 -1 2 -1 1 -1 2 -1 1 -1 2 -1 1 -1 2 0 2 -1 1 0 2 -1 2 0 2 0 1 0 2 -1 0 0 2 1 2 0 2 0 2 0 1 1 2 0 2 1 1 0 2 1 1 1 2 1 1 1 2 1 1 1 2 1 1 1 1 1 1 2 1 1 1 1 1 2 1 1 1 2 1 2 0 1 1 2 0 2 1 1 0 2 0 2 0 2 0 2 0 0zm-45 129l0 -129 18 0 0 129 -15 7 -3 -7zm3 7l-3 -3 0 -4 3 7zm85 79l-85 -79 12 -13 85 79 3 6 -15 7zm12 -13l3 3 0 3 -3 -6zm-15 491l0 -485 18 0 0 485 -18 0zm45 0l0 0 0 2 0 2 -1 2 0 1 0 2 -1 2 0 2 -1 1 -1 2 -1 1 0 2 -1 1 -1 2 -1 1 -2 1 -1 2 -1 1 -1 1 -2 1 -1 1 -2 1 -1 1 -2 1 -1 0 -2 1 -2 1 -1 0 -2 1 -2 0 -2 0 -1 0 -2 0 0 0 -2 0 -2 0 -2 0 -1 0 -2 -1 -2 0 -2 -1 -1 -1 -2 0 -1 -1 -2 -1 -1 -1 -2 -1 -1 -1 -1 -1 -2 -1 -1 -2 -1 -1 -1 -1 -1 -2 -1 -1 -1 -2 -1 -1 0 -2 -1 -1 -1 -2 0 -2 -1 -2 0 -1 0 -2 0 -2 0 -2 0 0 0 -2 0 -1 0 -2 0 -2 1 -2 0 -1 1 -2 1 -2 0 -1 1 -2 1 -1 1 -2 1 -1 1 -2 1 -1 1 -1 2 -1 1 -2 1 -1 2 -1 1 -1 2 0 1 -1 2 -1 1 -1 2 0 2 -1 2 0 1 0 2 -1 2 0 2 0 0 0 2 0 1 0 2 1 2 0 2 0 1 1 2 0 2 1 1 1 2 1 1 0 2 1 1 1 2 1 1 2 1 1 1 1 2 1 1 2 1 1 1 2 0 1 1 2 1 1 1 2 0 2 1 1 0 2 0 2 1 2 0 1 0 2zm-386 259l-2 0 -2 0 -2 -1 -2 0 -1 0 -2 -1 -2 0 -1 -1 -2 -1 -2 -1 -1 0 -1 -1 -2 -1 -1 -1 -2 -2 -1 -1 -1 -1 -1 -1 -1 -2 -1 -1 -1 -2 -1 -1 -1 -2 -1 -1 0 -2 -1 -2 0 -1 -1 -2 0 -2 0 -2 0 -1 0 -2 0 0 0 -2 0 -2 0 -2 0 -1 1 -2 0 -2 1 -2 0 -1 1 -2 1 -1 1 -2 1 -1 1 -2 1 -1 1 -1 1 -2 1 -1 2 -1 1 -1 2 -1 1 -1 1 -1 2 -1 2 0 1 -1 2 -1 2 0 1 -1 2 0 2 0 2 0 2 0 0 0 1 0 2 0 2 0 2 0 2 1 1 0 2 1 2 1 1 0 2 1 1 1 2 1 1 1 2 1 1 1 1 1 1 2 1 1 2 1 1 2 0 1 1 2 1 1 1 2 1 1 0 2 1 2 0 2 0 1 1 2 0 2 0 2 0 0 0 2 0 1 -1 2 0 2 0 2 -1 1 0 2 -1 2 -1 1 -1 2 -1 1 0 2 -1 1 -2 2 -1 1 -1 1 -1 1 -1 2 -2 1 -1 1 -2 1 -1 0 -2 1 -1 1 -2 1 -2 0 -1 1 -2 0 -2 0 -2 1 -2 0 -1 0 0 0zm-430 -45l430 0 0 18 -430 0 -6 -3 6 -15zm0 18l-3 0 -3 -3 6 3zm-155 -160l161 144 -12 13 -161 -144 6 -16 6 3zm-6 -3l4 0 2 3 -6 -3zm-236 0l236 0 0 18 -236 0 0 -18zm0 45l0 0 -2 0 -2 0 -2 0 -1 0 -2 -1 -2 0 -1 -1 -2 0 -2 -1 -1 -1 -2 -1 -1 -1 -2 -1 -1 -1 -1 -1 -2 -1 -1 -1 -1 -2 -1 -1 -1 -2 -1 -1 -1 -2 -1 -1 0 -2 -1 -1 -1 -2 0 -2 0 -1 -1 -2 0 -2 0 -2 0 -2 0 0 0 -2 0 -1 0 -2 1 -2 0 -2 0 -1 1 -2 1 -2 0 -1 1 -2 1 -1 1 -2 1 -1 1 -2 1 -1 1 -1 2 -1 1 -2 1 -1 2 -1 1 -1 2 0 1 -1 2 -1 2 -1 1 0 2 -1 2 0 1 0 2 -1 2 0 2 0 0 0 2 0 2 0 1 1 2 0 2 0 2 1 1 0 2 1 1 1 2 1 2 0 1 1 1 1 2 1 1 2 1 1 2 1 1 1 1 2 1 1 1 2 1 1 0 2 1 1 1 2 0 2 1 1 0 2 1 2 0 2 0 1 0 2 0 0 0 2 0 2 0 2 -1 2 0 1 -1 2 0 2 -1 1 -1 2 0 1 -1 2 -1 1 -1 2 -1 1 -1 2 -2 1 -1 1 -1 1 -2 1 -1 1 -1 1 -2 1 -2 1 -1 1 -2 0 -1 1 -2 0 -2 1 -2 0 -1 0 -2 0 -2 0zm-538 102l-1 -2 -1 -1 -2 -1 -1 -2 -1 -1 -1 -2 -1 -1 -1 -2 0 -1 -1 -2 -1 -1 0 -2 -1 -2 0 -1 0 -2 -1 -2 0 -2 0 -1 0 -2 0 -2 1 -2 0 -1 0 -2 1 -2 0 -1 1 -2 1 -2 0 -1 1 -2 1 -1 1 -2 1 -1 0 0 2 -2 1 -1 1 -1 2 -1 1 -1 2 -1 1 -1 2 -1 1 -1 2 -1 1 0 2 -1 2 0 1 -1 2 0 2 0 2 0 1 0 2 0 2 0 2 0 1 0 2 1 2 0 1 1 2 0 2 1 1 1 2 1 1 1 2 1 1 1 0 0 2 1 1 1 1 2 1 1 1 2 1 1 1 2 1 1 1 2 1 1 0 2 1 2 0 1 1 2 0 2 0 1 0 2 0 2 0 2 0 1 0 2 0 2 -1 1 0 2 -1 2 0 1 -1 2 -1 2 -1 1 -1 2 -1 1 -1 2 0 0 -1 1 -1 1 -2 2 -1 1 -2 1 -1 1 -2 1 -1 1 -2 1 -1 0 -2 1 -2 0 -1 1 -2 0 -2 0 -1 1 -2 0 -2 0 -2 0 -1 0 -2 -1 -2 0 -1 0 -2 -1 -2 0 -1 -1 -2 -1 -2 0 -1 -1 -2 -1 -1 -1 -2 -1 0 0zm-147 -181l176 146 -11 14 -177 -146 -3 -7 15 -7zm-12 14l-3 -3 0 -4 3 7zm15 -331l0 324 -18 0 0 -324 18 0zm-45 0l0 0 0 -2 0 -2 0 -1 1 -2 0 -2 1 -2 0 -1 1 -2 0 -2 1 -1 1 -2 1 -1 1 -2 1 -1 1 -1 2 -1 1 -2 1 -1 1 -1 2 -1 1 -1 2 -1 1 -1 2 0 2 -1 1 0 2 -1 2 0 2 -1 1 0 2 0 2 0 0 0 2 0 2 0 1 0 2 1 2 0 2 1 1 0 2 1 2 0 1 1 2 1 1 1 2 1 1 1 1 1 1 2 2 1 1 1 1 1 1 2 1 1 1 2 1 1 0 2 1 2 0 1 1 2 0 2 1 2 0 1 0 2 0 2 0 0 0 2 0 2 0 1 -1 2 0 2 -1 2 0 1 -1 2 0 2 -1 1 -1 2 -1 1 -1 2 -1 1 -1 1 -2 1 -1 2 -1 1 -1 1 -2 1 -1 1 -2 1 -1 0 -2 1 -2 1 -1 0 -2 1 -2 0 -2 1 -1 0 -2 0 -2 0 0 0 -2 0 -2 0 -1 0 -2 -1 -2 0 -2 -1 -1 0 -2 -1 -2 -1 -1 0 -2 -1 -1 -1 -2 -1 -1 -1 -1 -1 -1 -2 -2 -1 -1 -1 -1 -1 -1 -2 -1 -1 -1 -2 -1 -1 0 -2 -1 -2 0 -1 -1 -2 0 -2 -1 -2 0 -1 0 -2 0 -2zm25 -324l2 -1 1 -1 2 -1 1 -1 2 -1 1 0 2 -1 2 -1 1 0 2 -1 2 0 1 0 2 0 2 0 2 0 1 0 2 0 2 0 2 0 1 1 2 0 2 1 1 1 2 0 1 1 2 1 1 1 2 1 1 1 2 1 1 2 1 1 0 0 1 1 1 2 1 1 1 2 1 2 1 1 1 2 0 1 1 2 0 2 0 2 1 1 0 2 0 2 0 2 0 1 0 2 -1 2 0 1 0 2 -1 2 0 1 -1 2 -1 2 -1 1 0 2 -1 1 -1 2 -2 1 -1 1 -1 2 -1 1 0 0 -2 1 -1 1 -2 1 -1 1 -2 1 -2 1 -1 0 -2 1 -2 0 -1 1 -2 0 -2 0 -1 1 -2 0 -2 0 -2 0 -1 -1 -2 0 -2 0 -1 -1 -2 0 -2 -1 -1 0 -2 -1 -2 -1 -1 -1 -2 -1 -1 -1 -1 -1 -2 -1 -1 -1 -1 -2 0 0 -2 -1 -1 -2 -1 -1 -1 -2 0 -1 -1 -2 -1 -1 0 -2 -1 -2 0 -2 -1 -1 0 -2 0 -2 0 -1 0 -2 0 -2 0 -2 0 -1 1 -2 0 -2 1 -1 0 -2 1 -2 1 -1 0 -2 1 -1 1 -2 1 -1 1 -2 2 -1 1 -1 1 -2 0 0zm148 -68l-118 102 -12 -13 118 -103 15 7 -3 7zm3 -7l0 4 -3 3 3 -7zm0 -458l0 458 -18 0 0 -458 14 -7 4 7zm-4 -7l4 3 0 4 -4 -7zm-90 -68l90 68 -10 15 -91 -69 -4 -7 15 -7zm-11 14l-4 -3 0 -4 4 7zm14 -1075l0 1068 -18 0 0 -1068 18 0zm-45 0l0 0 0 -2 0 -2 1 -1 0 -2 0 -2 1 -2 0 -1 1 -2 1 -2 1 -1 0 -2 1 -1 1 -2 1 -1 2 -1 1 -1 1 -2 1 -1 2 -1 1 -1 2 -1 1 -1 2 0 1 -1 2 -1 2 0 1 -1 2 0 2 -1 2 0 1 0 2 0 0 0 2 0 2 0 2 0 2 1 1 0 2 1 2 0 1 1 2 1 1 0 2 1 1 1 2 1 1 1 1 1 2 2 1 1 1 1 1 1 1 2 1 1 1 2 1 1 0 2 1 2 1 1 0 2 1 2 0 2 0 1 0 2 0 2 0 0 0 2 0 2 0 2 0 1 -1 2 0 2 -1 1 -1 2 0 2 -1 1 -1 2 -1 1 -1 2 -1 1 -1 1 -1 2 -2 1 -1 1 -1 1 -2 1 -1 1 -2 1 -1 1 -2 0 -1 1 -2 0 -2 1 -1 0 -2 1 -2 0 -2 0 -2 0 0 0 -2 0 -1 0 -2 0 -2 -1 -2 0 -1 -1 -2 0 -2 -1 -1 0 -2 -1 -1 -1 -2 -1 -1 -1 -2 -1 -1 -1 -1 -1 -1 -2 -2 -1 -1 -1 -1 -2 -1 -1 0 -2 -1 -1 -1 -2 -1 -2 0 -1 -1 -2 0 -2 0 -1 -1 -2 0 -2 0 -2zm485 -245l2 0 2 0 2 0 2 1 1 0 2 1 2 0 1 1 2 1 2 0 1 1 2 1 1 1 1 1 2 1 1 2 1 1 1 1 1 2 1 1 1 1 1 2 1 1 1 2 0 2 1 1 0 2 1 2 0 2 0 1 0 2 1 2 0 0 -1 2 0 2 0 2 0 1 -1 2 0 2 -1 1 0 2 -1 2 -1 1 -1 2 -1 1 -1 2 -1 1 -1 1 -1 2 -1 1 -2 1 -1 1 -1 1 -2 1 -1 1 -2 1 -2 0 -1 1 -2 1 -2 0 -1 0 -2 1 -2 0 -2 0 -2 0 0 0 -1 0 -2 0 -2 0 -2 -1 -2 0 -1 0 -2 -1 -2 -1 -1 0 -2 -1 -1 -1 -2 -1 -1 -1 -1 -1 -2 -1 -1 -1 -1 -2 -1 -1 -1 -1 -1 -2 -1 -1 -1 -2 -1 -1 -1 -2 0 -2 -1 -1 0 -2 -1 -2 0 -1 0 -2 -1 -2 0 -2 0 0 0 -2 1 -2 0 -1 0 -2 1 -2 0 -2 1 -1 0 -2 1 -2 1 -1 1 -2 1 -1 1 -1 1 -2 1 -1 1 -1 1 -2 2 -1 1 -1 1 -1 2 -1 1 -1 2 0 1 -1 2 -1 2 0 1 -1 2 0 2 -1 2 0 2 0 1 0 0 0zm118 45l-118 0 0 -18 118 0 5 2 -5 16zm0 -18l3 0 2 2 -5 -2zm133 123l-138 -107 10 -14 139 107 -5 16 -6 -2zm6 2l-3 0 -3 -2 6 2zm325 0l-325 0 0 -18 325 0 0 18zm0 -45l0 0 2 0 2 0 2 0 1 0 2 1 2 0 2 1 1 0 2 1 1 1 2 1 1 1 2 1 1 1 1 1 2 1 1 1 1 2 1 1 1 2 1 1 1 2 1 1 0 2 1 1 1 2 0 2 1 1 0 2 0 2 0 2 0 2 0 0 0 2 0 1 0 2 0 2 -1 2 0 1 -1 2 -1 2 0 1 -1 2 -1 1 -1 2 -1 1 -1 2 -1 1 -1 1 -2 1 -1 2 -1 1 -2 1 -1 1 -2 0 -1 1 -2 1 -1 1 -2 0 -2 1 -2 0 -1 0 -2 1 -2 0 -2 0 0 0 -2 0 -1 0 -2 -1 -2 0 -2 0 -1 -1 -2 0 -2 -1 -1 -1 -2 -1 -1 0 -2 -1 -1 -1 -2 -1 -1 -2 -1 -1 -1 -1 -2 -1 -1 -2 -1 -1 -1 -2 0 -1 -1 -2 -1 -1 -1 -2 0 -2 -1 -1 0 -2 0 -2 -1 -2 0 -1 0 -2 0 0 0 -2 0 -2 1 -2 0 -2 0 -1 1 -2 0 -2 1 -1 1 -2 1 -1 0 -2 1 -1 1 -2 1 -1 2 -2 1 -1 1 -1 1 -1 2 -1 1 -1 2 -1 1 -1 2 -1 1 -1 2 0 2 -1 1 0 2 -1 2 0 2 0 1 0 2 0zm375 -93l2 0 2 0 2 0 1 0 2 1 2 0 1 1 2 1 2 0 1 1 2 1 1 1 2 1 1 1 1 1 2 1 1 2 1 1 1 1 1 2 1 1 1 2 1 1 0 2 1 1 1 2 0 2 0 1 1 2 0 2 0 2 0 2 0 0 0 2 0 1 0 2 -1 2 0 2 0 1 -1 2 -1 2 0 1 -1 2 -1 1 -1 2 -1 1 -1 2 -1 1 -1 1 -2 1 -1 2 -1 1 -2 1 -1 1 -2 0 -1 1 -2 1 -2 1 -1 0 -2 1 -2 0 -1 0 -2 1 -2 0 -2 0 0 0 -2 0 -2 0 -1 -1 -2 0 -2 0 -2 -1 -1 0 -2 -1 -2 -1 -1 -1 -2 0 -1 -1 -1 -1 -2 -1 -1 -2 -1 -1 -2 -1 -1 -1 -1 -2 -1 -1 -1 -2 -1 -1 0 -2 -1 -1 -1 -2 0 -2 -1 -1 0 -2 -1 -2 0 -2 0 -1 0 -2 0 0 0 -2 0 -2 0 -2 1 -2 0 -1 1 -2 0 -2 1 -1 1 -2 0 -1 1 -2 1 -1 1 -2 1 -1 1 -1 2 -2 1 -1 1 -1 2 -1 1 -1 1 -1 2 -1 1 -1 2 0 2 -1 1 -1 2 0 2 -1 2 0 1 0 2 0 2 0 0 0zm272 45l-272 0 0 -18 272 0 6 2 -6 16zm0 -18l4 0 2 2 -6 -2zm157 150l-162 -134 11 -14 162 134 4 7 -15 7zm11 -14l4 3 0 4 -4 -7zm-14 346l0 -339 18 0 0 339 -18 0zm45 0l0 0 0 2 0 2 -1 2 0 2 0 1 -1 2 0 2 -1 1 -1 2 -1 2 0 1 -1 2 -1 1 -2 1 -1 2 -1 1 -1 1 -1 1 -2 1 -1 1 -2 1 -1 1 -2 1 -1 1 -2 0 -2 1 -1 0 -2 1 -2 0 -2 0 -1 0 -2 0 0 0 -2 0 -2 0 -2 0 -2 0 -1 -1 -2 0 -2 -1 -1 0 -2 -1 -2 -1 -1 -1 -1 -1 -2 -1 -1 -1 -2 -1 -1 -1 -1 -1 -1 -2 -1 -1 -1 -1 -1 -2 -1 -1 -1 -2 -1 -2 0 -1 -1 -2 0 -2 -1 -1 0 -2 0 -2 0 -2 0 -2 0 0 0 -1 0 -2 0 -2 0 -2 1 -2 0 -1 1 -2 0 -2 1 -1 1 -2 1 -1 1 -2 1 -1 1 -2 1 -1 1 -1 1 -1 2 -1 1 -1 2 -1 1 -1 1 -1 2 -1 2 -1 1 0 2 -1 2 -1 1 0 2 0 2 0 2 -1 2 0 0 0 2 0 1 1 2 0 2 0 2 0 1 1 2 1 2 0 1 1 2 1 1 1 2 1 1 1 2 1 1 1 1 1 1 1 1 1 2 2 1 1 1 2 0 1 1 2 1 1 1 2 0 2 1 1 0 2 0 2 1 2 0 2 0 1z" />
          </g>
          <g>
            <path d="M41 855l91 68 -11 15 -90 -69 -4 -7 14 -7zm-10 14l-4 -3 0 -4 4 7zm14 -418l0 411 -18 0 0 -411 18 0zm-45 0l0 0 0 -2 0 -2 0 -1 1 -2 0 -2 1 -2 0 -1 1 -2 1 -1 0 -2 1 -2 1 -1 1 -1 1 -2 1 -1 2 -1 1 -2 1 -1 2 -1 1 -1 1 -1 2 -1 1 0 2 -1 2 -1 1 0 2 -1 2 0 2 -1 1 0 2 0 2 0 0 0 2 0 2 0 2 0 1 1 2 0 2 1 1 0 2 1 2 1 1 0 2 1 1 1 2 1 1 1 1 1 2 2 1 1 1 1 1 2 1 1 1 1 1 2 1 2 0 1 1 2 1 1 0 2 0 2 1 2 0 1 0 2 0 2 0 0 0 2 0 2 0 2 -1 1 0 2 0 2 -1 2 -1 1 0 2 -1 1 -1 2 -1 1 -1 2 -1 1 -1 1 -1 2 -2 1 -1 1 -1 1 -2 1 -1 1 -2 1 -1 1 -2 0 -2 1 -1 1 -2 0 -2 0 -1 1 -2 0 -2 0 -2 0 0 0 -2 0 -2 0 -1 0 -2 -1 -2 0 -2 0 -1 -1 -2 -1 -2 0 -1 -1 -2 -1 -1 -1 -1 -1 -2 -1 -1 -1 -1 -1 -2 -2 -1 -1 -1 -1 -1 -2 -1 -1 -1 -2 0 -1 -1 -2 -1 -1 0 -2 -1 -2 0 -2 -1 -1 0 -2 0 -2 0 -2z" />
          </g>
        </g>
      </svg>
    </div>
  );
}

SVGFrame.defaultProps = {
  text: "JavaScript",
};

export default SVGFrame;
