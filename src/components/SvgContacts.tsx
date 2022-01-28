import { useEffect, useState } from "react";

interface ISvg {
  x?: number;
  y?: number;
  text?: string;
  color?: string;
  value?: number;
  delay?: number;
  type?: string;
}

function SVGContacts(props: ISvg) {
  const [hover, setHover] = useState(false);
  const [rotation, setRotation] = useState(0);

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

  let type = "";
  if (props.type) {
    type = props.type;
  }

  useEffect(() => {
    let timer = setInterval(function () {
      if (hover) {
        setRotation(rotation + 1);
      }
    }, 30);
    return () => {
      clearInterval(timer);
    };
  }, [rotation, hover]);

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
          <circle
            transform={"rotate(" + rotation / 8 + ",67,67)"}
            cx="67"
            cy="67"
            r="65"
            stroke={color}
            fill="none"
            strokeWidth="1"
            strokeDasharray="2"
          />
          <circle
            transform={"rotate(-" + rotation / 5 + ",67,67)"}
            cx="67"
            cy="67"
            r="58"
            stroke={color}
            fill="none"
            strokeWidth="1"
            strokeDasharray="10"
          />
          <circle
            transform={"rotate(" + rotation + ",67,67)"}
            cx="67"
            cy="67"
            r="45"
            stroke={color}
            fill="none"
            strokeWidth="5"
            strokeDasharray="40 30"
          />
          <circle
            cx="67"
            cy="67"
            r={hover ? "40" : "42"}
            stroke={color}
            fill="none"
            strokeWidth="1"
          />
          {type === "github" && (
            <>
              <svg
                x="36"
                y="35"
                xmlns="http://www.w3.org/2000/svg"
                height="500"
                width="500"
                viewBox="0 0 256 256"
              >
                <g>
                  <path
                    fill={txtColor}
                    stroke={txtColor}
                    d="M15.999001,0C24.835999,-1.6984995E-07 32,7.1628973 32,16.000827 32,23.066802 27.419998,29.059728 21.067001,31.179702 20.255001,31.335708 19.966999,30.837726 19.966999,30.410728 19.966999,29.885709 19.987,28.159711 19.987,26.020753 19.987,24.528764 19.476002,23.55276 18.901001,23.058807 22.465,22.661777 26.206001,21.309798 26.206001,15.162823 26.206001,13.416867 25.585999,11.987865 24.562,10.868918 24.726002,10.464869 25.275002,8.8379299 24.402,6.6349479 24.402,6.6349479 23.061001,6.2059356 20.006001,8.2748863 18.728001,7.9209468 17.359001,7.7439462 16.000999,7.7369272 14.640999,7.7439462 13.271999,7.9209468 11.994999,8.2748863 8.9379997,6.2059356 7.5950012,6.6349479 7.5950012,6.6349479 6.7249985,8.8379299 7.2739983,10.464869 7.4379997,10.868918 6.4160004,11.987865 5.7919998,13.416867 5.7919998,15.162823 5.7919998,21.293809 9.5270004,22.666782 13.080002,23.069793 12.623001,23.47079 12.209,24.175739 12.063999,25.208749 11.152,25.618779 8.8349991,26.324767 7.4080009,23.880759 7.4080009,23.880759 6.5620003,22.344762 4.9570007,22.230811 4.9570007,22.230811 3.394001,22.211768 4.8470001,23.203763 4.8470001,23.203763 5.8950005,23.695764 6.6230011,25.544746 6.6230011,25.544746 7.5620003,28.65574 12.013,27.68773 12.02,29.023717 12.035,30.030727 12.035,30.410728 12.035,30.833697 11.743,31.327712 10.943001,31.181716 4.5839996,29.064733 0,23.067779 0,16.000827 0,7.1628973 7.1640015,-1.6984995E-07 15.999001,0z"
                  />
                </g>
              </svg>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Belyayev"
              >
                <text
                  x="140"
                  y="85"
                  fill={txtColor}
                  stroke={txtColor}
                  fontFamily="Share Tech Mono"
                  fontSize="30"
                  cursor="pointer"
                >
                  GitHub
                </text>
                <text
                  x="140"
                  y="55"
                  fill={txtColor}
                  stroke="none"
                  fontFamily="Share Tech Mono"
                  fontSize="11"
                  cursor="pointer"
                >
                  https://github.com/Belyayev
                </text>
              </a>
            </>
          )}
          {type === "linkedin" && (
            <>
              <svg
                x="45"
                y="40"
                xmlns="http://www.w3.org/2000/svg"
                height="350"
                width="350"
                viewBox="0 0 256 256"
              >
                <g>
                  <path
                    fill={txtColor}
                    stroke={txtColor}
                    d="M0.40802002,9.946991L7.2670288,9.946991 7.2670288,30.585999 0.40802002,30.585999z M24.106018,9.4620056C28.615051,9.4620056,32,12.412994,32,18.748993L32,30.584991 25.143005,30.584991 25.143005,19.54599C25.143005,16.768005 24.147034,14.878998 21.665039,14.878998 19.770996,14.878998 18.643005,16.156006 18.147034,17.385986 17.96405,17.825012 17.923035,18.442993 17.923035,19.061005L17.923035,30.584991 11.059998,30.584991C11.059998,30.584991,11.152039,11.881989,11.059998,9.946991L17.923035,9.946991 17.923035,12.872986C17.907043,12.893005,17.892029,12.919006,17.877014,12.938995L17.923035,12.938995 17.923035,12.872986C18.832031,11.463989,20.460022,9.4620056,24.106018,9.4620056z M3.8810425,0C6.2300415,0 7.6750488,1.5429993 7.7160034,3.5650024 7.7160034,5.5469971 6.2300415,7.131012 3.8400269,7.131012L3.7940063,7.131012C1.4910278,7.131012 0,5.5469971 0,3.5650024 0,1.5429993 1.5370483,0 3.8810425,0z"
                  />
                </g>
              </svg>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/mike-belyayev-79941318/"
              >
                <text
                  x="140"
                  y="85"
                  fill={txtColor}
                  stroke={txtColor}
                  fontFamily="Share Tech Mono"
                  fontSize="30"
                  cursor="pointer"
                >
                  LinkedIn
                </text>
                <text
                  x="140"
                  y="55"
                  fill={txtColor}
                  stroke="none"
                  fontFamily="Share Tech Mono"
                  fontSize="11"
                  cursor="pointer"
                >
                  https://www.linkedin.com/in/mike-belyayev-79941318/
                </text>
              </a>
            </>
          )}
          {type === "email" && (
            <>
              <svg
                x="45"
                y="53"
                xmlns="http://www.w3.org/2000/svg"
                height="350"
                width="350"
                viewBox="0 0 256 256"
              >
                <g>
                  <path
                    fill={txtColor}
                    stroke={txtColor}
                    d="M13.536011,10.258006L4.9530029,15.900001 4.9530029,19.538 27.415039,19.538 27.415039,15.69799 18.407043,10.430995 16.08905,12.047998 16.079041,12.042993z M4.9730225,4.2369974L4.9530029,15.254997 13.041016,9.9119976z M27.415039,4.1139963L18.877014,10.085002 27.415039,15.017998z M6.3060303,0.17300416L13.598022,6.1740082 15.972046,8.1229971 16.447021,7.7519949 25.975037,0.20700074z M0,0L6.092041,0 26.230042,0 32,0 32,19.745001 0,19.745001z"
                  />
                </g>
              </svg>
              <a
                target="_blank"
                rel="noreferrer"
                href="mailto: 4xgood@gmail.com"
              >
                <text
                  x="140"
                  y="85"
                  fill={txtColor}
                  stroke={txtColor}
                  fontFamily="Share Tech Mono"
                  fontSize="30"
                  cursor="pointer"
                >
                  4xgood@gmail.com
                </text>
                <text
                  x="140"
                  y="55"
                  fill={txtColor}
                  stroke="none"
                  fontFamily="Share Tech Mono"
                  fontSize="15"
                  cursor="pointer"
                >
                  for questions and feedback
                </text>
              </a>
            </>
          )}
        </g>
      </svg>
    </div>
  );
}

SVGContacts.defaultProps = {
  text: "JavaScript",
};

export default SVGContacts;
