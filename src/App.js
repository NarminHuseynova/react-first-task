import './style.css';
import { TabContainer } from './TabContainer';
import { Tab1Content } from './Tab1Content';
import { Tab2Content } from './Tab2Content';


const tabs = [
  {
    id:1,
    label:"SPA",
    content:<Tab1Content />
  },
  {
    id:2,
    label:"COFFEE",
    content:<Tab2Content />
  }
];

export default function App() {
  return (
    <div className='App'> 
      <TabContainer defaultTabId={1} tabs={tabs} />
    </div>
  );
}

