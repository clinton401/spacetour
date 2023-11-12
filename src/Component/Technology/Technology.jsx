import React, { useState, useContext } from "react";
import tcss from "./Technology.module.css";
import { technologyContext } from "../../App";
function Technology({ loading }) {
  const [count, setCount] = useState(0);
  const tech = useContext(technologyContext);
const clickHandler = (param) => {
  setCount(param);
};
  return (
    <div className={tcss.technology}>
      {!loading ? (
        <div>
          <div className={tcss.cleft}>
            <h3 className={tcss.h311}>
              <strong>03</strong>SPACE LAUNCH 101
            </h3>
            <div className={tcss.detail}>
              <aside>
                <ul>
                  <li
                    onClick={() => clickHandler(0)}
                    id={count === 0 ? "tech1" : ""}
                  >
                    1
                  </li>
                  <li
                    onClick={() => clickHandler(1)}
                    id={count === 1 ? "tech2" : ""}
                  >
                    2
                  </li>
                  <li
                    onClick={() => clickHandler(2)}
                    id={count === 2 ? "tech3" : ""}
                  >
                    3
                  </li>
                </ul>
              </aside>
              <article>
                <h4>THE TERMINOLOGY...</h4>
                <h2>{tech[count].name.toUpperCase()}</h2>
                <p>{tech[count].description}</p>
              </article>
            </div>
          </div>
                  <div className={tcss.cright}>
                      <h3 className={tcss.h322}>
              <strong>03</strong>SPACE LAUNCH 101
            </h3>
            {" "}
            <img
              src={tech[count].images.portrait}
              alt={tech[count].name}
              className={tcss.img1}
            />
            <img
              src={tech[count].images.landscape}
              alt={tech[count].name}
              className={tcss.img2}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Technology;
