import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomeTemperature.module.css";

const HomeTemperature: FunctionComponent = () => {
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

  const onRectangle21Click = useCallback(() => {
    navigate("/irrigation");
  }, [navigate]);

  const onFrameButton7Click = useCallback(() => {
    navigate("/home-lighting");
  }, [navigate]);

  const onRectangle24Click = useCallback(() => {
    navigate("/lighting");
  }, [navigate]);

  const onRectangle25Click = useCallback(() => {
    navigate("/temperature");
  }, [navigate]);

  return (
    <div className={styles.homeTemperature}>
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <div className={styles.homeTemperatureChild} />
      <div className={styles.homeTemperatureItem} />
      <div className={styles.homeTemperatureInner} />
      <b className={styles.michaelJackson}>Michael Jackson</b>
      <div className={styles.rectangleDiv} />
      <b className={styles.detail}>Detail</b>
      <i className={styles.keepingAbove}>Keeping above</i>
      <i className={styles.mlm3}>25ml/m3</i>
      <i className={styles.automatic}>AUTOMATIC</i>
      <img className={styles.menuIcon} alt="" src="/menu.svg" />
      <div className={styles.homeTemperatureChild1} />
      <div className={styles.homeTemperatureChild1} />
      <div className={styles.homeTemperatureChild3} />
      <div className={styles.homeTemperatureChild4} />
      <div className={styles.homeTemperatureChild5} />
      <div className={styles.homeTemperatureChild6} />
      <b className={styles.noRecentActivity}>No recent activity</b>
      <div className={styles.homeTemperatureChild7} />
      <b className={styles.noAbnormalityDetected}>No abnormality detected</b>
      <i className={styles.mlm31}>ml/m3</i>
      <i className={styles.keepingAbove}>Keeping above</i>
      <i className={styles.mlm3}>25ml/m3</i>
      <div className={styles.wm3}>W/m3</div>
      <div className={styles.div}>℃</div>
      <div className={styles.homeTemperatureChild8} />
      <img className={styles.avatarsIcon} alt="" src="/avatars4.svg" />
      <img className={styles.avatarsIcon1} alt="" src="/avatars5.svg" />
      <img
        className={styles.iconHelpCircle}
        alt=""
        src="/-icon-help-circle1.svg"
      />
      <img className={styles.iconSettings} alt="" src="/-icon-settings1.svg" />
      <img className={styles.leafIcon} alt="" src="/leaf3.svg" />
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
          src="/clouddrizzle5.svg"
        />
      </button>
      <button
        className={styles.rectangleContainer}
        onClick={onFrameButton2Click}
      >
        <div className={styles.frameItem} onClick={onRectangle14Click} />
        <b className={styles.irrigation}>Lighting</b>
        <img className={styles.homeIcon} alt="" src="/sun3.svg" />
      </button>
      <button className={styles.frameButton} onClick={onFrameButton3Click}>
        <div className={styles.frameItem} onClick={onRectangle15Click} />
        <b className={styles.irrigation}>Temperature</b>
        <img
          className={styles.thermometerIcon}
          alt=""
          src="/thermometer2.svg"
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
      <div className={styles.homeTemperatureChild9} />
      <div className={styles.lineDiv} />
      <div className={styles.homeTemperatureChild10} />
      <div className={styles.homeTemperatureChild11} />
      <i className={styles.soilMoisture}>Soil moisture</i>
      <div className={styles.homeTemperatureChild12} />
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
      <div className={styles.homeTemperatureChild13} />
      <div className={styles.temperature2}>Temperature</div>
      <img className={styles.menuIcon} alt="" src="/menu.svg" />
      <button className={styles.rectangleParent3} onClick={onFrameButton6Click}>
        <div className={styles.frameChild4} onClick={onRectangle21Click} />
        <b className={styles.detail1}>Detail</b>
        <img className={styles.menuIcon2} alt="" src="/menu.svg" />
      </button>
      <i className={styles.manualIrrigating}>Manual irrigating</i>
      <div className={styles.homeTemperatureChild14} />
      <i className={styles.manualHeating}>Manual heating</i>
      <div className={styles.homeTemperatureChild15} />
      <i className={styles.manualLighting}>Manual lighting</i>
      <b className={styles.detail2}>Detail</b>
      <i className={styles.turnOn}>Turn ON</i>
      <i className={styles.i3}>18:00 - 05:00</i>
      <i className={styles.scheduled}>SCHEDULED</i>
      <button className={styles.rectangleParent4} onClick={onFrameButton7Click}>
        <div className={styles.frameChild4} onClick={onRectangle24Click} />
        <img className={styles.menuIcon2} alt="" src="/menu.svg" />
      </button>
      <div
        className={styles.homeTemperatureChild16}
        onClick={onRectangle25Click}
      />
      <b className={styles.detail3}>Detail</b>
      <i className={styles.inside}>Inside</i>
      <div className={styles.div1}>
        <i>{`10 `}</i>
        <span>- 35℃</span>
      </div>
      <i className={styles.manual}>MANUAL</i>
      <img className={styles.menuIcon4} alt="" src="/menu.svg" />
      <b className={styles.hoChiMinh}>
        Ho Chi Minh city University of Technology
      </b>
      <b className={styles.hanoiVietnam}>Hanoi, Vietnam</b>
      <img className={styles.iconMapPin} alt="" src="/-icon-map-pin.svg" />
      <b className={styles.notifications}>Notifications</b>
      <img className={styles.iconBell} alt="" src="/-icon-bell.svg" />
      <div className={styles.lineChart}>
        <div className={styles.lineChartChild} />
        <img className={styles.xAxisGridIcon} alt="" src="/xaxis-grid30.svg" />
        <img className={styles.xAxisGridIcon1} alt="" src="/xaxis-grid31.svg" />
        <img className={styles.xAxisGridIcon2} alt="" src="/xaxis-grid32.svg" />
        <img className={styles.xAxisGridIcon3} alt="" src="/xaxis-grid33.svg" />
        <img className={styles.xAxisGridIcon4} alt="" src="/xaxis-grid34.svg" />
        <img className={styles.xAxisGridIcon5} alt="" src="/xaxis-grid35.svg" />
        <img className={styles.xAxisGridIcon6} alt="" src="/xaxis-grid36.svg" />
        <img className={styles.xAxisGridIcon7} alt="" src="/xaxis-grid37.svg" />
        <img className={styles.xAxisGridIcon8} alt="" src="/xaxis-grid38.svg" />
        <img className={styles.xAxisGridIcon9} alt="" src="/xaxis-grid39.svg" />
        <img
          className={styles.xAxisGridIcon10}
          alt=""
          src="/xaxis-grid40.svg"
        />
        <img
          className={styles.xAxisGridIcon11}
          alt=""
          src="/xaxis-grid41.svg"
        />
        <img
          className={styles.xAxisGridIcon12}
          alt=""
          src="/xaxis-grid42.svg"
        />
        <img
          className={styles.xAxisGridIcon13}
          alt=""
          src="/xaxis-grid43.svg"
        />
        <img
          className={styles.xAxisGridIcon14}
          alt=""
          src="/xaxis-grid44.svg"
        />
        <img className={styles.yAxisGridIcon} alt="" src="/yaxis-grid8.svg" />
        <img className={styles.yAxisGridIcon1} alt="" src="/yaxis-grid9.svg" />
        <img className={styles.yAxisGridIcon2} alt="" src="/yaxis-grid10.svg" />
        <img className={styles.yAxisGridIcon3} alt="" src="/yaxis-grid11.svg" />
        <img className={styles.yAxisGridIcon} alt="" src="/yaxis-grid8.svg" />
        <img className={styles.xAxisGridIcon} alt="" src="/yaxis2.svg" />
        <div className={styles.div2}>06:00</div>
        <div className={styles.div3}>08:00</div>
        <div className={styles.div4}>10:00</div>
        <div className={styles.div5}>12:00</div>
        <div className={styles.div6}>14:00</div>
        <div className={styles.div7}>16:00</div>
        <div className={styles.div8}>18:00</div>
        <div className={styles.div9}>0</div>
        <div className={styles.div10}>15</div>
        <div className={styles.div11}>30</div>
        <div className={styles.div12}>45</div>
        <img className={styles.lineIcon} alt="" src="/line.svg" />
        <img className={styles.markerIcon} alt="" src="/marker.svg" />
        <img className={styles.markerIcon1} alt="" src="/marker60.svg" />
        <img className={styles.markerIcon2} alt="" src="/marker2.svg" />
        <img className={styles.markerIcon3} alt="" src="/marker3.svg" />
        <img className={styles.markerIcon4} alt="" src="/marker61.svg" />
        <img className={styles.markerIcon5} alt="" src="/marker5.svg" />
        <img className={styles.markerIcon6} alt="" src="/marker6.svg" />
        <img className={styles.markerIcon7} alt="" src="/marker62.svg" />
        <img className={styles.markerIcon8} alt="" src="/marker8.svg" />
        <img className={styles.markerIcon9} alt="" src="/marker63.svg" />
        <img className={styles.markerIcon10} alt="" src="/marker64.svg" />
        <img className={styles.markerIcon11} alt="" src="/marker65.svg" />
        <img className={styles.markerIcon12} alt="" src="/marker12.svg" />
        <img className={styles.markerIcon13} alt="" src="/marker66.svg" />
        <img className={styles.markerIcon14} alt="" src="/marker67.svg" />
        <img className={styles.markerIcon15} alt="" src="/marker15.svg" />
        <img className={styles.markerIcon16} alt="" src="/marker68.svg" />
        <img className={styles.markerIcon17} alt="" src="/marker69.svg" />
        <img className={styles.markerIcon18} alt="" src="/marker70.svg" />
        <img className={styles.markerIcon19} alt="" src="/marker19.svg" />
        <img className={styles.markerIcon20} alt="" src="/marker20.svg" />
        <img className={styles.markerIcon21} alt="" src="/marker21.svg" />
        <img className={styles.markerIcon22} alt="" src="/marker71.svg" />
        <img className={styles.markerIcon23} alt="" src="/marker72.svg" />
        <img className={styles.markerIcon24} alt="" src="/marker73.svg" />
        <img className={styles.markerIcon25} alt="" src="/marker74.svg" />
        <img className={styles.markerIcon26} alt="" src="/marker75.svg" />
        <img className={styles.markerIcon27} alt="" src="/marker27.svg" />
        <img className={styles.markerIcon28} alt="" src="/marker28.svg" />
        <img className={styles.markerIcon29} alt="" src="/marker29.svg" />
      </div>
      <div className={styles.lineChart}>
        <div className={styles.lineChartChild} />
        <img className={styles.xAxisGridIcon} alt="" src="/xaxis-grid30.svg" />
        <img className={styles.xAxisGridIcon1} alt="" src="/xaxis-grid31.svg" />
        <img className={styles.xAxisGridIcon2} alt="" src="/xaxis-grid32.svg" />
        <img className={styles.xAxisGridIcon3} alt="" src="/xaxis-grid33.svg" />
        <img className={styles.xAxisGridIcon4} alt="" src="/xaxis-grid34.svg" />
        <img className={styles.xAxisGridIcon5} alt="" src="/xaxis-grid35.svg" />
        <img className={styles.xAxisGridIcon6} alt="" src="/xaxis-grid36.svg" />
        <img className={styles.xAxisGridIcon7} alt="" src="/xaxis-grid37.svg" />
        <img className={styles.xAxisGridIcon8} alt="" src="/xaxis-grid38.svg" />
        <img className={styles.xAxisGridIcon9} alt="" src="/xaxis-grid39.svg" />
        <img
          className={styles.xAxisGridIcon10}
          alt=""
          src="/xaxis-grid40.svg"
        />
        <img
          className={styles.xAxisGridIcon11}
          alt=""
          src="/xaxis-grid41.svg"
        />
        <img
          className={styles.xAxisGridIcon12}
          alt=""
          src="/xaxis-grid42.svg"
        />
        <img
          className={styles.xAxisGridIcon13}
          alt=""
          src="/xaxis-grid43.svg"
        />
        <img
          className={styles.xAxisGridIcon14}
          alt=""
          src="/xaxis-grid44.svg"
        />
        <img className={styles.yAxisGridIcon} alt="" src="/yaxis-grid8.svg" />
        <img className={styles.yAxisGridIcon1} alt="" src="/yaxis-grid9.svg" />
        <img className={styles.yAxisGridIcon2} alt="" src="/yaxis-grid10.svg" />
        <img className={styles.yAxisGridIcon3} alt="" src="/yaxis-grid11.svg" />
        <img className={styles.yAxisGridIcon} alt="" src="/yaxis-grid8.svg" />
        <img className={styles.xAxisGridIcon} alt="" src="/yaxis2.svg" />
        <div className={styles.div2}>06:00</div>
        <div className={styles.div3}>08:00</div>
        <div className={styles.div4}>10:00</div>
        <div className={styles.div5}>12:00</div>
        <div className={styles.div6}>14:00</div>
        <div className={styles.div7}>16:00</div>
        <div className={styles.div8}>18:00</div>
        <div className={styles.div9}>0</div>
        <div className={styles.div10}>15</div>
        <div className={styles.div11}>30</div>
        <div className={styles.div12}>45</div>
        <img className={styles.lineIcon} alt="" src="/line.svg" />
        <img className={styles.markerIcon} alt="" src="/marker.svg" />
        <img className={styles.markerIcon1} alt="" src="/marker60.svg" />
        <img className={styles.markerIcon2} alt="" src="/marker2.svg" />
        <img className={styles.markerIcon3} alt="" src="/marker3.svg" />
        <img className={styles.markerIcon4} alt="" src="/marker61.svg" />
        <img className={styles.markerIcon5} alt="" src="/marker5.svg" />
        <img className={styles.markerIcon6} alt="" src="/marker6.svg" />
        <img className={styles.markerIcon7} alt="" src="/marker62.svg" />
        <img className={styles.markerIcon8} alt="" src="/marker8.svg" />
        <img className={styles.markerIcon9} alt="" src="/marker63.svg" />
        <img className={styles.markerIcon10} alt="" src="/marker64.svg" />
        <img className={styles.markerIcon11} alt="" src="/marker65.svg" />
        <img className={styles.markerIcon12} alt="" src="/marker12.svg" />
        <img className={styles.markerIcon13} alt="" src="/marker66.svg" />
        <img className={styles.markerIcon14} alt="" src="/marker67.svg" />
        <img className={styles.markerIcon15} alt="" src="/marker15.svg" />
        <img className={styles.markerIcon16} alt="" src="/marker68.svg" />
        <img className={styles.markerIcon17} alt="" src="/marker69.svg" />
        <img className={styles.markerIcon18} alt="" src="/marker70.svg" />
        <img className={styles.markerIcon19} alt="" src="/marker19.svg" />
        <img className={styles.markerIcon20} alt="" src="/marker20.svg" />
        <img className={styles.markerIcon21} alt="" src="/marker21.svg" />
        <img className={styles.markerIcon22} alt="" src="/marker71.svg" />
        <img className={styles.markerIcon23} alt="" src="/marker72.svg" />
        <img className={styles.markerIcon24} alt="" src="/marker73.svg" />
        <img className={styles.markerIcon25} alt="" src="/marker74.svg" />
        <img className={styles.markerIcon26} alt="" src="/marker75.svg" />
        <img className={styles.markerIcon27} alt="" src="/marker27.svg" />
        <img className={styles.markerIcon28} alt="" src="/marker28.svg" />
        <img className={styles.markerIcon29} alt="" src="/marker29.svg" />
      </div>
      <img className={styles.ellipseIcon} alt="" src="/ellipse-89.svg" />
      <div className={styles.undetected}>undetected</div>
      <img
        className={styles.homeTemperatureChild17}
        alt=""
        src="/ellipse-87.svg"
      />
      <div className={styles.ripe}>ripe</div>
      <img
        className={styles.homeTemperatureChild18}
        alt=""
        src="/ellipse-88.svg"
      />
      <div className={styles.unripe}>Unripe</div>
      <img
        className={styles.homeTemperatureChild19}
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
        <img className={styles.icon} alt="" src="/1001.svg" />
        <img className={styles.icon1} alt="" src="/8751.svg" />
        <img className={styles.icon2} alt="" src="/7501.svg" />
        <img className={styles.icon} alt="" src="/6251.svg" />
        <img className={styles.icon4} alt="" src="/5001.svg" />
        <img
          className={styles.itemspiePiecePurple}
          alt=""
          src="/-itemspie-piece-purple1.svg"
        />
        <img className={styles.icon5} alt="" src="/2501.svg" />
        <img className={styles.icon6} alt="" src="/1251.svg" />
      </div>
      <img
        className={styles.homeTemperatureChild20}
        alt=""
        src="/ellipse-91.svg"
      />
      <img
        className={styles.homeTemperatureChild21}
        alt=""
        src="/ellipse-90.svg"
      />
      <i className={styles.i4}>40%</i>
      <i className={styles.i5}>120.000</i>
      <i className={styles.overall300000}>Overall: 300.000</i>
      <i className={styles.i6}>180.000</i>
      <i className={styles.nonRipeFruits1}>Non-Ripe fruits</i>
      <img
        className={styles.homeTemperatureChild22}
        alt=""
        src="/ellipse-92.svg"
      />
      <img
        className={styles.homeTemperatureChild23}
        alt=""
        src="/ellipse-93.svg"
      />
      <i className={styles.i7}>60%</i>
      <div className={styles.homeTemperatureChild24} />
      <div className={styles.noResponseFrom}>No response from Sensor. 3</div>
      <div className={styles.seeMore}>See more</div>
      <div className={styles.homeTemperatureChild25} />
      <div className={styles.abnormalityDetected}>Abnormality detected</div>
      <div className={styles.seeMore1}>See more</div>
      <img className={styles.alertOctagonIcon} alt="" src="/alertoctagon.svg" />
      <div className={styles.homeTemperatureChild26} />
      <div className={styles.abnormalityDetected1}>Abnormality detected</div>
      <div className={styles.seeMore2}>See more</div>
      <img
        className={styles.alertOctagonIcon1}
        alt=""
        src="/alertoctagon.svg"
      />
      <div className={styles.homeTemperatureChild27} />
      <div className={styles.aNewUpdate}>A new Update is available</div>
      <div className={styles.updateNow}>Update now</div>
      <img
        className={styles.arrowUpCircleIcon}
        alt=""
        src="/arrowupcircle.svg"
      />
      <img className={styles.wifiOffIcon} alt="" src="/wifioff2.svg" />
      <div className={styles.homeTemperatureChild28} />
      <div className={styles.moistureIsHigher}>
        Moisture is higher than permissible level
      </div>
      <div className={styles.seeMore3}>See more</div>
      <div className={styles.updateNow1}>Update now</div>
      <div className={styles.home1}>Home</div>
      <img
        className={styles.cloudDrizzleIcon1}
        alt=""
        src="/clouddrizzle6.svg"
      />
      <i className={styles.i8}>16:08 - 20/03/2023</i>
      <i className={styles.i9}>12:25 - 20/03/2023</i>
      <i className={styles.i10}>11:48 - 20/03/2023</i>
      <i className={styles.i11}>20:55 - 19/03/2023</i>
      <i className={styles.i12}>17:55 - 19/03/2023</i>
      <img className={styles.thermometerIcon1} alt="" src="/thermometer3.svg" />
    </div>
  );
};

export default HomeTemperature;
