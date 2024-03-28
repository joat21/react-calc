import classNames from "classnames";

const CalculatorButton = (props) => {
  const { type, dispatch, value, spanTwo=false } = props;

  return (
    <button className={classNames({'span-two': spanTwo})} onClick={() => dispatch({ type, payload: { value } })}>
      {value}
    </button>
  )
}

export default CalculatorButton
