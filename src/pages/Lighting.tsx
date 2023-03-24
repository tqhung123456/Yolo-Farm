import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Lighting.module.css";

const Lighting: FunctionComponent = () => {
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

  const onFrameButton3Click = useCallback(() => {
    navigate("/temperature");
  }, [navigate]);

  const onRectangle19Click = useCallback(() => {
    navigate("/temperature");
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
    <div className={styles.lighting}>
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <div className={styles.lightingChild} />
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
      <div className={styles.lightingItem} />
      <div className={styles.moistureIsHigher}>
        Moisture is higher than permissible level
      </div>
      <img
        className={styles.cloudDrizzleIcon}
        alt=""
        src="/clouddrizzle9.svg"
      />
      <div className={styles.lightingInner} />
      <i className={styles.manualIrrigating}>Manual irrigating</i>
      <div className={styles.rectangleDiv} />
      <i className={styles.manualHeating}>Manual heating</i>
      <div className={styles.lightingChild1} />
      <i className={styles.manualLighting}>Manual lighting</i>
      <img className={styles.iconMapPin} alt="" src="/-icon-map-pin1.svg" />
      <b className={styles.notifications}>Notifications</b>
      <img className={styles.iconBell} alt="" src="/-icon-bell1.svg" />
      <div className={styles.lightingChild2} />
      <div className={styles.noResponseFrom}>No response from Sensor. 3</div>
      <div className={styles.lightingChild3} />
      <div className={styles.abnormalityDetected}>Abnormality detected</div>
      <img className={styles.alertOctagonIcon} alt="" src="/alertoctagon.svg" />
      <div className={styles.lightingChild4} />
      <div className={styles.abnormalityDetected1}>Abnormality detected</div>
      <img
        className={styles.alertOctagonIcon1}
        alt=""
        src="/alertoctagon.svg"
      />
      <div className={styles.lightingChild5} />
      <div className={styles.aNewUpdate}>A new Update is available</div>
      <img
        className={styles.arrowUpCircleIcon}
        alt=""
        src="/arrowupcircle.svg"
      />
      <img className={styles.wifiOffIcon} alt="" src="/wifioff4.svg" />
      <b className={styles.hoChiMinh}>
        Ho Chi Minh city University of Technology
      </b>
      <b className={styles.hanoiVietnam}>Hanoi, Vietnam</b>
      <div className={styles.lightingChild6} />
      <div className={styles.lightingChild7} />
      <div className={styles.lightingChild8} />
      <b className={styles.noRecentActivity}>No recent activity</b>
      <div className={styles.lightingChild9} />
      <b className={styles.information}>Information</b>
      <i className={styles.lighting1}>Lighting</i>
      <i className={styles.wm3}>162W/m3</i>
      <i className={styles.lightingMode}>Lighting mode:</i>
      <i className={styles.scheduled}>SCHEDULED</i>
      <i className={styles.scheduledTime}>Scheduled time:</i>
      <i className={styles.i5}>18:00 - 05:00</i>
      <i className={styles.upperThreshold}>Upper threshold:</i>
      <i className={styles.wm31}>200W/m3</i>
      <i className={styles.lowerThreshold}>Lower threshold:</i>
      <i className={styles.wm32}>100W/m3</i>
      <i className={styles.lightingTimesLast}>
        Lighting times (last 12 hours):
      </i>
      <i className={styles.none}>None</i>
      <i className={styles.mostRecentIrrigating}>Most recent irrigating:</i>
      <i className={styles.moistureCondition}>Moisture condition:</i>
      <i className={styles.normal}>Normal</i>
      <i className={styles.none1}>None</i>
      <b className={styles.logActivities}>Log activities</b>
      <div className={styles.lightingChild10} />
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
          src="/xaxis-grid74.svg"
        />
        <img className={styles.yAxisGridIcon} alt="" src="/yaxis-grid16.svg" />
        <img className={styles.yAxisGridIcon1} alt="" src="/yaxis-grid17.svg" />
        <img className={styles.yAxisGridIcon2} alt="" src="/yaxis-grid18.svg" />
        <img className={styles.yAxisGridIcon3} alt="" src="/yaxis-grid19.svg" />
        <img className={styles.yAxisGridIcon} alt="" src="/yaxis-grid16.svg" />
        <img className={styles.xAxisGridIcon} alt="" src="/yaxis4.svg" />
        <div className={styles.div}>06:00</div>
        <div className={styles.div1}>08:00</div>
        <div className={styles.div2}>10:00</div>
        <div className={styles.div3}>12:00</div>
        <div className={styles.div4}>14:00</div>
        <div className={styles.div5}>16:00</div>
        <div className={styles.div6}>18:00</div>
        <div className={styles.div7}>0</div>
        <div className={styles.div8}>60</div>
        <div className={styles.div9}>120</div>
        <div className={styles.div10}>180</div>
        <img className={styles.lineIcon} alt="" src="/line3.svg" />
        <img className={styles.markerIcon} alt="" src="/marker106.svg" />
        <img className={styles.markerIcon1} alt="" src="/marker107.svg" />
        <img className={styles.markerIcon2} alt="" src="/marker108.svg" />
        <img className={styles.markerIcon3} alt="" src="/marker109.svg" />
        <img className={styles.markerIcon4} alt="" src="/marker110.svg" />
        <img className={styles.markerIcon5} alt="" src="/marker111.svg" />
        <img className={styles.markerIcon6} alt="" src="/marker112.svg" />
        <img className={styles.markerIcon7} alt="" src="/marker113.svg" />
        <img className={styles.markerIcon8} alt="" src="/marker114.svg" />
        <img className={styles.markerIcon9} alt="" src="/marker115.svg" />
        <img className={styles.markerIcon10} alt="" src="/marker116.svg" />
        <img className={styles.markerIcon11} alt="" src="/marker117.svg" />
        <img className={styles.markerIcon12} alt="" src="/marker118.svg" />
        <img className={styles.markerIcon13} alt="" src="/marker119.svg" />
        <img className={styles.markerIcon14} alt="" src="/marker120.svg" />
        <img className={styles.markerIcon15} alt="" src="/marker121.svg" />
        <img className={styles.markerIcon16} alt="" src="/marker122.svg" />
        <img className={styles.markerIcon17} alt="" src="/marker123.svg" />
        <img className={styles.markerIcon18} alt="" src="/marker124.svg" />
        <img className={styles.markerIcon19} alt="" src="/marker125.svg" />
        <img className={styles.markerIcon20} alt="" src="/marker126.svg" />
        <img className={styles.markerIcon21} alt="" src="/marker127.svg" />
        <img className={styles.markerIcon22} alt="" src="/marker128.svg" />
        <img className={styles.markerIcon23} alt="" src="/marker129.svg" />
        <img className={styles.markerIcon24} alt="" src="/marker130.svg" />
        <img className={styles.markerIcon25} alt="" src="/marker131.svg" />
        <img className={styles.markerIcon26} alt="" src="/marker132.svg" />
        <img className={styles.markerIcon27} alt="" src="/marker133.svg" />
        <img className={styles.markerIcon28} alt="" src="/marker134.svg" />
        <img className={styles.markerIcon29} alt="" src="/marker135.svg" />
      </div>
      <div className={styles.lightingChild11} />
      <img className={styles.iconSettings} alt="" src="/-icon-settings2.svg" />
      <div className={styles.settings}>Settings</div>
      <b className={styles.michaelJackson}>Michael Jackson</b>
      <img className={styles.avatarsIcon} alt="" src="/avatars8.svg" />
      <img className={styles.avatarsIcon1} alt="" src="/avatars9.svg" />
      <img
        className={styles.iconHelpCircle}
        alt=""
        src="/-icon-help-circle2.svg"
      />
      <img className={styles.iconSettings1} alt="" src="/-icon-settings2.svg" />
      <img className={styles.leafIcon} alt="" src="/leaf5.svg" />
      <button className={styles.rectangleParent} onClick={onFrameButtonClick}>
        <div className={styles.frameChild} onClick={onRectangle16Click} />
        <b className={styles.home}>Home</b>
        <img className={styles.homeIcon} alt="" src="/home1.svg" />
      </button>
      <button className={styles.rectangleGroup} onClick={onFrameButton1Click}>
        <div className={styles.frameChild} onClick={onRectangle17Click} />
        <b className={styles.home}>Irrigation</b>
        <img
          className={styles.cloudDrizzleIcon1}
          alt=""
          src="/clouddrizzle10.svg"
        />
      </button>
      <button className={styles.rectangleContainer}>
        <div className={styles.frameInner} />
        <b className={styles.lighting2}>Lighting</b>
        <img className={styles.homeIcon} alt="" src="/sun5.svg" />
      </button>
      <button className={styles.frameButton} onClick={onFrameButton3Click}>
        <div className={styles.frameChild} onClick={onRectangle19Click} />
        <b className={styles.home}>Temperature</b>
        <img
          className={styles.thermometerIcon}
          alt=""
          src="/thermometer5.svg"
        />
      </button>
      <button className={styles.rectangleParent1} onClick={onFrameButton4Click}>
        <div className={styles.frameChild} onClick={onRectangle20Click} />
        <b className={styles.home}>Fruit sorting</b>
        <img className={styles.homeIcon} alt="" src="/heart1.svg" />
      </button>
      <button className={styles.rectangleParent2} onClick={onFrameButton5Click}>
        <div className={styles.frameChild} onClick={onRectangle21Click} />
        <b className={styles.abnormality}>Abnormality</b>
        <img className={styles.frownIcon} alt="" src="/frown.svg" />
      </button>
      <b className={styles.yolofarm}>Yolo:Farm</b>
      <div className={styles.lightingChild12} />
      <div className={styles.lighting3}>Lighting</div>
    </div>
  );
};

export default Lighting;
