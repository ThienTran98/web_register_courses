import React from "react";
import { useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import styles from "./Spinner.module.scss";

export default function Spinner() {
  const isLoading = useSelector((state) => {
    return state.spinnerSlice.isLoading;
  });
  console.log(isLoading);
  return isLoading ? (
    <div className={`${styles["spinner"]}`}>
      <ClipLoader color="#36d7b7" />
    </div>
  ) : (
    <></>
  );
}
