import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Abnormality.module.css";

const Abnormality: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/home-irrigation");
  }, [navigate]);

  const onRectangle19Click = useCallback(() => {
    navigate("/home-temperature");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/irrigation");
  }, [navigate]);

  const onRectangle20Click = useCallback(() => {
    navigate("/irrigation");
  }, [navigate]);

  const onFrameButton2Click = useCallback(() => {
    navigate("/lighting");
  }, [navigate]);

  const onRectangle21Click = useCallback(() => {
    navigate("/lighting");
  }, [navigate]);

  const onFrameButton3Click = useCallback(() => {
    navigate("/temperature");
  }, [navigate]);

  const onRectangle22Click = useCallback(() => {
    navigate("/temperature");
  }, [navigate]);

  const onFrameButton4Click = useCallback(() => {
    navigate("/fruit-sorting");
  }, [navigate]);

  const onRectangle23Click = useCallback(() => {
    navigate("/fruit-sorting");
  }, [navigate]);

  return (
    <div className={styles.abnormality}>
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <div className={styles.abnormalityChild} />
      <div className={styles.seeMore}>See more</div>
      <div className={styles.seeMore1}>See more</div>
      <div className={styles.seeMore2}>See more</div>
      <div className={styles.updateNow}>Update now</div>
      <div className={styles.seeMore3}>See more</div>
      <i className={styles.i}>16:08 - 20/03/2023</i>
      <i className={styles.i1}>12:25 - 20/03/2023</i>
      <i className={styles.i2}>11:48 - 20/03/2023</i>
      <i className={styles.i3}>20:55 - 19/03/2023</i>
      <i className={styles.i4}>17:55 - 19/03/2023</i>
      <div className={styles.abnormalityItem} />
      <div className={styles.moistureIsHigher}>
        Moisture is higher than permissible level
      </div>
      <img
        className={styles.cloudDrizzleIcon}
        alt=""
        src="/clouddrizzle13.svg"
      />
      <div className={styles.abnormalityInner} />
      <i className={styles.manualIrrigating}>Manual irrigating</i>
      <div className={styles.rectangleDiv} />
      <i className={styles.manualHeating}>Manual heating</i>
      <div className={styles.abnormalityChild1} />
      <i className={styles.manualLighting}>Manual lighting</i>
      <img className={styles.iconMapPin} alt="" src="/-icon-map-pin.svg" />
      <b className={styles.notifications}>Notifications</b>
      <img className={styles.iconBell} alt="" src="/-icon-bell.svg" />
      <div className={styles.abnormalityChild2} />
      <div className={styles.noResponseFrom}>No response from Sensor. 3</div>
      <div className={styles.abnormalityChild3} />
      <div className={styles.abnormalityDetected}>Abnormality detected</div>
      <img className={styles.alertOctagonIcon} alt="" src="/alertoctagon.svg" />
      <div className={styles.abnormalityChild4} />
      <div className={styles.abnormalityDetected1}>Abnormality detected</div>
      <img
        className={styles.alertOctagonIcon1}
        alt=""
        src="/alertoctagon.svg"
      />
      <div className={styles.abnormalityChild5} />
      <div className={styles.aNewUpdate}>A new Update is available</div>
      <img
        className={styles.arrowUpCircleIcon}
        alt=""
        src="/arrowupcircle.svg"
      />
      <img className={styles.wifiOffIcon} alt="" src="/wifioff6.svg" />
      <b className={styles.hoChiMinh}>
        Ho Chi Minh city University of Technology
      </b>
      <b className={styles.hanoiVietnam}>Hanoi, Vietnam</b>
      <div className={styles.abnormalityChild6} />
      <div className={styles.abnormalityChild7} />
      <b className={styles.michaelJackson}>Michael Jackson</b>
      <div className={styles.abnormalityChild8} />
      <b className={styles.detail}>Detail</b>
      <i className={styles.keepingAbove}>Keeping above</i>
      <i className={styles.mlm3}>25ml/m3</i>
      <i className={styles.automatic}>AUTOMATIC</i>
      <img className={styles.menuIcon} alt="" src="/menu.svg" />
      <div className={styles.abnormalityChild9} />
      <div className={styles.abnormalityChild10} />
      <div className={styles.abnormalityChild11} />
      <div className={styles.abnormalityChild12} />
      <div className={styles.abnormalityChild13} />
      <b className={styles.noRecentActivity}>No recent activity</b>
      <i className={styles.mlm31}>ml/m3</i>
      <i className={styles.keepingAbove}>Keeping above</i>
      <i className={styles.mlm3}>25ml/m3</i>
      <div className={styles.wm3}>W/m3</div>
      <div className={styles.div}>℃</div>
      <div className={styles.abnormalityChild14} />
      <div className={styles.abnormalityChild15} />
      <img className={styles.avatarsIcon} alt="" src="/avatars12.svg" />
      <img className={styles.avatarsIcon1} alt="" src="/avatars13.svg" />
      <img
        className={styles.iconHelpCircle}
        alt=""
        src="/-icon-help-circle1.svg"
      />
      <img className={styles.iconSettings} alt="" src="/-icon-settings1.svg" />
      <img className={styles.leafIcon} alt="" src="/leaf7.svg" />
      <button className={styles.rectangleParent} onClick={onFrameButtonClick}>
        <div className={styles.frameChild} onClick={onRectangle19Click} />
        <b className={styles.home}>Home</b>
        <img className={styles.homeIcon} alt="" src="/home1.svg" />
      </button>
      <button className={styles.rectangleGroup} onClick={onFrameButton1Click}>
        <div className={styles.frameChild} onClick={onRectangle20Click} />
        <b className={styles.home}>Irrigation</b>
        <img
          className={styles.cloudDrizzleIcon1}
          alt=""
          src="/clouddrizzle14.svg"
        />
      </button>
      <button
        className={styles.rectangleContainer}
        onClick={onFrameButton2Click}
      >
        <div className={styles.frameChild} onClick={onRectangle21Click} />
        <b className={styles.home}>Lighting</b>
        <img className={styles.homeIcon} alt="" src="/sun7.svg" />
      </button>
      <button className={styles.frameButton} onClick={onFrameButton3Click}>
        <div className={styles.frameChild} onClick={onRectangle22Click} />
        <b className={styles.home}>Temperature</b>
        <img
          className={styles.thermometerIcon}
          alt=""
          src="/thermometer7.svg"
        />
      </button>
      <button className={styles.rectangleParent1} onClick={onFrameButton4Click}>
        <div className={styles.frameChild} onClick={onRectangle23Click} />
        <b className={styles.home}>Fruit sorting</b>
        <img className={styles.homeIcon} alt="" src="/heart.svg" />
      </button>
      <button className={styles.rectangleParent2}>
        <div className={styles.frameChild3} />
        <b className={styles.abnormality1}>Abnormality</b>
        <img className={styles.frownIcon} alt="" src="/frown1.svg" />
      </button>
      <b className={styles.yolofarm}>Yolo:Farm</b>
      <div className={styles.abnormalityChild16} />
      <div className={styles.lineDiv} />
      <div className={styles.abnormalityChild17} />
      <div className={styles.abnormalityChild18} />
      <i className={styles.soilMoisture}>Soil moisture</i>
      <div className={styles.abnormalityChild12} />
      <i className={styles.soilMoisture}>Soil moisture</i>
      <i className={styles.automatic}>AUTOMATIC</i>
      <i className={styles.i5}>30</i>
      <i className={styles.i6}>30</i>
      <i className={styles.i7}>30</i>
      <div className={styles.abnormalityChild20} />
      <div className={styles.graph1}>GRAPH 1</div>
      <i className={styles.lighting1}>Lighting</i>
      <i className={styles.temperature1}>Temperature</i>
      <b className={styles.graph}>Graph</b>
      <b className={styles.logActivities}>Log activities</b>
      <div className={styles.abnormalityChild21} />
      <div className={styles.soilMoisture2}>Soil moisture</div>
      <img
        className={styles.cloudDrizzleIcon2}
        alt=""
        src="/clouddrizzle15.svg"
      />
      <img
        className={styles.iconChevronDown}
        alt=""
        src="/-icon-chevron-down1.svg"
      />
      <div className={styles.abnormalityChild8} />
      <b className={styles.detail}>Detail</b>
      <img className={styles.menuIcon} alt="" src="/menu.svg" />
      <i className={styles.keepingAbove}>Keeping above</i>
      <i className={styles.mlm3}>25ml/m3</i>
      <i className={styles.automatic}>AUTOMATIC</i>
      <img className={styles.menuIcon} alt="" src="/menu.svg" />
      <b className={styles.detail}>Detail</b>
      <i className={styles.keepingAbove}>Keeping above</i>
      <i className={styles.mlm3}>25ml/m3</i>
      <i className={styles.automatic}>AUTOMATIC</i>
      <img className={styles.menuIcon} alt="" src="/menu.svg" />
      <div className={styles.abnormalityChild23} />
      <b className={styles.detail3}>Detail</b>
      <i className={styles.turnOn}>Turn ON</i>
      <i className={styles.i8}>18:00 - 05:00</i>
      <i className={styles.scheduled}>SCHEDULED</i>
      <img className={styles.menuIcon4} alt="" src="/menu.svg" />
      <div className={styles.abnormalityChild24} />
      <b className={styles.detail4}>Detail</b>
      <i className={styles.inside}>Inside</i>
      <div className={styles.div1}>
        <i>{`10 `}</i>
        <span>- 35℃</span>
      </div>
      <i className={styles.manual}>MANUAL</i>
      <img className={styles.menuIcon5} alt="" src="/menu.svg" />
      <div className={styles.abnormality2}>Abnormality</div>
    </div>
  );
};

export default Abnormality;
