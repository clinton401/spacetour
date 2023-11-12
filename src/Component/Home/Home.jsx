import React from 'react'
import hcss from './Home.module.css';
import exploreImg from '../../starter-code/Group.png';
import { motion } from 'framer-motion';


function Home() {
  return (
    <motion.div
      className={hcss.home}
      
    >
      <div>
        <h3>SO YOU WANT TO TRAVEL TO</h3>
        <h1>SPACE</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <div className={hcss.div2}>
        <span>
          <img src={exploreImg} alt="" />
        </span>
      </div>
    </motion.div>
  );
}

export default Home
