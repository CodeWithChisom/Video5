import { useState } from "react";
import Body from "./components/Body";
import Input from "./components/Input";
import { SnackbarProvider } from "notistack";

function App() {
  const [password, setPassword] = useState("");

  return (
    <SnackbarProvider
      anchorOrigin={{ horizontal: "right", vertical: "top" }}
      autoHideDuration={3000}
    >
      <main className="w-[max(60%,_30ch)] mx-auto">
        <h1 className="my-4 text-center opacity-60 text-2xl">
          Password Generator
        </h1>
        <Input password={password} />
        <Body setPassword={setPassword} />
      </main>
    </SnackbarProvider>
  );
}

export default App;
