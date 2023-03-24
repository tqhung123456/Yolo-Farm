import { FunctionComponent, useCallback } from "react";
import styles from "./SignUp.module.css";

const SignUp: FunctionComponent = () => {
  const onCreatAnAccountClick = useCallback(() => {
    // Please sync "Welcome" to the project
  }, []);

  const onAlreadyHaveAnClick = useCallback(() => {
    // Please sync "Welcome" to the project
  }, []);

  return (
    <div className={styles.signUp}>
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <div className={styles.signUpChild} />
      <div className={styles.zoomVirtualBg2Graphicsonly}>
        <img className={styles.linesIcon} alt="" src="/lines.svg" />
        <img className={styles.yourCoverIcon} alt="" src="/your-cover.svg" />
        <div className={styles.maximumFileSize}>Maximum file size: 5 MB</div>
        <div className={styles.zoomBackrounds}>Zoom backrounds</div>
        <img className={styles.trianglesIcon} alt="" src="/triangles.svg" />
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
        <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
        <img className={styles.vectorIcon3} alt="" src="/vector3.svg" />
        <img className={styles.vectorIcon4} alt="" src="/vector4.svg" />
        <img className={styles.vectorIcon5} alt="" src="/vector5.svg" />
        <img className={styles.vectorIcon6} alt="" src="/vector6.svg" />
        <div className={styles.signUp1}>Sign up</div>
        <div className={styles.phoneNumbersContainer}>
          <span>Phone numbers</span>
          <span className={styles.span}>{` `}</span>
          <span className={styles.span1}>*</span>
        </div>
        <div className={styles.password}>
          <span>Password</span>
          <span className={styles.span}>{` `}</span>
          <span className={styles.span1}>*</span>
        </div>
        <div className={styles.zoomVirtualBg2GraphicsonlyChild} />
        <div className={styles.zoomVirtualBg2GraphicsonlyItem} />
        <div className={styles.company}>Company</div>
        <div className={styles.zoomVirtualBg2GraphicsonlyInner} />
        <div className={styles.reEnterPasswordContainer}>
          <span>{`Re-enter password `}</span>
          <span className={styles.span1}>*</span>
        </div>
        <div className={styles.lineDiv} />
        <div className={styles.eMailAddress}>E-mail address</div>
        <div className={styles.zoomVirtualBg2GraphicsonlyChild1} />
        <div className={styles.country}>Country</div>
        <div className={styles.address}>Address</div>
        <div className={styles.zoomVirtualBg2GraphicsonlyChild2} />
        <div className={styles.zoomVirtualBg2GraphicsonlyChild3} />
        <div className={styles.surname}>
          <span>{`Surname `}</span>
          <span className={styles.span1}>*</span>
        </div>
        <div className={styles.rectangleDiv} />
        <div className={styles.firstName}>First name</div>
        <div className={styles.vietnam}>Vietnam</div>
        <img className={styles.lineIcon} alt="" src="/line-9.svg" />
        <div className={styles.lastName}>Last name</div>
        <img
          className={styles.zoomVirtualBg2GraphicsonlyChild4}
          alt=""
          src="/line-9.svg"
        />
        <i className={styles.yourPhoneNumbers}>
          Your phone numbers is your username
        </i>
        <i className={styles.passwordMustBeContainer}>
          <p className={styles.passwordMustBe}>
            Password must be at least 8 characters long and contain upper
          </p>
          <p className={styles.passwordMustBe}>
            and lower case letters as well as at least one number and one
          </p>
          <p className={styles.passwordMustBe}>special character</p>
        </i>
        <img
          className={styles.iconChevronDown}
          alt=""
          src="/-icon-chevron-down.svg"
        />
      </div>
      <img className={styles.leafIcon} alt="" src="/leaf.svg" />
      <b className={styles.yolofarm}>Yolo:Farm</b>
      <img className={styles.signUpItem} alt="" src="/rectangle-4.svg" />
      <b className={styles.creatAnAccount} onClick={onCreatAnAccountClick}>
        Creat an account
      </b>
      <b
        className={styles.alreadyHaveAnContainer}
        onClick={onAlreadyHaveAnClick}
      >
        <span>Already have an account?</span>
        <span className={styles.signIn}> Sign in</span>
      </b>
    </div>
  );
};

export default SignUp;
