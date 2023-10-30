import Button from "./components/button/Button";
function App() {
  return (
    <main className="bg-neutral-1000">
      <h1>this is simple state</h1>
      <Button
        className={`rounded-full bg-neutral-50  neutral-50  border-neutral-400 font-bold`}
        label="Create Account"
        onClick={() => console.log("Clicked")}
        disabled={false}
        type="button"
      />
      <h1>this is disabled button</h1>
      <Button
        className={`rounded-full font-bold bg-neutral-500`}
        label="Disabled"
        onClick={() => console.log("Clicked")}
        disabled={false}
        type="button"
      />
      <h1>this is hover state</h1>
      <Button
        className={`rounded-full bg-neutral-50  neutral-50  border-neutral-400 font-bold hover:bg-neutral-200`}
        label="Hover"
        onClick={() => console.log("Clicked")}
        disabled={true}
        type="button"
      />
      <h1>this is outlined</h1>
      <Button
        className={`rounded-full bg-neutral-1000 text-twitter-blue   neutral-50 border-2 border-twitter-blue font-bold`}
        label="Outlined"
        onClick={() => console.log("Clicked")}
        disabled={false}
        type="button"
      />
    </main>
  );
}

export default App;
