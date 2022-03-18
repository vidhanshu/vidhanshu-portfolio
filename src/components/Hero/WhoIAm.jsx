import React, { useState, useEffect } from "react";
import { SectionTitle } from "../../styles/GlobalComponents";
import { WhoIAmStyles } from "./WhoIAmStyles";
const im = [
  "vidhanshu",
  "a webdeveloper",
  "a competative programmer",
  "an android developer",
  "GDSC Core-team-member",
  "Here to help",
  "Keen to learn",
];
function WhoIAm() {
  useEffect(() => {
    setInterval(() => {
      setCurr((p) => {
        if (p == im.length - 1) {
          return 0;
        } else {
          return p + 1;
        }
      });
    }, 3000);
  }, []);
  const [curr, setCurr] = useState(0);
  return (
    <WhoIAmStyles>
      <p>I'm {im[curr]}</p>
    </WhoIAmStyles>
  );
}

export default WhoIAm;
