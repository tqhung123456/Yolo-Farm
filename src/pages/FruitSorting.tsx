import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FruitSorting.module.css";

const FruitSorting: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/home-irrigation");
  }, [navigate]);

  const onRectangle19Click = useCallback(() => {
    navigate("/home-temperature");
  }, [navigate]);

  const onRectangle20Click = useCallback(() => {
    navigate("/irrigation");
  }, [navigate]);

  const onRectangle21Click = useCallback(() => {
    navigate("/lighting");
  }, [navigate]);

  const onRectangle22Click = useCallback(() => {
    navigate("/temperature");
  }, [navigate]);

  const onRectangle24Click = useCallback(() => {
    navigate("/abnormality");
  }, [navigate]);

  return (
    <div className={styles.fruitSorting}>
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <div className={styles.fruitSortingChild} />
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
      <div className={styles.fruitSortingItem} />
      <div className={styles.moistureIsHigher}>
        Moisture is higher than permissible level
      </div>
      <img
        className={styles.cloudDrizzleIcon}
        alt=""
        src="/clouddrizzle16.svg"
      />
      <div className={styles.fruitSortingInner} />
      <i className={styles.manualIrrigating}>Manual irrigating</i>
      <div className={styles.rectangleDiv} />
      <i className={styles.manualHeating}>Manual heating</i>
      <div className={styles.fruitSortingChild1} />
      <i className={styles.manualLighting}>Manual lighting</i>
      <img className={styles.iconMapPin} alt="" src="/-icon-map-pin.svg" />
      <b className={styles.notifications}>Notifications</b>
      <img className={styles.iconBell} alt="" src="/-icon-bell.svg" />
      <div className={styles.fruitSortingChild2} />
      <div className={styles.noResponseFrom}>No response from Sensor. 3</div>
      <div className={styles.fruitSortingChild3} />
      <div className={styles.abnormalityDetected}>Abnormality detected</div>
      <img className={styles.alertOctagonIcon} alt="" src="/alertoctagon.svg" />
      <div className={styles.fruitSortingChild4} />
      <div className={styles.abnormalityDetected1}>Abnormality detected</div>
      <img
        className={styles.alertOctagonIcon1}
        alt=""
        src="/alertoctagon.svg"
      />
      <div className={styles.fruitSortingChild5} />
      <div className={styles.aNewUpdate}>A new Update is available</div>
      <img
        className={styles.arrowUpCircleIcon}
        alt=""
        src="/arrowupcircle.svg"
      />
      <img className={styles.wifiOffIcon} alt="" src="/wifioff7.svg" />
      <b className={styles.hoChiMinh}>
        Ho Chi Minh city University of Technology
      </b>
      <b className={styles.hanoiVietnam}>Hanoi, Vietnam</b>
      <div className={styles.fruitSortingChild6} />
      <div className={styles.fruitSortingChild7} />
      <b className={styles.michaelJackson}>Michael Jackson</b>
      <div className={styles.fruitSortingChild8} />
      <b className={styles.detail}>Detail</b>
      <i className={styles.keepingAbove}>Keeping above</i>
      <i className={styles.mlm3}>25ml/m3</i>
      <i className={styles.automatic}>AUTOMATIC</i>
      <img className={styles.menuIcon} alt="" src="/menu.svg" />
      <div className={styles.fruitSortingChild9} />
      <div className={styles.fruitSortingChild10} />
      <div className={styles.fruitSortingChild11} />
      <div className={styles.fruitSortingChild12} />
      <div className={styles.fruitSortingChild13} />
      <b className={styles.noRecentActivity}>No recent activity</b>
      <i className={styles.mlm31}>ml/m3</i>
      <i className={styles.keepingAbove}>Keeping above</i>
      <i className={styles.mlm3}>25ml/m3</i>
      <div className={styles.wm3}>W/m3</div>
      <div className={styles.div}>℃</div>
      <div className={styles.fruitSortingChild14} />
      <div className={styles.fruitSortingChild15} />
      <img className={styles.avatarsIcon} alt="" src="/avatars14.svg" />
      <img className={styles.avatarsIcon1} alt="" src="/avatars15.svg" />
      <img
        className={styles.iconHelpCircle}
        alt=""
        src="/-icon-help-circle.svg"
      />
      <img className={styles.iconSettings} alt="" src="/-icon-settings.svg" />
      <b className={styles.fruitSorting1}>Fruit sorting</b>
      <img className={styles.leafIcon} alt="" src="/leaf8.svg" />
      <button className={styles.rectangleParent} onClick={onFrameButtonClick}>
        <div className={styles.frameChild} onClick={onRectangle19Click} />
        <b className={styles.home}>Home</b>
        <img className={styles.homeIcon} alt="" src="/home1.svg" />
      </button>
      <div className={styles.rectangleGroup}>
        <div className={styles.frameChild} onClick={onRectangle20Click} />
        <b className={styles.irrigation}>Irrigation</b>
        <img
          className={styles.cloudDrizzleIcon1}
          alt=""
          src="/clouddrizzle17.svg"
        />
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.frameChild} onClick={onRectangle21Click} />
        <b className={styles.irrigation}>Lighting</b>
        <img className={styles.homeIcon} alt="" src="/sun8.svg" />
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.frameChild} onClick={onRectangle22Click} />
        <b className={styles.irrigation}>Temperature</b>
        <img
          className={styles.thermometerIcon}
          alt=""
          src="/thermometer8.svg"
        />
      </div>
      <div className={styles.rectangleParent1}>
        <div className={styles.frameChild2} />
        <img className={styles.homeIcon} alt="" src="/heart2.svg" />
      </div>
      <div className={styles.rectangleParent2}>
        <div className={styles.frameChild} onClick={onRectangle24Click} />
        <b className={styles.abnormality}>Abnormality</b>
        <img className={styles.frownIcon} alt="" src="/frown.svg" />
      </div>
      <b className={styles.yolofarm}>Yolo:Farm</b>
      <div className={styles.fruitSortingChild16} />
      <div className={styles.lineDiv} />
      <div className={styles.fruitSortingChild17} />
      <div className={styles.fruitSortingChild18} />
      <i className={styles.soilMoisture}>Soil moisture</i>
      <div className={styles.fruitSortingChild12} />
      <i className={styles.soilMoisture}>Soil moisture</i>
      <i className={styles.automatic}>AUTOMATIC</i>
      <i className={styles.i5}>30</i>
      <i className={styles.i6}>30</i>
      <i className={styles.i7}>30</i>
      <div className={styles.fruitSortingChild20} />
      <div className={styles.graph1}>GRAPH 1</div>
      <i className={styles.lighting1}>Lighting</i>
      <i className={styles.temperature1}>Temperature</i>
      <b className={styles.graph}>Graph</b>
      <b className={styles.logActivities}>Log activities</b>
      <div className={styles.fruitSortingChild21} />
      <div className={styles.soilMoisture2}>Soil moisture</div>
      <img
        className={styles.cloudDrizzleIcon2}
        alt=""
        src="/clouddrizzle18.svg"
      />
      <img
        className={styles.iconChevronDown}
        alt=""
        src="/-icon-chevron-down1.svg"
      />
      <div className={styles.fruitSortingChild8} />
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
      <div className={styles.fruitSortingChild23} />
      <b className={styles.detail3}>Detail</b>
      <i className={styles.turnOn}>Turn ON</i>
      <i className={styles.i8}>18:00 - 05:00</i>
      <i className={styles.scheduled}>SCHEDULED</i>
      <img className={styles.menuIcon4} alt="" src="/menu.svg" />
      <div className={styles.fruitSortingChild24} />
      <b className={styles.detail4}>Detail</b>
      <i className={styles.inside}>Inside</i>
      <div className={styles.div1}>
        <i>{`10 `}</i>
        <span>- 35℃</span>
      </div>
      <i className={styles.manual}>MANUAL</i>
      <img className={styles.menuIcon5} alt="" src="/menu.svg" />
      <div className={styles.fruitSorting2}>Fruit sorting</div>
    </div>
  );
};

export default FruitSorting;
