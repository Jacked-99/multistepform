import styles from "./AddonFormCard.module.css";
import { useEffect, useState } from "react";
const AddonFormCard = (props) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(e.target.checked);

    props.lift({ name: props.label, price: props.price, checked: !checked });
  };
  // useEffect(() => {

  // }, [checked]);
  return (
    <section className={`${styles.plan} ${checked ? styles.checked : ""}`}>
      <label className={styles.checkbox}>
        <input
          id={props.id}
          type="checkbox"
          className={styles.input}
          onChange={handleChange}
        ></input>
        <span className={styles.custom}></span>
      </label>
      <label htmlFor={props.id} className={styles.label}>
        {props.label}
        <span className={styles.desc}>{props.desc}</span>
      </label>

      <span className={styles.price}>{`+$${props.price}/${props.plan}`}</span>
    </section>
  );
};
export default AddonFormCard;
