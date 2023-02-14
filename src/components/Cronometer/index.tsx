import Button from "../Button";
import Clock from "./Clock";
import style from "./Cronometer.module.scss";

export default function Cronometer() {
  return (
    <div className={style.cronometer}>
      <p className={style.title}>Pick a card and start the cronometer</p>
      <div className={style.clockWrapper}>
        <Clock />
      </div>
      <Button text="Start" />
    </div>
  );
}
