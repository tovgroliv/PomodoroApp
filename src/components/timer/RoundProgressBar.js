import Circle from "./Circle";

import RoundProgressBarCss from "./RoundProgressBar.module.css";

const RoundProgressBar = (props) => {
  return (
    <div className={RoundProgressBarCss["round-progress-bar"]}>
      <Circle angle={Math.PI * 2} color={"#000000"} />
      <Circle angle={Math.PI * 2 * props.value / props.maxValue} color={"#aaaaaa"} />

      {props.children}
    </div>
  );
}

export default RoundProgressBar;