import React, { useContext, useState } from "react";
import css from "./Crew.module.css";
import { crewContext } from "../../App";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import cimg1 from '../../starter-code/assets/crew/image-douglas-hurley.png';
import cimg2 from '../../starter-code/assets/crew/image-mark-shuttleworth.png';
import cimg3 from '../../starter-code/assets/crew/image-victor-glover.png';
import cimg4 from '../../starter-code/assets/crew/image-anousheh-ansari.png';



function Crew({ loading }) {
  const [count, setCount] = useState(0);
  const crews = useContext(crewContext);

  const clickHandler = (param) => {
    setCount(param);
  };
    const nextHandler = () => {
    if (count >= 3) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
    }
    const prevHandler = () => {
        if (count <= 0) {
            setCount(3);
        } else {
            setCount(count - 1);
        }
  }
  const imgSelector = () => {
    switch (count) {
        case 0:
                  return cimg1;
                case 1:
                  return cimg2;
                case 2:
                  return cimg3;
                case 3:
                  return cimg4;
              }
    }
  
  return (
    <div className={css.crew} id="crew">
      {!loading ? (
        <div>
          <div className={css.cleft} id="cleft">
            <h3 className="h31">
              <strong>02</strong>Pick your destination
            </h3>
            <div className={css.details} id="details">
              <h4>{crews[count].role.toUpperCase()}</h4>
              <h2>{crews[count].name.toUpperCase()}</h2>
              <p>{crews[count].bio}</p>
            </div>
            <div className={css.next} id="next">
              <span
                onClick={() => clickHandler(0)}
                id={count === 0 ? "crew1" : ""}
              ></span>
              <span
                onClick={() => clickHandler(1)}
                id={count === 1 ? "crew2" : ""}
              ></span>
              <span
                onClick={() => clickHandler(2)}
                id={count === 2 ? "crew3" : ""}
              ></span>
              <span
                onClick={() => clickHandler(3)}
                id={count === 3 ? "crew4" : ""}
              ></span>
            </div>
          </div>

          <div className={css.cright}>
            <h3 className="h32">
              <strong>01</strong>Pick your destination
            </h3>
            <div id="arrows">
              <BsChevronLeft className="arrow-left" onClick={prevHandler} />
              <BsChevronRight className="arrow-right" onClick={nextHandler} />
            </div>
            <img src={imgSelector()} alt={crews[count].name} />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Crew;
