const NumberInput = ({ defaultCheckboxValue, onNumberCheckboxValueChange }) => {
  return (
    <>
      <div className="flex items-center gap-x-2 ml-7">
        <input
          type="checkbox"
          id="numberInput"
          defaultChecked={defaultCheckboxValue}
          onChange={onNumberCheckboxValueChange}
        />
        <label className="text-xl" htmlFor="numberInput">
          Numbers
        </label>
      </div>
    </>
  );
};

export default NumberInput;
