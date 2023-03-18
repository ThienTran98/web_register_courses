import React from "react";
import logo1 from "../../../asset/img/foaoty9yj8ztpyn3rygg.png";
import logo2 from "../../../asset/img/fdsav9xalgcj6mjqs1rn.png";
import logo3 from "../../../asset/img/fw2vmnixtr8rwhb8jga8.png";
import logo4 from "../../../asset/img/sbwdmgrtzl0ttu3ntwt1.png";
import logo5 from "../../../asset/img/xfdt2sondensxindk4xf.png";
import CountUp from "react-countup";
import styles from "./NumberYears.module.scss";

export default function NumberYears() {
  return (
    <div className="hidden md:block lg:block">
      <div className="py-0 md:py-[60px] lg:py-[100px] px-10 ">
        <div className="flex items-center justify-around">
          <div className="flex flex-col items-center">
            <img src={logo1} alt="logo" />
            <h3
              className="text-3xl font-bold my-3 transition duration-300 ease-in-out
        "
            >
              <CountUp start={0} end={1985} duration={10}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
            </h3>
            <h4 className={`${styles["number__title"]}`}>Publish</h4>
          </div>
          <div className="flex flex-col items-center">
            <img src={logo2} alt="logo" />
            <h3 className="text-3xl font-bold my-3 transition duration-300 ease-in-out">
              <CountUp start={0} end={200} duration={10}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
            </h3>
            <h4 className={`${styles["number__title"]}`}>University</h4>
          </div>
          <div className="flex flex-col items-center">
            <img src={logo3} alt="logo" />
            <h3 className="text-3xl font-bold my-3 transition duration-300 ease-in-out">
              <CountUp start={0} end={20222} duration={10}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
            </h3>
            <h4 className={`${styles["number__title"]}`}>Student</h4>
          </div>
          <div className="flex flex-col items-center">
            <img src={logo4} alt="logo" />
            <h3 className="text-3xl font-bold my-3 transition duration-300 ease-in-out">
              <CountUp start={0} end={5000} duration={10}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
            </h3>
            <h4 className={`${styles["number__title"]}`}>Partner</h4>
          </div>
          <div className="flex flex-col items-center">
            <img src={logo5} alt="logo" />
            <h3 className="text-3xl font-bold my-3 transition duration-300 ease-in-out">
              <CountUp start={0} end={300} duration={10}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
            </h3>
            <h4 className={`${styles["number__title"]}`}>Courses</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
