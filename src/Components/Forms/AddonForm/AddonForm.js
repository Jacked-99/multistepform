import styles from "./AddonForm.module.css";
import AddonFormCard from "./AddonFormCard";
import { forwardRef, useState, useContext } from "react";
import FormContext from "../../Context/FormContext";

const AddonForm = forwardRef((props, ref) => {
  const [addons, setAddons] = useState([]);
  let ctx = useContext(FormContext);
  let duration;
  let addon1Price = 1;
  let addon2Price = 2;
  const planDuration = () => {
    if (ctx.data.duration === "month") {
      duration = "mo";
    } else {
      duration = "yr";
      addon1Price = addon1Price * 10;
      addon2Price = addon2Price * 10;
    }
  };
  planDuration();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("yes");
    ctx.setPage({ type: "inc" });
    ctx.setData({ ...addons });
  };
  let sum = () => {
    let sum = 0;
    for (let addon of addons) {
      sum += addon.price;
    }
    return sum;
  };

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
    <form className={styles.form} onSubmit={submitHandler}>
      <h2 className={styles.h2}>Pick addons</h2>
      <p className={styles.p}>Add-ons help enhance your gaming experience</p>
      <div className={styles["add-ons"]}>
        <AddonFormCard
          id={1}
          label={"Online service"}
          desc={"Access to multiplayer games"}
          price={addon1Price}
          plan={duration}
          lift={handleLift}
        />
        <AddonFormCard
          id={2}
          label={"Larger Storage"}
          desc={"Extra 1TB of cloud storage"}
          price={addon2Price}
          plan={duration}
          lift={handleLift}
        />
        <AddonFormCard
          id={3}
          label={"Customizable profile"}
          desc={"Custom theme on your profile"}
          price={addon2Price}
          plan={duration}
          lift={handleLift}
        />
      </div>
      <button className={styles.button} ref={ref}></button>
    </form>
  );
});

export default AddonForm;
