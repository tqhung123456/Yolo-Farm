import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomeIrrigation.module.css";

const HomeIrrigation: FunctionComponent = () => {
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

  const onRectangle21Click = useCallback(() => {
    navigate("/irrigation");
  }, [navigate]);

  const onFrameButton6Click = useCallback(() => {
    navigate("/home-lighting");
  }, [navigate]);

  const onRectangle24Click = useCallback(() => {
    navigate("/lighting");
  }, [navigate]);

  const onFrameButton7Click = useCallback(() => {
    navigate("/home-temperature");
  }, [navigate]);

  const onRectangle25Click = useCallback(() => {
    navigate("/temperature");
  }, [navigate]);

  return (
    <div className={styles.homeIrrigation}>
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <div className={styles.homeIrrigationChild} />
      <div className={styles.homeIrrigationItem} />
      <div className={styles.homeIrrigationInner} />
      <b className={styles.michaelJackson}>Michael Jackson</b>
      <div className={styles.rectangleDiv} />
      <b className={styles.detail}>Detail</b>
      <i className={styles.keepingAbove}>Keeping above</i>
      <i className={styles.mlm3}>25ml/m3</i>
      <i className={styles.automatic}>AUTOMATIC</i>
      <img className={styles.menuIcon} alt="" src="/menu.svg" />
      <div className={styles.homeIrrigationChild1} />
      <div className={styles.homeIrrigationChild1} />
      <div className={styles.homeIrrigationChild3} />
      <div className={styles.homeIrrigationChild4} />
      <div className={styles.homeIrrigationChild5} />
      <div className={styles.homeIrrigationChild6} />
      <b className={styles.noRecentActivity}>No recent activity</b>
      <div className={styles.homeIrrigationChild7} />
      <b className={styles.noAbnormalityDetected}>No abnormality detected</b>
      <i className={styles.mlm31}>ml/m3</i>
      <i className={styles.keepingAbove}>Keeping above</i>
      <i className={styles.mlm3}>25ml/m3</i>
      <div className={styles.wm3}>W/m3</div>
      <div className={styles.div}>℃</div>
      <div className={styles.homeIrrigationChild8} />
      <img className={styles.avatarsIcon} alt="" src="/avatars.svg" />
      <img className={styles.avatarsIcon1} alt="" src="/avatars1.svg" />
      <img
        className={styles.iconHelpCircle}
        alt=""
        src="/-icon-help-circle.svg"
      />
      <img className={styles.iconSettings} alt="" src="/-icon-settings.svg" />
      <img className={styles.leafIcon} alt="" src="/leaf1.svg" />
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
          src="/clouddrizzle.svg"
        />
      </button>
      <button
        className={styles.rectangleContainer}
        onClick={onFrameButton2Click}
      >
        <div className={styles.frameItem} onClick={onRectangle14Click} />
        <b className={styles.irrigation}>Lighting</b>
        <img className={styles.homeIcon} alt="" src="/sun.svg" />
      </button>
      <button className={styles.frameButton} onClick={onFrameButton3Click}>
        <div className={styles.frameItem} onClick={onRectangle15Click} />
        <b className={styles.irrigation}>Temperature</b>
        <img className={styles.thermometerIcon} alt="" src="/thermometer.svg" />
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
      <div className={styles.homeIrrigationChild9} />
      <div className={styles.lineDiv} />
      <div className={styles.homeIrrigationChild10} />
      <div className={styles.homeIrrigationChild11} />
      <i className={styles.soilMoisture}>Soil moisture</i>
      <div className={styles.homeIrrigationChild12} />
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
      <div className={styles.homeIrrigationChild13} />
      <div className={styles.soilMoisture1}>Soil moisture</div>
      <img
        className={styles.cloudDrizzleIcon1}
        alt=""
        src="/clouddrizzle1.svg"
      />
      <img className={styles.menuIcon} alt="" src="/menu.svg" />
      <div className={styles.frameDiv}>
        <div className={styles.frameChild4} onClick={onRectangle21Click} />
        <b className={styles.detail1}>Detail</b>
        <img className={styles.menuIcon2} alt="" src="/menu.svg" />
      </div>
      <i className={styles.manualIrrigating}>Manual irrigating</i>
      <div className={styles.homeIrrigationChild14} />
      <i className={styles.manualHeating}>Manual heating</i>
      <div className={styles.homeIrrigationChild15} />
      <i className={styles.manualLighting}>Manual lighting</i>
      <i className={styles.turnOn}>Turn ON</i>
      <i className={styles.i3}>18:00 - 05:00</i>
      <i className={styles.scheduled}>SCHEDULED</i>
      <button className={styles.rectangleParent3} onClick={onFrameButton6Click}>
        <div className={styles.frameChild4} onClick={onRectangle24Click} />
        <b className={styles.detail2}>Detail</b>
        <img className={styles.menuIcon2} alt="" src="/menu.svg" />
      </button>
      <i className={styles.inside}>Inside</i>
      <div className={styles.div1}>
        <i>{`10 `}</i>
        <span>- 35℃</span>
      </div>
      <i className={styles.manual}>MANUAL</i>
      <button className={styles.rectangleParent4} onClick={onFrameButton7Click}>
        <div className={styles.frameChild4} onClick={onRectangle25Click} />
        <b className={styles.detail2}>Detail</b>
        <img className={styles.menuIcon2} alt="" src="/menu.svg" />
      </button>
      <b className={styles.hoChiMinh}>
        Ho Chi Minh city University of Technology
      </b>
      <b className={styles.hanoiVietnam}>Hanoi, Vietnam</b>
      <img className={styles.iconMapPin} alt="" src="/-icon-map-pin.svg" />
      <b className={styles.notifications}>Notifications</b>
      <img className={styles.iconBell} alt="" src="/-icon-bell.svg" />
      <div className={styles.lineChart}>
        <div className={styles.lineChartChild} />
        <img className={styles.xAxisGridIcon} alt="" src="/xaxis-grid.svg" />
        <img className={styles.xAxisGridIcon1} alt="" src="/xaxis-grid1.svg" />
        <img className={styles.xAxisGridIcon2} alt="" src="/xaxis-grid2.svg" />
        <img className={styles.xAxisGridIcon3} alt="" src="/xaxis-grid3.svg" />
        <img className={styles.xAxisGridIcon4} alt="" src="/xaxis-grid4.svg" />
        <img className={styles.xAxisGridIcon5} alt="" src="/xaxis-grid5.svg" />
        <img className={styles.xAxisGridIcon6} alt="" src="/xaxis-grid6.svg" />
        <img className={styles.xAxisGridIcon7} alt="" src="/xaxis-grid7.svg" />
        <img className={styles.xAxisGridIcon8} alt="" src="/xaxis-grid8.svg" />
        <img className={styles.xAxisGridIcon9} alt="" src="/xaxis-grid9.svg" />
        <img
          className={styles.xAxisGridIcon10}
          alt=""
          src="/xaxis-grid10.svg"
        />
        <img
          className={styles.xAxisGridIcon11}
          alt=""
          src="/xaxis-grid11.svg"
        />
        <img
          className={styles.xAxisGridIcon12}
          alt=""
          src="/xaxis-grid12.svg"
        />
        <img
          className={styles.xAxisGridIcon13}
          alt=""
          src="/xaxis-grid13.svg"
        />
        <img
          className={styles.xAxisGridIcon14}
          alt=""
          src="/xaxis-grid14.svg"
        />
        <img className={styles.yAxisGridIcon} alt="" src="/yaxis-grid.svg" />
        <img className={styles.yAxisGridIcon1} alt="" src="/yaxis-grid1.svg" />
        <img className={styles.yAxisGridIcon2} alt="" src="/yaxis-grid2.svg" />
        <img className={styles.yAxisGridIcon3} alt="" src="/yaxis-grid3.svg" />
        <img className={styles.yAxisGridIcon} alt="" src="/yaxis-grid.svg" />
        <img className={styles.xAxisGridIcon} alt="" src="/yaxis.svg" />
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
        <img className={styles.markerIcon1} alt="" src="/marker1.svg" />
        <img className={styles.markerIcon2} alt="" src="/marker2.svg" />
        <img className={styles.markerIcon3} alt="" src="/marker3.svg" />
        <img className={styles.markerIcon4} alt="" src="/marker4.svg" />
        <img className={styles.markerIcon5} alt="" src="/marker5.svg" />
        <img className={styles.markerIcon6} alt="" src="/marker6.svg" />
        <img className={styles.markerIcon7} alt="" src="/marker7.svg" />
        <img className={styles.markerIcon8} alt="" src="/marker8.svg" />
        <img className={styles.markerIcon9} alt="" src="/marker9.svg" />
        <img className={styles.markerIcon10} alt="" src="/marker10.svg" />
        <img className={styles.markerIcon11} alt="" src="/marker11.svg" />
        <img className={styles.markerIcon12} alt="" src="/marker12.svg" />
        <img className={styles.markerIcon13} alt="" src="/marker13.svg" />
        <img className={styles.markerIcon14} alt="" src="/marker14.svg" />
        <img className={styles.markerIcon15} alt="" src="/marker15.svg" />
        <img className={styles.markerIcon16} alt="" src="/marker16.svg" />
        <img className={styles.markerIcon17} alt="" src="/marker17.svg" />
        <img className={styles.markerIcon18} alt="" src="/marker18.svg" />
        <img className={styles.markerIcon19} alt="" src="/marker19.svg" />
        <img className={styles.markerIcon20} alt="" src="/marker20.svg" />
        <img className={styles.markerIcon21} alt="" src="/marker21.svg" />
        <img className={styles.markerIcon22} alt="" src="/marker22.svg" />
        <img className={styles.markerIcon23} alt="" src="/marker23.svg" />
        <img className={styles.markerIcon24} alt="" src="/marker24.svg" />
        <img className={styles.markerIcon25} alt="" src="/marker25.svg" />
        <img className={styles.markerIcon26} alt="" src="/marker26.svg" />
        <img className={styles.markerIcon27} alt="" src="/marker27.svg" />
        <img className={styles.markerIcon28} alt="" src="/marker28.svg" />
        <img className={styles.markerIcon29} alt="" src="/marker29.svg" />
      </div>
      <div className={styles.lineChart}>
        <div className={styles.lineChartChild} />
        <img className={styles.xAxisGridIcon} alt="" src="/xaxis-grid.svg" />
        <img className={styles.xAxisGridIcon1} alt="" src="/xaxis-grid1.svg" />
        <img className={styles.xAxisGridIcon2} alt="" src="/xaxis-grid2.svg" />
        <img className={styles.xAxisGridIcon3} alt="" src="/xaxis-grid3.svg" />
        <img className={styles.xAxisGridIcon4} alt="" src="/xaxis-grid4.svg" />
        <img className={styles.xAxisGridIcon5} alt="" src="/xaxis-grid5.svg" />
        <img className={styles.xAxisGridIcon6} alt="" src="/xaxis-grid6.svg" />
        <img className={styles.xAxisGridIcon7} alt="" src="/xaxis-grid7.svg" />
        <img className={styles.xAxisGridIcon8} alt="" src="/xaxis-grid8.svg" />
        <img className={styles.xAxisGridIcon9} alt="" src="/xaxis-grid9.svg" />
        <img
          className={styles.xAxisGridIcon10}
          alt=""
          src="/xaxis-grid10.svg"
        />
        <img
          className={styles.xAxisGridIcon11}
          alt=""
          src="/xaxis-grid11.svg"
        />
        <img
          className={styles.xAxisGridIcon12}
          alt=""
          src="/xaxis-grid12.svg"
        />
        <img
          className={styles.xAxisGridIcon13}
          alt=""
          src="/xaxis-grid13.svg"
        />
        <img
          className={styles.xAxisGridIcon14}
          alt=""
          src="/xaxis-grid14.svg"
        />
        <img className={styles.yAxisGridIcon} alt="" src="/yaxis-grid.svg" />
        <img className={styles.yAxisGridIcon1} alt="" src="/yaxis-grid1.svg" />
        <img className={styles.yAxisGridIcon2} alt="" src="/yaxis-grid2.svg" />
        <img className={styles.yAxisGridIcon3} alt="" src="/yaxis-grid3.svg" />
        <img className={styles.yAxisGridIcon} alt="" src="/yaxis-grid.svg" />
        <img className={styles.xAxisGridIcon} alt="" src="/yaxis.svg" />
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
        <img className={styles.markerIcon1} alt="" src="/marker1.svg" />
        <img className={styles.markerIcon2} alt="" src="/marker2.svg" />
        <img className={styles.markerIcon3} alt="" src="/marker3.svg" />
        <img className={styles.markerIcon4} alt="" src="/marker4.svg" />
        <img className={styles.markerIcon5} alt="" src="/marker5.svg" />
        <img className={styles.markerIcon6} alt="" src="/marker6.svg" />
        <img className={styles.markerIcon7} alt="" src="/marker7.svg" />
        <img className={styles.markerIcon8} alt="" src="/marker8.svg" />
        <img className={styles.markerIcon9} alt="" src="/marker9.svg" />
        <img className={styles.markerIcon10} alt="" src="/marker10.svg" />
        <img className={styles.markerIcon11} alt="" src="/marker11.svg" />
        <img className={styles.markerIcon12} alt="" src="/marker12.svg" />
        <img className={styles.markerIcon13} alt="" src="/marker13.svg" />
        <img className={styles.markerIcon14} alt="" src="/marker14.svg" />
        <img className={styles.markerIcon15} alt="" src="/marker15.svg" />
        <img className={styles.markerIcon16} alt="" src="/marker16.svg" />
        <img className={styles.markerIcon17} alt="" src="/marker17.svg" />
        <img className={styles.markerIcon18} alt="" src="/marker18.svg" />
        <img className={styles.markerIcon19} alt="" src="/marker19.svg" />
        <img className={styles.markerIcon20} alt="" src="/marker20.svg" />
        <img className={styles.markerIcon21} alt="" src="/marker21.svg" />
        <img className={styles.markerIcon22} alt="" src="/marker22.svg" />
        <img className={styles.markerIcon23} alt="" src="/marker23.svg" />
        <img className={styles.markerIcon24} alt="" src="/marker24.svg" />
        <img className={styles.markerIcon25} alt="" src="/marker25.svg" />
        <img className={styles.markerIcon26} alt="" src="/marker26.svg" />
        <img className={styles.markerIcon27} alt="" src="/marker27.svg" />
        <img className={styles.markerIcon28} alt="" src="/marker28.svg" />
        <img className={styles.markerIcon29} alt="" src="/marker29.svg" />
      </div>
      <img className={styles.ellipseIcon} alt="" src="/ellipse-89.svg" />
      <div className={styles.undetected}>undetected</div>
      <img
        className={styles.homeIrrigationChild16}
        alt=""
        src="/ellipse-87.svg"
      />
      <div className={styles.ripe}>ripe</div>
      <img
        className={styles.homeIrrigationChild17}
        alt=""
        src="/ellipse-88.svg"
      />
      <div className={styles.unripe}>Unripe</div>
      <img
        className={styles.homeIrrigationChild18}
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
        className={styles.homeIrrigationChild19}
        alt=""
        src="/ellipse-91.svg"
      />
      <img
        className={styles.homeIrrigationChild20}
        alt=""
        src="/ellipse-90.svg"
      />
      <i className={styles.i4}>40%</i>
      <i className={styles.i5}>120.000</i>
      <i className={styles.overall300000}>Overall: 300.000</i>
      <i className={styles.i6}>180.000</i>
      <i className={styles.nonRipeFruits1}>Non-Ripe fruits</i>
      <img
        className={styles.homeIrrigationChild21}
        alt=""
        src="/ellipse-92.svg"
      />
      <img
        className={styles.homeIrrigationChild22}
        alt=""
        src="/ellipse-93.svg"
      />
      <i className={styles.i7}>60%</i>
      <div className={styles.homeIrrigationChild23} />
      <div className={styles.noResponseFrom}>No response from Sensor. 3</div>
      <div className={styles.seeMore}>See more</div>
      <div className={styles.homeIrrigationChild24} />
      <div className={styles.abnormalityDetected}>Abnormality detected</div>
      <div className={styles.seeMore1}>See more</div>
      <img className={styles.alertOctagonIcon} alt="" src="/alertoctagon.svg" />
      <div className={styles.homeIrrigationChild25} />
      <div className={styles.abnormalityDetected1}>Abnormality detected</div>
      <div className={styles.seeMore2}>See more</div>
      <img
        className={styles.alertOctagonIcon1}
        alt=""
        src="/alertoctagon.svg"
      />
      <div className={styles.homeIrrigationChild26} />
      <div className={styles.aNewUpdate}>A new Update is available</div>
      <div className={styles.updateNow}>Update now</div>
      <img
        className={styles.arrowUpCircleIcon}
        alt=""
        src="/arrowupcircle.svg"
      />
      <img className={styles.wifiOffIcon} alt="" src="/wifioff.svg" />
      <div className={styles.homeIrrigationChild27} />
      <div className={styles.moistureIsHigher}>
        Moisture is higher than permissible level
      </div>
      <div className={styles.seeMore3}>See more</div>
      <div className={styles.updateNow1}>Update now</div>
      <div className={styles.home1}>Home</div>
      <img
        className={styles.cloudDrizzleIcon2}
        alt=""
        src="/clouddrizzle2.svg"
      />
      <i className={styles.i8}>16:08 - 20/03/2023</i>
      <i className={styles.i9}>12:25 - 20/03/2023</i>
      <i className={styles.i10}>11:48 - 20/03/2023</i>
      <i className={styles.i11}>20:55 - 19/03/2023</i>
      <i className={styles.i12}>17:55 - 19/03/2023</i>
    </div>
  );
};

export default HomeIrrigation;
