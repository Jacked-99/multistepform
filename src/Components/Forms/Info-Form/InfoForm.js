import styles from "./InfoForm.module.css";
import { forwardRef } from "react";

const hanldeSumbit = (e) => {
  e.preventDefault();
  console.log("submit");
};

const InfoForm = forwardRef((props, ref) => {
  return (
    <form onSubmit={hanldeSumbit} className={styles.Form}>
      <h2 className={styles.h2}>Personal Info</h2>
      <p className={styles.p}>
        Please provide your name, email address, and phone number
      </p>
      <label className={styles.label} htmlFor="#name">
        Name
      </label>
      <input
        className={styles.input}
        id="name"
        type="text"
        placeholder="e.g. Stephen King"
      ></input>
      <label className={styles.label} htmlFor="#mail">
        Email Address
      </label>
      <input
        className={styles.input}
        id="mail"
        type="email"
        placeholder="e.g. stephenking@lorem.com"
      ></input>
      <label className={styles.label} htmlFor="#number">
        Phone Number
      </label>
      <input
        className={styles.input}
        id="number"
        type="tel"
        placeholder="e.g. +1 234 567 890"
      ></input>
      <button className={styles.button} type="submit" ref={ref}></button>
    </form>
  );
});

export default InfoForm;
