import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Temperature.module.css";

const Temperature: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/home-irrigation");
  }, [navigate]);

  const onRectangle16Click = useCallback(() => {
    navigate("/home-temperature");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/irrigation");
  }, [navigate]);

  const onRectangle17Click = useCallback(() => {
    navigate("/irrigation");
  }, [navigate]);

  const onFrameButton2Click = useCallback(() => {
    navigate("/lighting");
  }, [navigate]);

  const onRectangle18Click = useCallback(() => {
    navigate("/lighting");
  }, [navigate]);

  const onFrameButton4Click = useCallback(() => {
    navigate("/fruit-sorting");
  }, [navigate]);

  const onRectangle20Click = useCallback(() => {
    navigate("/fruit-sorting");
  }, [navigate]);

  const onFrameButton5Click = useCallback(() => {
    navigate("/abnormality");
  }, [navigate]);

  const onRectangle21Click = useCallback(() => {
    navigate("/abnormality");
  }, [navigate]);

  return (
    <div className={styles.temperature}>
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <div className={styles.temperatureChild} />
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
      <div className={styles.temperatureItem} />
      <div className={styles.moistureIsHigher}>
        Moisture is higher than permissible level
      </div>
      <img
        className={styles.cloudDrizzleIcon}
        alt=""
        src="/clouddrizzle11.svg"
      />
      <div className={styles.temperatureInner} />
      <i className={styles.manualIrrigating}>Manual irrigating</i>
      <div className={styles.rectangleDiv} />
      <i className={styles.manualHeating}>Manual heating</i>
      <div className={styles.temperatureChild1} />
      <i className={styles.manualLighting}>Manual lighting</i>
      <img className={styles.iconMapPin} alt="" src="/-icon-map-pin.svg" />
      <b className={styles.notifications}>Notifications</b>
      <img className={styles.iconBell} alt="" src="/-icon-bell.svg" />
      <div className={styles.temperatureChild2} />
      <div className={styles.noResponseFrom}>No response from Sensor. 3</div>
      <div className={styles.temperatureChild3} />
      <div className={styles.abnormalityDetected}>Abnormality detected</div>
      <img className={styles.alertOctagonIcon} alt="" src="/alertoctagon.svg" />
      <div className={styles.temperatureChild4} />
      <div className={styles.abnormalityDetected1}>Abnormality detected</div>
      <img
        className={styles.alertOctagonIcon1}
        alt=""
        src="/alertoctagon.svg"
      />
      <div className={styles.temperatureChild5} />
      <div className={styles.aNewUpdate}>A new Update is available</div>
      <img
        className={styles.arrowUpCircleIcon}
        alt=""
        src="/arrowupcircle.svg"
      />
      <img className={styles.wifiOffIcon} alt="" src="/wifioff5.svg" />
      <b className={styles.hoChiMinh}>
        Ho Chi Minh city University of Technology
      </b>
      <b className={styles.hanoiVietnam}>Hanoi, Vietnam</b>
      <div className={styles.temperatureChild6} />
      <div className={styles.temperatureChild7} />
      <div className={styles.temperatureChild8} />
      <b className={styles.noRecentActivity}>No recent activity</b>
      <div className={styles.temperatureChild9} />
      <b className={styles.information}>Information</b>
      <i className={styles.temperature1}>{`Temperature: `}</i>
      <div className={styles.div}>39℃</div>
      <i className={styles.heatingMode}>Heating mode:</i>
      <i className={styles.manual}>MANUAL</i>
      <i className={styles.scheduledTime}>Scheduled time:</i>
      <i className={styles.none}>None</i>
      <i className={styles.upperThreshold}>Upper threshold:</i>
      <div className={styles.div1}>
        <i className={styles.i5}>10</i>
        <span>℃</span>
      </div>
      <i className={styles.lowerThreshold}>Lower threshold:</i>
      <div className={styles.div2}>
        <i className={styles.i5}>35</i>
        <span>℃</span>
      </div>
      <i className={styles.heatingTimesLast}>Heating times (last 12 hours):</i>
      <i className={styles.times}>2 times</i>
      <i className={styles.mostRecentIrrigating}>Most recent irrigating:</i>
      <i className={styles.moistureCondition}>Moisture condition:</i>
      <i className={styles.bad}>Bad</i>
      <i className={styles.i7}>20:20 - 20/03/2023</i>
      <b className={styles.logActivities}>Log activities</b>
      <div className={styles.temperatureChild10} />
      <b className={styles.graph}>Graph</b>
      <div className={styles.lineChart}>
        <div className={styles.lineChartChild} />
        <img className={styles.xAxisGridIcon} alt="" src="/xaxis-grid60.svg" />
        <img className={styles.xAxisGridIcon1} alt="" src="/xaxis-grid61.svg" />
        <img className={styles.xAxisGridIcon2} alt="" src="/xaxis-grid62.svg" />
        <img className={styles.xAxisGridIcon3} alt="" src="/xaxis-grid63.svg" />
        <img className={styles.xAxisGridIcon4} alt="" src="/xaxis-grid64.svg" />
        <img className={styles.xAxisGridIcon5} alt="" src="/xaxis-grid65.svg" />
        <img className={styles.xAxisGridIcon6} alt="" src="/xaxis-grid66.svg" />
        <img className={styles.xAxisGridIcon7} alt="" src="/xaxis-grid67.svg" />
        <img className={styles.xAxisGridIcon8} alt="" src="/xaxis-grid68.svg" />
        <img className={styles.xAxisGridIcon9} alt="" src="/xaxis-grid69.svg" />
        <img
          className={styles.xAxisGridIcon10}
          alt=""
          src="/xaxis-grid70.svg"
        />
        <img
          className={styles.xAxisGridIcon11}
          alt=""
          src="/xaxis-grid71.svg"
        />
        <img
          className={styles.xAxisGridIcon12}
          alt=""
          src="/xaxis-grid72.svg"
        />
        <img
          className={styles.xAxisGridIcon13}
          alt=""
          src="/xaxis-grid73.svg"
        />
        <img
          className={styles.xAxisGridIcon14}
          alt=""
          src="/xaxis-grid75.svg"
        />
        <img className={styles.yAxisGridIcon} alt="" src="/yaxis-grid16.svg" />
        <img className={styles.yAxisGridIcon1} alt="" src="/yaxis-grid17.svg" />
        <img className={styles.yAxisGridIcon2} alt="" src="/yaxis-grid18.svg" />
        <img className={styles.yAxisGridIcon3} alt="" src="/yaxis-grid19.svg" />
        <img className={styles.yAxisGridIcon} alt="" src="/yaxis-grid16.svg" />
        <img className={styles.xAxisGridIcon} alt="" src="/yaxis4.svg" />
        <div className={styles.div3}>06:00</div>
        <div className={styles.div4}>08:00</div>
        <div className={styles.div5}>10:00</div>
        <div className={styles.div6}>12:00</div>
        <div className={styles.div7}>14:00</div>
        <div className={styles.div8}>16:00</div>
        <div className={styles.div9}>18:00</div>
        <div className={styles.div10}>0</div>
        <div className={styles.div11}>15</div>
        <div className={styles.div12}>30</div>
        <div className={styles.div13}>45</div>
        <img className={styles.lineIcon} alt="" src="/line4.svg" />
        <img className={styles.markerIcon} alt="" src="/marker136.svg" />
        <img className={styles.markerIcon1} alt="" src="/marker137.svg" />
        <img className={styles.markerIcon2} alt="" src="/marker138.svg" />
        <img className={styles.markerIcon3} alt="" src="/marker139.svg" />
        <img className={styles.markerIcon4} alt="" src="/marker140.svg" />
        <img className={styles.markerIcon5} alt="" src="/marker141.svg" />
        <img className={styles.markerIcon6} alt="" src="/marker142.svg" />
        <img className={styles.markerIcon7} alt="" src="/marker143.svg" />
        <img className={styles.markerIcon8} alt="" src="/marker144.svg" />
        <img className={styles.markerIcon9} alt="" src="/marker145.svg" />
        <img className={styles.markerIcon10} alt="" src="/marker146.svg" />
        <img className={styles.markerIcon11} alt="" src="/marker147.svg" />
        <img className={styles.markerIcon12} alt="" src="/marker148.svg" />
        <img className={styles.markerIcon13} alt="" src="/marker149.svg" />
        <img className={styles.markerIcon14} alt="" src="/marker150.svg" />
        <img className={styles.markerIcon15} alt="" src="/marker151.svg" />
        <img className={styles.markerIcon16} alt="" src="/marker152.svg" />
        <img className={styles.markerIcon17} alt="" src="/marker153.svg" />
        <img className={styles.markerIcon18} alt="" src="/marker154.svg" />
        <img className={styles.markerIcon19} alt="" src="/marker155.svg" />
        <img className={styles.markerIcon20} alt="" src="/marker156.svg" />
        <img className={styles.markerIcon21} alt="" src="/marker157.svg" />
        <img className={styles.markerIcon22} alt="" src="/marker158.svg" />
        <img className={styles.markerIcon23} alt="" src="/marker158.svg" />
        <img className={styles.markerIcon24} alt="" src="/marker159.svg" />
        <img className={styles.markerIcon25} alt="" src="/marker160.svg" />
        <img className={styles.markerIcon26} alt="" src="/marker161.svg" />
        <img className={styles.markerIcon27} alt="" src="/marker162.svg" />
        <img className={styles.markerIcon28} alt="" src="/marker163.svg" />
        <img className={styles.markerIcon29} alt="" src="/marker164.svg" />
      </div>
      <div className={styles.temperatureChild11} />
      <img className={styles.iconSettings} alt="" src="/-icon-settings1.svg" />
      <div className={styles.settings}>Settings</div>
      <b className={styles.michaelJackson}>Michael Jackson</b>
      <img className={styles.avatarsIcon} alt="" src="/avatars10.svg" />
      <img className={styles.avatarsIcon1} alt="" src="/avatars11.svg" />
      <img
        className={styles.iconHelpCircle}
        alt=""
        src="/-icon-help-circle1.svg"
      />
      <img className={styles.iconSettings1} alt="" src="/-icon-settings1.svg" />
      <img className={styles.leafIcon} alt="" src="/leaf6.svg" />
      <button className={styles.rectangleParent} onClick={onFrameButtonClick}>
        <div className={styles.frameChild} onClick={onRectangle16Click} />
        <b className={styles.home}>Home</b>
        <img className={styles.homeIcon} alt="" src="/home1.svg" />
      </button>
      <button className={styles.rectangleGroup} onClick={onFrameButton1Click}>
        <div className={styles.frameChild} onClick={onRectangle17Click} />
        <b className={styles.irrigation}>Irrigation</b>
        <img
          className={styles.cloudDrizzleIcon1}
          alt=""
          src="/clouddrizzle12.svg"
        />
      </button>
      <button
        className={styles.rectangleContainer}
        onClick={onFrameButton2Click}
      >
        <div className={styles.frameChild} onClick={onRectangle18Click} />
        <b className={styles.irrigation}>Lighting</b>
        <img className={styles.homeIcon} alt="" src="/sun6.svg" />
      </button>
      <button className={styles.frameButton}>
        <div className={styles.frameChild1} />
        <b className={styles.temperature2}>Temperature</b>
        <img
          className={styles.thermometerIcon}
          alt=""
          src="/thermometer6.svg"
        />
      </button>
      <button className={styles.rectangleParent1} onClick={onFrameButton4Click}>
        <div className={styles.frameChild} onClick={onRectangle20Click} />
        <b className={styles.irrigation}>Fruit sorting</b>
        <img className={styles.homeIcon} alt="" src="/heart1.svg" />
      </button>
      <button className={styles.rectangleParent2} onClick={onFrameButton5Click}>
        <div className={styles.frameChild} onClick={onRectangle21Click} />
        <b className={styles.abnormality}>Abnormality</b>
        <img className={styles.frownIcon} alt="" src="/frown.svg" />
      </button>
      <b className={styles.yolofarm}>Yolo:Farm</b>
      <div className={styles.temperatureChild12} />
      <div className={styles.temperature3}>Temperature</div>
    </div>
  );
};

export default Temperature;
