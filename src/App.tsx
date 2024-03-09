import Body from "./components/Body";
import Input from "./components/Input";

function App() {
  return (
    <main className="w-[max(60%,_30ch)] mx-auto">
      <h1 className="my-4 text-center opacity-60 text-2xl">Password Generator</h1>
      <Input />
      <Body />
    </main>
  );
}

export default App;
