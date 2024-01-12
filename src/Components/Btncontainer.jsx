import styles from "../App.module.css";
import Threebtn from "./Threebtn";

const Btncontainer = ({ onbtnClick }) => {
  return (
    <div id={styles.btncontainer}>
      <Threebtn a="C" b="1" c="2" onClick={onbtnClick} />
      <Threebtn a="+" b="3" c="4" onClick={onbtnClick} />
      <Threebtn a="-" b="5" c="6" onClick={onbtnClick} />
      <Threebtn a="*" b="7" c="8" onClick={onbtnClick} />
      <Threebtn a="/" b="9" c="0" onClick={onbtnClick} />
      <Threebtn a="." b="," c="=" onClick={onbtnClick} />
    </div>
  );
};

export default Btncontainer;
