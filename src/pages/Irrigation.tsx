import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Irrigation.module.css";

const Irrigation: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/home-irrigation");
  }, [navigate]);

  const onRectangleButtonClick = useCallback(() => {
    navigate("/home-irrigation");
  }, [navigate]);

  const onFrameButton2Click = useCallback(() => {
    navigate("/lighting");
  }, [navigate]);

  const onRectangle16Click = useCallback(() => {
    navigate("/lighting");
  }, [navigate]);

  const onFrameButton3Click = useCallback(() => {
    navigate("/temperature");
  }, [navigate]);

  const onRectangle17Click = useCallback(() => {
    navigate("/temperature");
  }, [navigate]);

  const onFrameButton4Click = useCallback(() => {
    navigate("/fruit-sorting");
  }, [navigate]);

  const onRectangleButton1Click = useCallback(() => {
    navigate("/fruit-sorting");
  }, [navigate]);

  const onFrameButton5Click = useCallback(() => {
    navigate("/abnormality");
  }, [navigate]);

  const onRectangle18Click = useCallback(() => {
    navigate("/abnormality");
  }, [navigate]);

  return (
    <div className={styles.irrigation}>
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <div className={styles.irrigationChild} />
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
      <div className={styles.irrigationItem} />
      <div className={styles.moistureIsHigher}>
        Moisture is higher than permissible level
      </div>
      <img
        className={styles.cloudDrizzleIcon}
        alt=""
        src="/clouddrizzle7.svg"
      />
      <div className={styles.irrigationInner} />
      <i className={styles.manualIrrigating}>Manual irrigating</i>
      <div className={styles.rectangleDiv} />
      <i className={styles.manualHeating}>Manual heating</i>
      <div className={styles.irrigationChild1} />
      <i className={styles.manualLighting}>Manual lighting</i>
      <b className={styles.notifications}>Notifications</b>
      <img className={styles.iconBell} alt="" src="/-icon-bell1.svg" />
      <div className={styles.irrigationChild2} />
      <div className={styles.noResponseFrom}>No response from Sensor. 3</div>
      <div className={styles.irrigationChild3} />
      <div className={styles.abnormalityDetected}>Abnormality detected</div>
      <img className={styles.alertOctagonIcon} alt="" src="/alertoctagon.svg" />
      <div className={styles.irrigationChild4} />
      <div className={styles.abnormalityDetected1}>Abnormality detected</div>
      <img
        className={styles.alertOctagonIcon1}
        alt=""
        src="/alertoctagon.svg"
      />
      <div className={styles.irrigationChild5} />
      <div className={styles.aNewUpdate}>A new Update is available</div>
      <img
        className={styles.arrowUpCircleIcon}
        alt=""
        src="/arrowupcircle.svg"
      />
      <img className={styles.wifiOffIcon} alt="" src="/wifioff3.svg" />
      <img className={styles.iconMapPin} alt="" src="/-icon-map-pin1.svg" />
      <div className={styles.irrigationChild6} />
      <div className={styles.irrigationChild7} />
      <div className={styles.irrigationChild8} />
      <b className={styles.graph}>Graph</b>
      <div className={styles.lineChart}>
        <div className={styles.lineChartChild} />
        <img className={styles.xAxisGridIcon} alt="" src="/xaxis-grid45.svg" />
        <img className={styles.xAxisGridIcon1} alt="" src="/xaxis-grid46.svg" />
        <img className={styles.xAxisGridIcon2} alt="" src="/xaxis-grid47.svg" />
        <img className={styles.xAxisGridIcon3} alt="" src="/xaxis-grid48.svg" />
        <img className={styles.xAxisGridIcon4} alt="" src="/xaxis-grid49.svg" />
        <img className={styles.xAxisGridIcon5} alt="" src="/xaxis-grid50.svg" />
        <img className={styles.xAxisGridIcon6} alt="" src="/xaxis-grid51.svg" />
        <img className={styles.xAxisGridIcon7} alt="" src="/xaxis-grid52.svg" />
        <img className={styles.xAxisGridIcon8} alt="" src="/xaxis-grid53.svg" />
        <img className={styles.xAxisGridIcon9} alt="" src="/xaxis-grid54.svg" />
        <img
          className={styles.xAxisGridIcon10}
          alt=""
          src="/xaxis-grid55.svg"
        />
        <img
          className={styles.xAxisGridIcon11}
          alt=""
          src="/xaxis-grid56.svg"
        />
        <img
          className={styles.xAxisGridIcon12}
          alt=""
          src="/xaxis-grid57.svg"
        />
        <img
          className={styles.xAxisGridIcon13}
          alt=""
          src="/xaxis-grid58.svg"
        />
        <img
          className={styles.xAxisGridIcon14}
          alt=""
          src="/xaxis-grid59.svg"
        />
        <img className={styles.yAxisGridIcon} alt="" src="/yaxis-grid12.svg" />
        <img className={styles.yAxisGridIcon1} alt="" src="/yaxis-grid13.svg" />
        <img className={styles.yAxisGridIcon2} alt="" src="/yaxis-grid14.svg" />
        <img className={styles.yAxisGridIcon3} alt="" src="/yaxis-grid15.svg" />
        <img className={styles.yAxisGridIcon} alt="" src="/yaxis-grid12.svg" />
        <img className={styles.xAxisGridIcon} alt="" src="/yaxis3.svg" />
        <div className={styles.div}>06:00</div>
        <div className={styles.div1}>08:00</div>
        <div className={styles.div2}>10:00</div>
        <div className={styles.div3}>12:00</div>
        <div className={styles.div4}>14:00</div>
        <div className={styles.div5}>16:00</div>
        <div className={styles.div6}>18:00</div>
        <div className={styles.div7}>0</div>
        <div className={styles.div8}>15</div>
        <div className={styles.div9}>30</div>
        <div className={styles.div10}>45</div>
        <img className={styles.lineIcon} alt="" src="/line2.svg" />
        <img className={styles.markerIcon} alt="" src="/marker76.svg" />
        <img className={styles.markerIcon1} alt="" src="/marker77.svg" />
        <img className={styles.markerIcon2} alt="" src="/marker78.svg" />
        <img className={styles.markerIcon3} alt="" src="/marker79.svg" />
        <img className={styles.markerIcon4} alt="" src="/marker80.svg" />
        <img className={styles.markerIcon5} alt="" src="/marker81.svg" />
        <img className={styles.markerIcon6} alt="" src="/marker82.svg" />
        <img className={styles.markerIcon7} alt="" src="/marker83.svg" />
        <img className={styles.markerIcon8} alt="" src="/marker84.svg" />
        <img className={styles.markerIcon9} alt="" src="/marker85.svg" />
        <img className={styles.markerIcon10} alt="" src="/marker86.svg" />
        <img className={styles.markerIcon11} alt="" src="/marker87.svg" />
        <img className={styles.markerIcon12} alt="" src="/marker88.svg" />
        <img className={styles.markerIcon13} alt="" src="/marker89.svg" />
        <img className={styles.markerIcon14} alt="" src="/marker90.svg" />
        <img className={styles.markerIcon15} alt="" src="/marker91.svg" />
        <img className={styles.markerIcon16} alt="" src="/marker92.svg" />
        <img className={styles.markerIcon17} alt="" src="/marker93.svg" />
        <img className={styles.markerIcon18} alt="" src="/marker94.svg" />
        <img className={styles.markerIcon19} alt="" src="/marker95.svg" />
        <img className={styles.markerIcon20} alt="" src="/marker96.svg" />
        <img className={styles.markerIcon21} alt="" src="/marker97.svg" />
        <img className={styles.markerIcon22} alt="" src="/marker98.svg" />
        <img className={styles.markerIcon23} alt="" src="/marker99.svg" />
        <img className={styles.markerIcon24} alt="" src="/marker100.svg" />
        <img className={styles.markerIcon25} alt="" src="/marker101.svg" />
        <img className={styles.markerIcon26} alt="" src="/marker102.svg" />
        <img className={styles.markerIcon27} alt="" src="/marker103.svg" />
        <img className={styles.markerIcon28} alt="" src="/marker104.svg" />
        <img className={styles.markerIcon29} alt="" src="/marker105.svg" />
      </div>
      <b className={styles.michaelJackson}>Michael Jackson</b>
      <div className={styles.irrigationChild9} />
      <b className={styles.noRecentActivity}>No recent activity</b>
      <div className={styles.irrigationChild10} />
      <b className={styles.information}>Information</b>
      <i className={styles.soilMoisture}>{`Soil moisture: `}</i>
      <i className={styles.mlm3}>30ml/m3</i>
      <i className={styles.irrigatingMode}>Irrigating mode:</i>
      <i className={styles.automatic}>AUTOMATIC</i>
      <i className={styles.scheduledTime}>Scheduled time:</i>
      <i className={styles.none}>None</i>
      <i className={styles.upperThreshold}>Upper threshold:</i>
      <i className={styles.mlm31}>40ml/m3</i>
      <i className={styles.lowerThreshold}>Lower threshold:</i>
      <i className={styles.mlm32}>25ml/m3</i>
      <i className={styles.irrigatingTimesLast}>
        Irrigating times (last 12 hours):
      </i>
      <i className={styles.times}>5 times</i>
      <i className={styles.mostRecentIrrigating}>Most recent irrigating:</i>
      <i className={styles.moistureCondition}>Moisture condition:</i>
      <i className={styles.good}>Good</i>
      <i className={styles.i5}>15:35 - 20/03/2023</i>
      <img className={styles.avatarsIcon} alt="" src="/avatars6.svg" />
      <img className={styles.avatarsIcon1} alt="" src="/avatars7.svg" />
      <img
        className={styles.iconHelpCircle}
        alt=""
        src="/-icon-help-circle2.svg"
      />
      <img className={styles.iconSettings} alt="" src="/-icon-settings2.svg" />
      <img className={styles.leafIcon} alt="" src="/leaf4.svg" />
      <button className={styles.rectangleParent} onClick={onFrameButtonClick}>
        <button
          className={styles.frameChild}
          onClick={onRectangleButtonClick}
        />
        <b className={styles.home}>Home</b>
        <img className={styles.homeIcon} alt="" src="/home1.svg" />
      </button>
      <button className={styles.rectangleGroup}>
        <div className={styles.frameItem} />
        <b className={styles.irrigation1}>Irrigation</b>
        <img
          className={styles.cloudDrizzleIcon1}
          alt=""
          src="/clouddrizzle8.svg"
        />
      </button>
      <button
        className={styles.rectangleContainer}
        onClick={onFrameButton2Click}
      >
        <div className={styles.frameInner} onClick={onRectangle16Click} />
        <b className={styles.home}>Lighting</b>
        <img className={styles.homeIcon} alt="" src="/sun4.svg" />
      </button>
      <button className={styles.frameButton} onClick={onFrameButton3Click}>
        <div className={styles.frameInner} onClick={onRectangle17Click} />
        <b className={styles.home}>Temperature</b>
        <img
          className={styles.thermometerIcon}
          alt=""
          src="/thermometer4.svg"
        />
      </button>
      <button className={styles.rectangleParent1} onClick={onFrameButton4Click}>
        <button
          className={styles.frameChild}
          onClick={onRectangleButton1Click}
        />
        <b className={styles.home}>Fruit sorting</b>
        <img className={styles.homeIcon} alt="" src="/heart1.svg" />
      </button>
      <button className={styles.rectangleParent2} onClick={onFrameButton5Click}>
        <div className={styles.frameInner} onClick={onRectangle18Click} />
        <b className={styles.abnormality}>Abnormality</b>
        <img className={styles.frownIcon} alt="" src="/frown.svg" />
      </button>
      <b className={styles.yolofarm}>Yolo:Farm</b>
      <div className={styles.irrigationChild11} />
      <b className={styles.logActivities}>Log activities</b>
      <b className={styles.hoChiMinh}>
        Ho Chi Minh city University of Technology
      </b>
      <b className={styles.hanoiVietnam}>Hanoi, Vietnam</b>
      <div className={styles.irrigation2}>Irrigation</div>
      <div className={styles.irrigationChild12} />
      <img className={styles.iconSettings1} alt="" src="/-icon-settings2.svg" />
      <div className={styles.settings}>Settings</div>
    </div>
  );
};

export default Irrigation;
