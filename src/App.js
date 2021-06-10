import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Dashboard } from './layouts/Dashboard';
import { JobAdvertisement } from './pages/Job/JobAdvertisementList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dashboard children={<JobAdvertisement/>}/>
        
        
      </header>
      
    </div>
  );
}

export default App;
