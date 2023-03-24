import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import RectangleIcon from "../components/RectangleIcon";
import styles from "./Welcome1.module.css";

const Welcome1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onDontHaveAnClick = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  const onFrameButtonClick = useCallback(() => {
    navigate("/home-irrigation");
  }, [navigate]);

  return (
    <div className={styles.welcome1}>
      <a className={styles.forgotPassword}>Forgot Password?</a>
      <a className={styles.dontHaveAnContainer} onClick={onDontHaveAnClick}>
        <span>Don’t have an account?</span>
        <span className={styles.signUp}> Sign up</span>
      </a>
      <button className={styles.vectorParent} onClick={onFrameButtonClick}>
        <RectangleIcon />
        <b className={styles.next}>Next</b>
      </button>
      <div className={styles.welcome1Child} />
      <img className={styles.welcome1Item} alt="" src="/rectangle-3.svg" />
      <input className={styles.userName} type="text" placeholder="User name" />
      <input className={styles.password} type="text" placeholder="Password" />
      <img className={styles.flagIcon} alt="" src="/flag.svg" />
      <img className={styles.lockIcon} alt="" src="/lock.svg" />
    </div>
  );
};

export default Welcome1;
