import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomeLighting.module.css";

const HomeLighting: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameButton1Click = useCallback(() => {
    navigate("/irrigation");
  }, [navigate]);

  const onRectangle13Click = useCallback(() => {
    navigate("/irrigation");
  }, [navigate]);

  const onFrameButton2Click = useCallback(() => {
    navigate("/lighting");
  }, [navigate]);

  const onRectangle14Click = useCallback(() => {
    navigate("/lighting");
  }, [navigate]);

  const onFrameButton3Click = useCallback(() => {
    navigate("/temperature");
  }, [navigate]);

  const onRectangle15Click = useCallback(() => {
    navigate("/temperature");
  }, [navigate]);

  const onFrameButton4Click = useCallback(() => {
    navigate("/fruit-sorting");
  }, [navigate]);

  const onRectangle16Click = useCallback(() => {
    navigate("/fruit-sorting");
  }, [navigate]);

  const onFrameButton5Click = useCallback(() => {
    navigate("/abnormality");
  }, [navigate]);

  const onRectangle17Click = useCallback(() => {
    navigate("/abnormality");
  }, [navigate]);

  const onFrameButton6Click = useCallback(() => {
    navigate("/home-irrigation");
  }, [navigate]);

  const onRectangle22Click = useCallback(() => {
    navigate("/irrigation");
  }, [navigate]);

  const onRectangle25Click = useCallback(() => {
    navigate("/lighting");
  }, [navigate]);

  const onFrameButton8Click = useCallback(() => {
    navigate("/home-temperature");
  }, [navigate]);

  const onRectangle26Click = useCallback(() => {
    navigate("/temperature");
  }, [navigate]);

  return (
    <div className={styles.homeLighting}>
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <div className={styles.homeLightingChild} />
      <div className={styles.homeLightingItem} />
      <div className={styles.homeLightingInner} />
      <b className={styles.michaelJackson}>Michael Jackson</b>
      <div className={styles.rectangleDiv} />
      <b className={styles.detail}>Detail</b>
      <i className={styles.keepingAbove}>Keeping above</i>
      <i className={styles.mlm3}>25ml/m3</i>
      <i className={styles.automatic}>AUTOMATIC</i>
      <img className={styles.menuIcon} alt="" src="/menu.svg" />
      <div className={styles.homeLightingChild1} />
      <div className={styles.homeLightingChild1} />
      <div className={styles.homeLightingChild3} />
      <div className={styles.homeLightingChild4} />
      <div className={styles.homeLightingChild5} />
      <div className={styles.homeLightingChild6} />
      <b className={styles.noRecentActivity}>No recent activity</b>
      <div className={styles.homeLightingChild7} />
      <b className={styles.noAbnormalityDetected}>No abnormality detected</b>
      <i className={styles.mlm31}>ml/m3</i>
      <i className={styles.keepingAbove}>Keeping above</i>
      <i className={styles.mlm3}>25ml/m3</i>
      <div className={styles.wm3}>W/m3</div>
      <div className={styles.div}>℃</div>
      <div className={styles.homeLightingChild8} />
      <img className={styles.avatarsIcon} alt="" src="/avatars2.svg" />
      <img className={styles.avatarsIcon1} alt="" src="/avatars3.svg" />
      <img
        className={styles.iconHelpCircle}
        alt=""
        src="/-icon-help-circle1.svg"
      />
      <img className={styles.iconSettings} alt="" src="/-icon-settings1.svg" />
      <img className={styles.leafIcon} alt="" src="/leaf2.svg" />
      <button className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <b className={styles.home}>Home</b>
        <img className={styles.homeIcon} alt="" src="/home.svg" />
      </button>
      <button className={styles.rectangleGroup} onClick={onFrameButton1Click}>
        <div className={styles.frameItem} onClick={onRectangle13Click} />
        <b className={styles.irrigation}>Irrigation</b>
        <img
          className={styles.cloudDrizzleIcon}
          alt=""
          src="/clouddrizzle3.svg"
        />
      </button>
      <button
        className={styles.rectangleContainer}
        onClick={onFrameButton2Click}
      >
        <div className={styles.frameItem} onClick={onRectangle14Click} />
        <b className={styles.irrigation}>Lighting</b>
        <img className={styles.homeIcon} alt="" src="/sun1.svg" />
      </button>
      <button className={styles.frameButton} onClick={onFrameButton3Click}>
        <div className={styles.frameItem} onClick={onRectangle15Click} />
        <b className={styles.irrigation}>Temperature</b>
        <img
          className={styles.thermometerIcon}
          alt=""
          src="/thermometer1.svg"
        />
      </button>
      <button className={styles.rectangleParent1} onClick={onFrameButton4Click}>
        <div className={styles.frameItem} onClick={onRectangle16Click} />
        <b className={styles.irrigation}>Fruit sorting</b>
        <img className={styles.homeIcon} alt="" src="/heart.svg" />
      </button>
      <button className={styles.rectangleParent2} onClick={onFrameButton5Click}>
        <div className={styles.frameItem} onClick={onRectangle17Click} />
        <b className={styles.abnormality}>Abnormality</b>
        <img className={styles.frownIcon} alt="" src="/frown.svg" />
      </button>
      <b className={styles.yolofarm}>Yolo:Farm</b>
      <div className={styles.homeLightingChild9} />
      <div className={styles.lineDiv} />
      <div className={styles.homeLightingChild10} />
      <div className={styles.homeLightingChild11} />
      <i className={styles.soilMoisture}>Soil moisture</i>
      <div className={styles.homeLightingChild12} />
      <div className={styles.lineChart}>
        <div className={styles.lineChartChild} />
        <img className={styles.xAxisGridIcon} alt="" src="/xaxis-grid15.svg" />
        <img className={styles.xAxisGridIcon1} alt="" src="/xaxis-grid16.svg" />
        <img className={styles.xAxisGridIcon2} alt="" src="/xaxis-grid17.svg" />
        <img className={styles.xAxisGridIcon3} alt="" src="/xaxis-grid18.svg" />
        <img className={styles.xAxisGridIcon4} alt="" src="/xaxis-grid19.svg" />
        <img className={styles.xAxisGridIcon5} alt="" src="/xaxis-grid20.svg" />
        <img className={styles.xAxisGridIcon6} alt="" src="/xaxis-grid21.svg" />
        <img className={styles.xAxisGridIcon7} alt="" src="/xaxis-grid22.svg" />
        <img className={styles.xAxisGridIcon8} alt="" src="/xaxis-grid23.svg" />
        <img className={styles.xAxisGridIcon9} alt="" src="/xaxis-grid24.svg" />
        <img
          className={styles.xAxisGridIcon10}
          alt=""
          src="/xaxis-grid25.svg"
        />
        <img
          className={styles.xAxisGridIcon11}
          alt=""
          src="/xaxis-grid26.svg"
        />
        <img
          className={styles.xAxisGridIcon12}
          alt=""
          src="/xaxis-grid27.svg"
        />
        <img
          className={styles.xAxisGridIcon13}
          alt=""
          src="/xaxis-grid28.svg"
        />
        <img
          className={styles.xAxisGridIcon14}
          alt=""
          src="/xaxis-grid29.svg"
        />
        <img className={styles.yAxisGridIcon} alt="" src="/yaxis-grid4.svg" />
        <img className={styles.yAxisGridIcon1} alt="" src="/yaxis-grid5.svg" />
        <img className={styles.yAxisGridIcon2} alt="" src="/yaxis-grid6.svg" />
        <img className={styles.yAxisGridIcon3} alt="" src="/yaxis-grid7.svg" />
        <img className={styles.yAxisGridIcon} alt="" src="/yaxis-grid4.svg" />
        <img className={styles.xAxisGridIcon} alt="" src="/yaxis1.svg" />
        <div className={styles.div1}>06:00</div>
        <div className={styles.div2}>08:00</div>
        <div className={styles.div3}>10:00</div>
        <div className={styles.div4}>12:00</div>
        <div className={styles.div5}>14:00</div>
        <div className={styles.div6}>16:00</div>
        <div className={styles.div7}>18:00</div>
        <div className={styles.div8}>0</div>
        <div className={styles.div9}>60</div>
        <div className={styles.div10}>120</div>
        <div className={styles.div11}>180</div>
        <img className={styles.lineIcon} alt="" src="/line1.svg" />
        <img className={styles.markerIcon} alt="" src="/marker30.svg" />
        <img className={styles.markerIcon1} alt="" src="/marker31.svg" />
        <img className={styles.markerIcon2} alt="" src="/marker32.svg" />
        <img className={styles.markerIcon3} alt="" src="/marker33.svg" />
        <img className={styles.markerIcon4} alt="" src="/marker34.svg" />
        <img className={styles.markerIcon5} alt="" src="/marker35.svg" />
        <img className={styles.markerIcon6} alt="" src="/marker36.svg" />
        <img className={styles.markerIcon7} alt="" src="/marker37.svg" />
        <img className={styles.markerIcon8} alt="" src="/marker38.svg" />
        <img className={styles.markerIcon9} alt="" src="/marker39.svg" />
        <img className={styles.markerIcon10} alt="" src="/marker40.svg" />
        <img className={styles.markerIcon11} alt="" src="/marker41.svg" />
        <img className={styles.markerIcon12} alt="" src="/marker42.svg" />
        <img className={styles.markerIcon13} alt="" src="/marker43.svg" />
        <img className={styles.markerIcon14} alt="" src="/marker44.svg" />
        <img className={styles.markerIcon15} alt="" src="/marker45.svg" />
        <img className={styles.markerIcon16} alt="" src="/marker46.svg" />
        <img className={styles.markerIcon17} alt="" src="/marker47.svg" />
        <img className={styles.markerIcon18} alt="" src="/marker48.svg" />
        <img className={styles.markerIcon19} alt="" src="/marker49.svg" />
        <img className={styles.markerIcon20} alt="" src="/marker50.svg" />
        <img className={styles.markerIcon21} alt="" src="/marker51.svg" />
        <img className={styles.markerIcon22} alt="" src="/marker52.svg" />
        <img className={styles.markerIcon23} alt="" src="/marker53.svg" />
        <img className={styles.markerIcon24} alt="" src="/marker54.svg" />
        <img className={styles.markerIcon25} alt="" src="/marker55.svg" />
        <img className={styles.markerIcon26} alt="" src="/marker56.svg" />
        <img className={styles.markerIcon27} alt="" src="/marker57.svg" />
        <img className={styles.markerIcon28} alt="" src="/marker58.svg" />
        <img className={styles.markerIcon29} alt="" src="/marker59.svg" />
      </div>
      <i className={styles.nonRipeFruits}>Non-Ripe fruits</i>
      <i className={styles.automatic}>AUTOMATIC</i>
      <i className={styles.i}>30</i>
      <i className={styles.i1}>162</i>
      <i className={styles.i2}>27</i>
      <i className={styles.lighting1}>Lighting</i>
      <i className={styles.temperature1}>Temperature</i>
      <b className={styles.graph}>Graph</b>
      <b className={styles.fruitSorting1}>Fruit sorting</b>
      <b className={styles.logActivities}>Log activities</b>
      <b className={styles.abnormality1}>Abnormality</b>
      <div className={styles.homeLightingChild13} />
      <div className={styles.lighting2}>Lighting</div>
      <img className={styles.menuIcon} alt="" src="/menu.svg" />
      <button className={styles.rectangleParent3} onClick={onFrameButton6Click}>
        <div className={styles.frameChild4} onClick={onRectangle22Click} />
        <b className={styles.detail1}>Detail</b>
        <img className={styles.menuIcon2} alt="" src="/menu.svg" />
      </button>
      <i className={styles.manualIrrigating}>Manual irrigating</i>
      <div className={styles.homeLightingChild14} />
      <i className={styles.manualHeating}>Manual heating</i>
      <div className={styles.homeLightingChild15} />
      <i className={styles.manualLighting}>Manual lighting</i>
      <i className={styles.turnOn}>Turn ON</i>
      <i className={styles.i3}>18:00 - 05:00</i>
      <i className={styles.scheduled}>SCHEDULED</i>
      <button className={styles.rectangleParent4}>
        <div className={styles.frameChild4} onClick={onRectangle25Click} />
        <b className={styles.detail1}>Detail</b>
        <img className={styles.menuIcon2} alt="" src="/menu.svg" />
      </button>
      <i className={styles.inside}>Inside</i>
      <div className={styles.div12}>
        <i>{`10 `}</i>
        <span>- 35℃</span>
      </div>
      <i className={styles.manual}>MANUAL</i>
      <button className={styles.rectangleParent5} onClick={onFrameButton8Click}>
        <div className={styles.frameChild4} onClick={onRectangle26Click} />
        <b className={styles.detail1}>Detail</b>
        <img className={styles.menuIcon2} alt="" src="/menu.svg" />
      </button>
      <b className={styles.hoChiMinh}>
        Ho Chi Minh city University of Technology
      </b>
      <b className={styles.hanoiVietnam}>Hanoi, Vietnam</b>
      <img className={styles.iconMapPin} alt="" src="/-icon-map-pin.svg" />
      <b className={styles.notifications}>Notifications</b>
      <img className={styles.iconBell} alt="" src="/-icon-bell.svg" />
      <img className={styles.ellipseIcon} alt="" src="/ellipse-89.svg" />
      <div className={styles.undetected}>undetected</div>
      <img
        className={styles.homeLightingChild16}
        alt=""
        src="/ellipse-87.svg"
      />
      <div className={styles.ripe}>ripe</div>
      <img
        className={styles.homeLightingChild17}
        alt=""
        src="/ellipse-88.svg"
      />
      <div className={styles.unripe}>Unripe</div>
      <img
        className={styles.homeLightingChild18}
        alt=""
        src="/ellipse-86.svg"
      />
      <div className={styles.halfRipe}>half-ripe</div>
      <div className={styles.pieBlue}>
        <div className={styles.colorsPrimary}>
          <div className={styles.bgPrimary} />
        </div>
        <div className={styles.value}>
          <b className={styles.overline}>0</b>
        </div>
        <img className={styles.icon} alt="" src="/100.svg" />
        <img className={styles.icon1} alt="" src="/875.svg" />
        <img className={styles.icon2} alt="" src="/750.svg" />
        <img className={styles.icon} alt="" src="/625.svg" />
        <img className={styles.icon4} alt="" src="/500.svg" />
        <img
          className={styles.itemspiePiecePurple}
          alt=""
          src="/-itemspie-piece-purple.svg"
        />
        <img className={styles.icon5} alt="" src="/250.svg" />
        <img className={styles.icon6} alt="" src="/125.svg" />
      </div>
      <img
        className={styles.homeLightingChild19}
        alt=""
        src="/ellipse-91.svg"
      />
      <img
        className={styles.homeLightingChild20}
        alt=""
        src="/ellipse-901.svg"
      />
      <i className={styles.i4}>40%</i>
      <i className={styles.i5}>120.000</i>
      <i className={styles.overall300000}>Overall: 300.000</i>
      <i className={styles.i6}>180.000</i>
      <i className={styles.nonRipeFruits1}>Non-Ripe fruits</i>
      <img
        className={styles.homeLightingChild21}
        alt=""
        src="/ellipse-92.svg"
      />
      <img
        className={styles.homeLightingChild22}
        alt=""
        src="/ellipse-931.svg"
      />
      <i className={styles.i7}>60%</i>
      <div className={styles.homeLightingChild23} />
      <div className={styles.noResponseFrom}>No response from Sensor. 3</div>
      <div className={styles.seeMore}>See more</div>
      <div className={styles.homeLightingChild24} />
      <div className={styles.abnormalityDetected}>Abnormality detected</div>
      <div className={styles.seeMore1}>See more</div>
      <img className={styles.alertOctagonIcon} alt="" src="/alertoctagon.svg" />
      <div className={styles.homeLightingChild25} />
      <div className={styles.abnormalityDetected1}>Abnormality detected</div>
      <div className={styles.seeMore2}>See more</div>
      <img
        className={styles.alertOctagonIcon1}
        alt=""
        src="/alertoctagon.svg"
      />
      <div className={styles.homeLightingChild26} />
      <div className={styles.aNewUpdate}>A new Update is available</div>
      <div className={styles.updateNow}>Update now</div>
      <img
        className={styles.arrowUpCircleIcon}
        alt=""
        src="/arrowupcircle.svg"
      />
      <img className={styles.wifiOffIcon} alt="" src="/wifioff1.svg" />
      <div className={styles.homeLightingChild27} />
      <div className={styles.moistureIsHigher}>
        Moisture is higher than permissible level
      </div>
      <div className={styles.seeMore3}>See more</div>
      <div className={styles.updateNow1}>Update now</div>
      <div className={styles.home1}>Home</div>
      <img
        className={styles.cloudDrizzleIcon1}
        alt=""
        src="/clouddrizzle4.svg"
      />
      <i className={styles.i8}>16:08 - 20/03/2023</i>
      <i className={styles.i9}>12:25 - 20/03/2023</i>
      <i className={styles.i10}>11:48 - 20/03/2023</i>
      <i className={styles.i11}>20:55 - 19/03/2023</i>
      <i className={styles.i12}>17:55 - 19/03/2023</i>
      <img className={styles.sunIcon1} alt="" src="/sun2.svg" />
    </div>
  );
};

export default HomeLighting;
