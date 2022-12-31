import styles from "./AddonForm.module.css";
import AddonFormCard from "./AddonFormCard";
import { forwardRef, useState } from "react";

const AddonForm = forwardRef((props, ref) => {
  const [addons, setAddons] = useState([]);
  const handleLift = (e) => {
    let mappedAddons = addons.map((addon) => {
      if (addon.name === e.name) {
        return (addon.checked = e.checked);
      } else {
        return addon;
      }
    });
    const add = [...mappedAddons, e];
    setAddons(add.filter((item) => item.checked === true));
  };

  return (
    <form className={styles.form}>
      <h2 className={styles.h2}>Pick addons</h2>
      <p className={styles.p}>Add-ons help enhance your gaming experience</p>
      <div className={styles["add-ons"]}>
        <AddonFormCard
          id={1}
          label={"Online service"}
          desc={"Access to multiplayer games"}
          price={1}
          plan={"mo"}
          lift={handleLift}
        />
        <AddonFormCard
          id={2}
          label={"Larger Storage"}
          desc={"Extra 1TB of cloud storage"}
          price={2}
          plan={"mo"}
          lift={handleLift}
        />
        <AddonFormCard
          id={3}
          label={"Customizable profile"}
          desc={"Custom theme on your profile"}
          price={2}
          plan={"mo"}
          lift={handleLift}
        />
      </div>
      <button className={styles.button} ref={ref}></button>
    </form>
  );
});

export default AddonForm;
