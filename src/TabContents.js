export const TabContents = ({ contents, activeTabId }) => {
    return (
      <div className="tab-contents">
              <div>{contents[activeTabId - 1].content}</div>
      </div>
    );
  };