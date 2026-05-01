//เก็บ logic ต่างๆ

import HomepageComponent from "./Homepage.component";
import { useState } from "react";

const HompageContainer = () => {

  // Store all logic

  const [count, setCount] = useState(0);
  //   let count = 0;

  return <HomepageComponent count={count} setCount={setCount} />;
};

export default HompageContainer;

//   let count = 0;
// +

// count 1
// monitor 0
// +
// count 2
// monitor 0

// const [count, setCount] = useState(0);
// +
// count 1
// monitor 1
// +
// count 2
// monitor 2
