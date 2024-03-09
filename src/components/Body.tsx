import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { FaArrowRight } from "react-icons/fa";
import { Dispatch, SetStateAction, useState } from "react";

type BodyProps = {
  setPassword: Dispatch<SetStateAction<string>>;
};

export default function Body({ setPassword }: BodyProps) {
  const [value, setValue] = useState<[number, number]>([0, 0]);
  const [upper, setUpper] = useState(false);
  const [lower, setLower] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);

  const getRandomLower = () => {
    const lowerCaseLetter = Math.floor(Math.random() * 26) + 97;
    return String.fromCharCode(lowerCaseLetter);
  };

  const getRandomUpper = () => {
    const upperCaseLetter = Math.floor(Math.random() * 26) + 65;
    return String.fromCharCode(upperCaseLetter);
  };

  const getRandomNumber = () => {
    const number = Math.floor(Math.random() * 10) + 48;
    return String.fromCharCode(number);
  };

  const getRandomSymbol = () => {
    const symbols = "!@#$%^&*()-_=+[]{}\\|~/<>?";
    return symbols[Math.floor(Math.random() * symbols.length)];
  };

  const generatePassword = () => {
    const getters: Record<string, () => string> = {
      upper: getRandomUpper,
      lower: getRandomLower,
      number: getRandomNumber,
      symbol: getRandomSymbol,
    };

    const selected = [{ upper }, { lower }, { number }, { symbol }].filter(
      (elem) => Object.values(elem)[0]
    );

    if (selected.length === 0) return;

    setPassword("");
    for (let i = 0; i < value[1]; i++) {
      for (let j = 0; j < selected.length; j++) {
        setPassword((prevPassword) =>
          (prevPassword + getters[Object.keys(selected[j])[0]]()).slice(
            0,
            value[1]
          )
        );
      }
    }
  };

  const getStrength = () => {
    const selected = [{ upper }, { lower }, { number }, { symbol }].filter(
      (elem) => Object.values(elem)[0]
    );
    switch (selected.length) {
      case 1:
        return "VERY WEAK";
      case 2:
        return "WEAK";
      case 3:
        return "MEDIUM";
      case 4:
        return "STRONG";
      default:
        return;
    }
  };

  return (
    <div className="bg-neutral-600 p-4">
      <div className="my-flex mb-4">
        <p>Character Length</p>
        <p className="text-primary-400 text-2xl">{value[1]}</p>
      </div>
      <RangeSlider
        min={0}
        max={20}
        value={value}
        onInput={(val: [number, number]) => setValue(val)}
      />
      <div className="mt-8 default-flex gap-2">
        <input
          type="checkbox"
          id="uppercase"
          className="lg:w-5 lg:h-5 accent-primary-400"
          checked={upper}
          onChange={() => setUpper(!upper)}
        />
        <label htmlFor="uppercase">Include Uppercase Letters</label>
      </div>
      <div className="mt-2 default-flex gap-2">
        <input
          type="checkbox"
          id="lowercase"
          className="lg:w-5 lg:h-5 accent-primary-400"
          checked={lower}
          onChange={() => setLower(!lower)}
        />
        <label htmlFor="lowercase">Include Lowercase Letters</label>
      </div>
      <div className="mt-2 default-flex gap-2">
        <input
          type="checkbox"
          id="numbers"
          className="lg:w-5 lg:h-5 accent-primary-400"
          checked={number}
          onChange={() => setNumber(!number)}
        />
        <label htmlFor="numbers">Include Numbers</label>
      </div>
      <div className="mt-2 default-flex gap-2">
        <input
          type="checkbox"
          id="symbols"
          className="lg:w-5 lg:h-5 accent-primary-400"
          checked={symbol}
          onChange={() => setSymbol(!symbol)}
        />
        <label htmlFor="symbols">Include Symbols</label>
      </div>
      <div className="bg-neutral-900 px-4 py-3 my-flex my-6">
        <p className="uppercase text-sm text-neutral-400 font-semibold">
          Strength
        </p>
        <div className="default-flex gap-2">
          <p>{getStrength()}</p>
          <div className="default-flex gap-2">
            <div
              className={
                getStrength()
                  ? "w-2 h-6 border bg-accent-400 border-accent-400"
                  : "w-2 h-6 border"
              }
            ></div>
            <div
              className={
                getStrength() === "WEAK" ||
                getStrength() === "MEDIUM" ||
                getStrength() === "STRONG"
                  ? "w-2 h-6 border bg-accent-400 border-accent-400"
                  : "w-2 h-6 border"
              }
            ></div>
            <div
              className={
                getStrength() === "MEDIUM" || getStrength() === "STRONG"
                  ? "w-2 h-6 border bg-accent-400 border-accent-400"
                  : "w-2 h-6 border"
              }
            ></div>
            <div
              className={
                getStrength() === "STRONG"
                  ? "w-2 h-6 border bg-accent-400 border-accent-400"
                  : "w-2 h-6 border"
              }
            ></div>
          </div>
        </div>
      </div>
      <button
        onClick={generatePassword}
        className="mb-1 py-3 bg-primary-400 text-neutral-900 font-semibold uppercase border border-primary-400 w-full default-flex justify-center gap-2 hover:bg-transparent hover:text-primary-400 focus-visible:bg-transparent focus-visible:text-primary-400 active:scale-95"
      >
        <p>Generate</p>
        <FaArrowRight />
      </button>
    </div>
  );
}
