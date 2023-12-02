import React from "react";

function CharInput({ defaultCharboxValue, onCharboxValueChange }) {
  return (
    <>
      <div className="flex items-center gap-x-2 ml-7">
        <input
          type="checkbox"
          id="charInput"
          defaultChecked={defaultCharboxValue}
          onChange={onCharboxValueChange}
        />
        <label className="text-xl" htmlFor="charInput">
          Characters
        </label>
      </div>
    </>
  );
}

export default CharInput;
