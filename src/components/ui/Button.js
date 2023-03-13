import "./Button.module.css";

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      <img alt="" src={props.svg} />
    </button>
  );
}

export default Button;