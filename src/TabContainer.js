import {useState} from "react";
import {TabBtns} from "./TabBtns"
import { TabContents } from "./TabContents";
import 'bootstrap/dist/css/bootstrap.min.css';

export const TabContainer = ({tabs,defaultTabId}) => {
    const [activeTabId, setActiveTabId] = useState(defaultTabId ?? 1);

    const handleTabChange = (id) => {
        setActiveTabId(id);
    };
    return (
        <div>
            <TabBtns
            btns={tabs}
            activeTabId={activeTabId}
            handleTabChange={handleTabChange}
            />
            <TabContents contents={tabs} activeTabId={activeTabId}/>
        </div>
    );
};
