import { ITask } from "../../types/task";
import Button from "../Button";
import Clock from "./Clock";
import style from "./Cronometer.module.scss";
import { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/utils/date";

interface Props {
  selected: ITask | undefined;
  finishTask: () => void;
}

export default function Cronometer({ selected, finishTask }: Props) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
  }, [selected]);

  function regressive(counter: number = 0) {
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1);
        return regressive(counter - 1);
      }
      finishTask();
    }, 1000);
  }

  return (
    <div className={style.cronometer}>
      <p className={style.title}>Pick a card and start the cronometer</p>
      <div className={style.clockWrapper}>
        <Clock time={time} />
      </div>
      <Button
        text="Start"
        onClick={() => {
          regressive(time);
        }}
      />
    </div>
  );
}
