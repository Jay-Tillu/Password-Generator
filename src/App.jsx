import solidPasswordImage from "./assets/solid-password.svg";
import strongPasswordImage from "./assets/strong-password.svg";
import weakPasswordImage from "./assets/weak-password.svg";
import { useCallback, useEffect, useRef, useState } from "react";
import "./index.css";

function App() {
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setcharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("weak");
  const [passwordImage, setPasswordImage] = useState(weakPasswordImage);
  const [tagColor, setTagColor] = useState("orange");

  const passwordReference = useRef(null);

  // Define a map of your allowed colors and corresponding Tailwind classes
  const colorMap = {
    orange: "bg-orange-400",
    red: "bg-red-400",
    green: "bg-green-400",
  };

  // Function to evaluate password strength
  const passwordStrengthFunction = useCallback(() => {
    if (length <= 8) {
      setPasswordStrength("weak");
      setTagColor("red");
      setPasswordImage(weakPasswordImage);
    } else if (length > 8 && length <= 20) {
      setPasswordStrength("Strong");
      setTagColor("orange");
      setPasswordImage(strongPasswordImage);
    } else if (length > 20) {
      setPasswordStrength("Very Strong");
      setTagColor("green");
      setPasswordImage(solidPasswordImage);
    }
  }, [length]);

  // Function to generate random password
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str = str + "0123456789";
    if (characterAllowed) str = str + "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = pass + str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  // Function to copy selected text on Clipboard
  const copyToClipboard = useCallback(() => {
    passwordReference.current?.select();
    passwordReference.current?.setSelectionRange(0, 50);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordStrengthFunction();
  }, [length, passwordGenerator]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);

  return (
    <>
      <main className="w-screen h-screen bg-white font-poppins">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-bold mt-20 font-sans">
            Random Password Generator
          </h1>
          <h3 className="text-base mt-4">
            Create strong and secure passwords to keep your account safe online.
          </h3>

          {/* Main Password Div */}
          <div className="flex flex-col mt-5 w-full  items-center justify-center">
            {/* Password Image */}
            <img
              src={passwordImage}
              className="h-72 mx-10"
              alt="Password Complexity Image"
            />

            {/* Passowrd Input Div */}
            <div>
              <div className="relative">
                <input
                  type="text"
                  value={password}
                  className="bg-zinc-50 border-2 border-gray-200 text-left pl-5 pr-32 w-96 py-3 shadow-md rounded-full"
                  readOnly
                  ref={passwordReference}
                />
                <span
                  className={`absolute right-72 top-1/2 transform -translate-y-1/2 ${colorMap[tagColor]} px-2 py-0.5 text-sm rounded-md`}
                >
                  {passwordStrength}
                </span>

                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 ml-3 rounded-full shadow-md"
                  onClick={copyToClipboard}
                >
                  Copy
                </button>
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 ml-3 rounded-full shadow-md"
                  onClick={passwordGenerator}
                >
                  Regenerate
                </button>
              </div>

              {/* Passowrd Range Field */}
              <div className="mt-10">
                <label className="text-xl mr-4">
                  Password Length: {length}
                </label>
                <input
                  type="range"
                  min={6}
                  max={50}
                  value={length}
                  className="cursor-pointer w-80 rounded-lg"
                  onChange={(e) => {
                    setLength(e.target.value);
                  }}
                />
              </div>

              {/* Character Used Field */}
              <div className="mt-5">
                <label className="text-xl mr-4">Characters Used:</label>
                <input
                  type="checkbox"
                  defaultChecked={numberAllowed}
                  className="w-5 h-5"
                  id="numberInput"
                  onChange={() => {
                    setNumberAllowed((prev) => !prev);
                  }}
                />
                <label htmlFor="numberInput" className="font-bold pl-2 text-xl">
                  123
                </label>

                <div className="inline mx-5">
                  <input
                    type="checkbox"
                    defaultChecked={characterAllowed}
                    className="w-5 h-5"
                    id="charInput"
                    onChange={() => {
                      setcharacterAllowed((prev) => !prev);
                    }}
                  />
                  <label htmlFor="charInput" className="font-bold pl-2 text-xl">
                    #$&
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
