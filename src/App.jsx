import Button from "./components/button/Button";
import Tab from "./components/tab/Tab";
import Input from "./components/input/Input";
import { useState } from "react";
function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const tabs = [
    {
      name: "For You",
      content: <div>For You</div>,
    },
    {
      name: "Following",
      content: <div>Following</div>,
    },
  ];
  const handleInput = (e) => {
    console.log(e.target.value)
    setInputValue(e.target.value);
  }

  return (
    <main className="bg-neutral-1000">
      <section>
        {/* Secondary Buttons */}
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
          disabled={false}
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
        {/* Primary Buttons */}
        <h1>this is simple state</h1>
        <Button
          className={`rounded-full bg-twitter-blue neutral-50 text-neutral-50  border-neutral-400 font-bold`}
          label="Post"
          onClick={() => console.log("Clicked")}
          disabled={false}
          type="button"
        />
        <h1>this is disabled button</h1>
        <Button
          className={`rounded-full bg-twitter-blue-disabled font-bold text-neutral-50 `}
          label="Post"
          onClick={() => console.log("Clicked")}
          disabled={false}
          type="button"
        />
        <h1>this is hover state</h1>
        <Button
          className={`rounded-full bg-twitter-blue  neutral-50  text-neutral-50 border-neutral-400 font-bold hover:bg-twitter-blue-hover`}
          label="Post"
          onClick={() => console.log("Clicked")}
          disabled={false}
          type="button"
        />
      </section>
      {/* Tab Component */}
      <Tab tabs={tabs} activeTab={activeTab} />
      {/* Input Component */}
      <Input
        type="text"
        value={inputValue}
        placeholder="Label"
        handler={handleInput}
      />
    </main>
  );
}

export default App;
