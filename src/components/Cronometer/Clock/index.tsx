import style from "./Clock.module.scss";

interface Props {
  time: number | undefined;
}

export default function Clock({ time = 0 }: Props) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minuteD, minuteU] = String(minutes).padStart(2, "0");
  const [secondD, secondU] = String(seconds).padStart(2, "0");

  return (
    <>
      <span className={style.clockNumber}>{minuteD}</span>
      <span className={style.clockNumber}>{minuteU}</span>
      <span className={style.clockDivision}>:</span>
      <span className={style.clockNumber}>{secondD}</span>
      <span className={style.clockNumber}>{secondU}</span>
    </>
  );
}
