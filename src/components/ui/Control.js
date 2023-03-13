import Button from "./Button";

import ControlCss from "./Control.module.css";

const Control = (props) => {  
  return (
    <div className={ControlCss["control"]}>
      <Button />
      <Button onClick={props.playClick} />
      <Button />
    </div>
  );
}

export default Control;