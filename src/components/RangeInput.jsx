const RangeInput = ({ passwordLength, onPasswordLengthChange }) => {
  return (
    <>
      <div className="flex items-center gap-x-1">
        <input
          type="range"
          min={8}
          max={40}
          value={passwordLength}
          className="cursor-pointer"
          onChange={onPasswordLengthChange}
        />
        <label className="text-xl">Length {passwordLength}</label>
      </div>
    </>
  );
};

export default RangeInput;
