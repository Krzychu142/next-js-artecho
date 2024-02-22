import React from "react";

import classes from "./spinner.module.css";

const Spinner = () => {
  return (
    <div
      className={`fixed transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-50 w-full h-full bg-white/50 ${classes.spinner}`}
    ></div>
  );
};

export default Spinner;
