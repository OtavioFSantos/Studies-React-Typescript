import { ITask } from "../../types/task";
import Button from "../Button";
import Clock from "./Clock";
import style from "./Cronometer.module.scss";
import { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/utils/date";

interface Props {
  selected: ITask | undefined;
}

export default function Cronometer({ selected }: Props) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
  }, [selected]);

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
