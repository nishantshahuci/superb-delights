import React from "react";

import { ReactComponent as Fork } from "../../assets/icons/fork.svg";
import { ReactComponent as Spoon } from "../../assets/icons/spoon.svg";

export default function Logo() {
  return (
    <div
      style={{
        position: "relative",
        height: "100rem",
        width: "100rem",
        fill: "var(--primary)",
      }}
    >
      <Fork
        style={{
          width: "50%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <Spoon
        style={{
          width: "50%",
          position: "absolute",
          top: "50%",
          right: "50%",
          transform: "translate(50%, -50%) rotateY(180deg)",
        }}
      />
    </div>
  );
}
