const PasswordInput = ({ inputValue, inputRef, onInputClick }) => {
  return (
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input
        type="text"
        value={inputValue}
        className="outline-none w-full py-2 px-3 text-2xl"
        placeholder="Password"
        readOnly
        ref={inputRef}
      />
      <button
        className="outline-none bg-blue-600 hover:bg-green-700 text-white px-7 shrink-0 text-lg"
        onClick={onInputClick}
      >
        Copy
      </button>
    </div>
  );
};

export default PasswordInput;
