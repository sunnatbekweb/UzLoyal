"use client";
import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

interface CounterProps {
  countEnd: number;
  text: string;
  symbol: string;
}

const Counter: React.FC<CounterProps> = ({ countEnd, text, symbol }) => {
  const [count, setCount] = useState<boolean>(false);  

  return (
    <ScrollTrigger
      onEnter={() => setCount(true)}
      onExit={() => setCount(false)}
    >
      <div className="flex items-center h-[110px]">
      <h3 className="text-[50px] text-[#172533] font-semibold mr-5">
        {count && <CountUp start={0} end={countEnd} duration={3} />}{symbol}
      </h3>
      <p className="text-[25px] text-[#172533] font-medium max-w-[100px]">{text}</p>
      </div>
    </ScrollTrigger>
  );
};

export default Counter;