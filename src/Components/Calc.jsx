import { useState } from "react";
import styles from "../App.module.css";
import Btncontainer from "./Btncontainer";
import Displaybox from "./Displaybox";

const Calc = () => {
  const [calVal, setcalVal] = useState("");

  const onbtnClick = (data) => {
    if (data === "C") {
      setcalVal("");
    } else if (data === "=") {
      const newval = eval(calVal);
      setcalVal(newval);
    } else {
      const newdata = calVal + data;
      setcalVal(newdata);
    }
  };

  return (
    <div id={styles.calc}>
      <Displaybox dispval={calVal} />
      <Btncontainer onbtnClick={onbtnClick} />
    </div>
  );
};

export default Calc;
