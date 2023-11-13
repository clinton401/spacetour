import React, { useState, useContext } from "react";
import tcss from "./Technology.module.css";
import { technologyContext } from "../../App";
import pimg1 from '../../starter-code/assets/technology/image-launch-vehicle-portrait.jpg'
import limg1 from '../../starter-code/assets/technology/image-launch-vehicle-landscape.jpg'
import pimg2 from '../../starter-code/assets/technology/image-spaceport-portrait.jpg'
import limg2 from '../../starter-code/assets/technology/image-spaceport-landscape.jpg'
import pimg3 from '../../starter-code/assets/technology/image-space-capsule-portrait.jpg'
import limg3 from '../../starter-code/assets/technology/image-space-capsule-landscape.jpg'


function Technology({ loading }) {
  const [count, setCount] = useState(0);
  const tech = useContext(technologyContext);
const clickHandler = (param) => {
  setCount(param);
  };
  const pImgSelector = () => {
    switch (count) {
      case 0:
        return pimg1;
      case 1:
        return pimg2;
      case 2:
        return pimg3;
    }
  }
  const lImgSelector = () => {
    switch (count) {
      case 0:
        return limg1;
      case 1:
        return limg2;
      case 2:
        return limg3;
    }
  }
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
              src={pImgSelector()}
              alt={tech[count].name}
              className={tcss.img1}
            />
            <img
              src={lImgSelector()}
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
