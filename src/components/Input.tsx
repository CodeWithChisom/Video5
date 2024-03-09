import { useSnackbar } from "notistack";
import { FaRegCopy } from "react-icons/fa";

type InputProps = {
  password: string;
};

export default function Input({ password }: InputProps) {
  const { enqueueSnackbar } = useSnackbar();

  const handleCopy = () => {
    if (!password) {
      enqueueSnackbar("Nothing to copy", {
        variant: "info",
      });
      return;
    }

    navigator.clipboard
      .writeText(password)
      .then(() => {
        enqueueSnackbar("Copied to clipboard!", {
          variant: "success",
        });
      })
      .catch((e) => {
        console.log(e.message);
        enqueueSnackbar("Failed to copy", {
          variant: "error",
        });
      });
  };

  return (
    <div className="bg-neutral-600 px-4 py-3 my-flex mb-4">
      <input
        type="text"
        placeholder="P4$5W0rD!"
        className="bg-transparent outline-none placeholder:text-neutral-400 placeholder:font-bold"
        readOnly
        value={password}
      />
      <button
        onClick={handleCopy}
        className="text-primary-400 hover:text-neutral-100 focus-visible:text-neutral-100"
      >
        <FaRegCopy />
      </button>
    </div>
  );
}
