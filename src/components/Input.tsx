import { FaRegCopy } from "react-icons/fa";

export default function Input() {
  return (
    <div className="bg-neutral-600 px-4 py-3 my-flex mb-4">
      <input
        type="text"
        placeholder="P4$5W0rD!"
        className="bg-transparent outline-none placeholder:text-neutral-400 placeholder:font-bold"
        readOnly
      />
      <button className="text-primary-400 hover:text-neutral-100 focus-visible:text-neutral-100">
        <FaRegCopy />
      </button>
    </div>
  );
}
