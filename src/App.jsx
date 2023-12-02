import { useState, useCallback, useEffect, useRef } from "react";
import Title from "./components/Title";
import PasswordInput from "./components/PasswordInput";
import RangeInput from "./components/RangeInput";
import NumberInput from "./components/NumberInput";
import CharInput from "./components/CharInput";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef Hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_-+/=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 40);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-3xl mx-auto shadow-md rounded-lg px-4 py-8 my-60 text-orange-500 bg-gray-700">
        <Title />
        <PasswordInput
          inputValue={password}
          inputRef={passwordRef}
          onInputClick={copyToClipboard}
        />

        {/************* Length Range ****************/}
        <div className="flex text-sm gap-x-2">
          <RangeInput
            passwordLength={length}
            onPasswordLengthChange={(e) => {
              setLength(e.target.value);
            }}
          />

          {/************* Numbers Allowed Checkbox ****************/}
          <NumberInput
            defaultCheckboxValue={numberAllowed}
            onNumberCheckboxValueChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />

          {/************* Character Allowed Checkbox ****************/}
          <CharInput
            defaultCharboxValue={charAllowed}
            onCharboxValueChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
        </div>
      </div>
    </>
  );
}

export default App;
