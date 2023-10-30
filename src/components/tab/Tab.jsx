import { useState } from "react";
const Tab = (props) => {
  const [activeTab, setActiveTab] = useState(props.activeTab);

  const handleChangeTab = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <main >
      {props.tabs.map((tab, index) => {
        return (
          <button
            className={
              activeTab === tab.name
                ? "text-neutral-400 border-b-4 border-twitter-blue"
                : "text-neutral-50"
            }
            onClick={() => handleChangeTab(tab.name)}
            key={tab.name}
          >
            {tab.name}
          </button>
        );
      })}
    </main>
  );
};
export default Tab;
