import React from "react";
import logo1 from "../../../asset/img/foaoty9yj8ztpyn3rygg.png";
import logo2 from "../../../asset/img/fdsav9xalgcj6mjqs1rn.png";
import logo3 from "../../../asset/img/fw2vmnixtr8rwhb8jga8.png";
import logo4 from "../../../asset/img/sbwdmgrtzl0ttu3ntwt1.png";
import logo5 from "../../../asset/img/xfdt2sondensxindk4xf.png";
import CountUp, { useCountUp } from "react-countup";
import styles from "./NumberYears.module.scss";
import { useState } from "react";

export default function NumberYears() {
  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  const [loading, setLoading] = useState(false);

  const onStart = () => {
    setLoading(true);
  };

  const onEnd = () => {
    setLoading(false);
  };

  const containerProps = {
    "aria-busy": loading,
  };
  return (
    <div className="hidden md:block lg:block">
      <div
        className={`py-0 md:py-[60px] lg:py-[100px] px-10 ${styles["number__container"]}`}
      >
        <div className="flex items-center justify-around">
          <div className="flex flex-col items-center">
            <img src={logo1} alt="logo" />
            <h3
              className="text-3xl font-bold my-3 transition duration-300 ease-in-out
        "
            >
              <CountUp delay={3000} end={1985} enableScrollSpy />
              <span className="ml-2">+</span>
            </h3>
            <h4 className={`${styles["number__title"]}`}>Publish</h4>
          </div>
          <div className="flex flex-col items-center">
            <img src={logo2} alt="logo" />
            <h3 className="text-3xl font-bold my-3 transition duration-300 ease-in-out">
              <CountUp delay={3000} end={120} enableScrollSpy />
              <span className="ml-2">+</span>
            </h3>
            <h4 className={`${styles["number__title"]}`}>University</h4>
          </div>
          <div className="flex flex-col items-center">
            <img src={logo3} alt="logo" />
            <h3 className="text-3xl font-bold my-3 transition duration-300 ease-in-out">
              <CountUp delay={3000} end={100000} enableScrollSpy />
              <span className="ml-2">+</span>
            </h3>
            <h4 className={`${styles["number__title"]}`}>Student</h4>
          </div>
          <div className="flex flex-col items-center">
            <img src={logo4} alt="logo" />
            <h3 className="text-3xl font-bold my-3 transition duration-300 ease-in-out">
              <CountUp delay={3000} end={10000} enableScrollSpy />
              <span className="ml-2">+</span>
            </h3>
            <h4 className={`${styles["number__title"]}`}>Partner</h4>
          </div>
          <div className="flex flex-col items-center">
            <img src={logo5} alt="logo" />
            <h3 className="text-3xl font-bold my-3 transition duration-300 ease-in-out">
              <CountUp delay={3000} end={400} enableScrollSpy />
              <span className="ml-2">+</span>
            </h3>
            <h4 className={`${styles["number__title"]}`}>Courses</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
