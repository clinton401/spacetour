import React, { useContext, useState } from "react";
import dcss from "./Destination.module.css";
import { destinationContext } from "../../App";
import { motion } from "framer-motion";

function Destination({ loading }) {
  const [count, setCount] = useState(0);
  const [classes, setClasses] = useState(0);
  const destinations = useContext(destinationContext);


  const clickHandler = (param, param2) => {
    // setCount(count + 1)
    setClasses(param2);
    if (count >= 4) {
      setCount(0);
    } else {
      setCount(param);
    }
  };


  return (
    <motion.div
      className={dcss.dest}
      id="dest"
     
    >
      {!loading ? (
        <div>
          <div className={dcss.dleft}>
            <h3>
              <strong>01</strong>Pick your destination
            </h3>

            <img
              src={destinations[count].images.png}
              alt={destinations[count].name}
            />
          </div>
          <div className={dcss.dright}>
            <div className={dcss.dlinks}>
              <ul>
                <li
                  onClick={() => clickHandler(0, "moon")}
                  className={count === 0 ? "moon" : ""}
                >
                  MOON
                </li>
                <li
                  onClick={() => clickHandler(1, "mars")}
                  className={count === 1 ? "mars" : ""}
                >
                  MARS
                </li>
                <li
                  onClick={() => clickHandler(2, "europa")}
                  className={count === 2 ? "europa" : ""}
                >
                  EUROPA
                </li>
                <li
                  onClick={() => clickHandler(3, "titan")}
                  className={count === 3 ? "titan" : ""}
                >
                  TITAN
                </li>
              </ul>
            </div>
            <h1>{destinations[count].name}</h1>
            <p>{destinations[count].description}</p>
            <div className={dcss.dis} id="dis">
              <span>
                <h5>AVG. DISTANCE</h5>
                <h4>{destinations[count].distance}</h4>
              </span>
              <span>
                <h5>EST. TRAVEL TIME</h5>
                <h4>{destinations[count].travel}</h4>
              </span>
            </div>
          </div>
        </div>
      ) : null}
      <style>
        {`
        .dlinks li:not(.${classes}):hover::before {
          content: '';
          transition: 0.5s;
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 3px;
          width: 100%;
          background: white;
        }
      `}
      </style>
    </motion.div>
  );
}

export default Destination;
