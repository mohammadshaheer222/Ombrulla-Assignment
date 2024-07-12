import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Works = (props) => {
  const [counterState, setCounterstate] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterstate(true)}
      onExit={() => setCounterstate(false)}
    >
      <div className="mt-4 py-8 rounded-3xl space-y-2 border-[1px]">
        <b className="text-center text-2xl text-[#FF5722]">
          {counterState && (
            <CountUp start={0} end={props.count} delay={0}>
              {props.count}
            </CountUp>
          )}
          +
        </b>
        <h2 className="text-center font-light">{props.role}</h2>
      </div>
    </ScrollTrigger>
  );
};

export default Works;
