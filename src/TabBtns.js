export const TabBtns = ({btns, activeTabId, handleTabChange}) => {
    return (
        <div className="tab-btns">
            {btns.map((btn) => (
                <button
                key={btn.id}
                onClick={() => handleTabChange(btn.id)}
                className={activeTabId === btn.id ? "activeTab" : ""}
                >
                    {btn.label}
                </button>
            ))}
        </div>
    );
};