import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./RectangleIcon.module.css";

const RectangleIcon: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/home-temperature");
  }, [navigate]);

  return (
    <img
      className={styles.frameChild}
      alt=""
      src="/rectangle-4.svg"
      onClick={onRectangleClick}
    />
  );
};

export default RectangleIcon;
