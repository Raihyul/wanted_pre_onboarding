import { useState } from "react";
import { ReactTabOne, ReactTabTwo } from "./tabs/index";

const TabReact = () => {
  const tabs = [
    { name: "tab 1", content: <ReactTabOne /> },
    { name: "tab 2", content: <ReactTabTwo /> },
  ];
  const [currentTab, setCurrentTab] = useState(0);

  const handleClick = (index) => {
    setCurrentTab(index);
  };

  return (
    <>
      <h3>Tab with React</h3>
      <ul>
        {tabs.map((tab, index) => {
          return (
            <li
              key={index}
              className={`${index === currentTab ? "focused" : ""}`}
              onClick={() => handleClick(index)}
            >
              {tab.name}
            </li>
          );
        })}
      </ul>
      <div>{tabs[currentTab].content}</div>
    </>
  );
};

export default TabReact;
