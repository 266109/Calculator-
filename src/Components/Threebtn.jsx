import styles from "../App.module.css";

const Threebtn = ({ a, b, c, onClick }) => {
  return (
    <div id={styles.threebtn}>
      <button id="btn" onClick={() => onClick(a)}>
        {a}
      </button>
      <button id="btn" onClick={() => onClick(b)}>
        {b}
      </button>
      <button id="btn" onClick={() => onClick(c)}>
        {c}
      </button>
    </div>
  );
};

export default Threebtn;
