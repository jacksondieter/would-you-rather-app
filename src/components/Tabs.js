import React, { useState } from "react";

function Tabs(props) {
  const { children } = props;
  const active = children[0].props.label;
  const [activeTab, setActiveTab] = useState(active);
  const onClickTabItem = tab => {
    setActiveTab(tab);
  };
  const child = children.filter(child => child.props.label === activeTab)[0]
    .props.children;

  return (
    <div className="tabs">
      <ol className="tab-list">
        {children.map(child => {
          const { label } = child.props;
          return (
            <Tab
              activeTab={activeTab}
              key={label}
              label={label}
              onClick={onClickTabItem}
            />
          );
        })}
      </ol>
      <div className="tab-content">{child}</div>
    </div>
  );
}

function Tab(props) {
  const { activeTab, label, onClick } = props;
  const handleClick = () => {
    onClick(label);
  };

  const className =
    activeTab === label ? "tab-list-item tab-list-active" : "tab-list-item";

  return (
    <li className={className} onClick={handleClick}>
      {label}
    </li>
  );
}


export default Tabs;
