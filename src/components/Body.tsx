import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { FaArrowRight } from "react-icons/fa";

export default function Body() {
  return (
    <div className="bg-neutral-600 p-4">
      <div className="my-flex mb-4">
        <p>Character Length</p>
        <p className="text-primary-400 text-2xl">0</p>
      </div>
      <RangeSlider min={0} max={20} value={[0, 0]} />
      <div className="mt-8 default-flex gap-2">
        <input
          type="checkbox"
          id="uppercase"
          className="lg:w-5 lg:h-5 accent-primary-400"
        />
        <label htmlFor="uppercase">Include Uppercase Letters</label>
      </div>
      <div className="mt-2 default-flex gap-2">
        <input
          type="checkbox"
          id="lowercase"
          className="lg:w-5 lg:h-5 accent-primary-400"
        />
        <label htmlFor="lowercase">Include Lowercase Letters</label>
      </div>
      <div className="mt-2 default-flex gap-2">
        <input
          type="checkbox"
          id="numbers"
          className="lg:w-5 lg:h-5 accent-primary-400"
        />
        <label htmlFor="numbers">Include Numbers</label>
      </div>
      <div className="mt-2 default-flex gap-2">
        <input
          type="checkbox"
          id="symbols"
          className="lg:w-5 lg:h-5 accent-primary-400"
        />
        <label htmlFor="symbols">Include Symbols</label>
      </div>
      <div className="bg-neutral-900 px-4 py-3 my-flex my-6">
        <p className="uppercase text-sm text-neutral-400 font-semibold">
          Strength
        </p>
        <div className="default-flex gap-2">
          <p></p>
          <div className="default-flex gap-2">
            <div className="w-2 h-6 border"></div>
            <div className="w-2 h-6 border"></div>
            <div className="w-2 h-6 border"></div>
            <div className="w-2 h-6 border"></div>
          </div>
        </div>
      </div>
      <button className="mb-1 py-3 bg-primary-400 text-neutral-900 font-semibold uppercase border border-primary-400 w-full default-flex justify-center gap-2 hover:bg-transparent hover:text-primary-400 focus-visible:bg-transparent focus-visible:text-primary-400 active:scale-95">
        <p>Generate</p>
        <FaArrowRight />
      </button>
    </div>
  );
}
