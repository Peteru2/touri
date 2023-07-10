import { Route, Routes } from 'react-router-dom';
import Dashboard from './Droute/Dashboard.js';
import About from './Droute/About.js';
import History from './Droute/History.js';

function App() {
  return (
    <>
      <Routes>
      <Route path ="/" element = {<Dashboard />} />
      <Route path ="/About" element = {<About />} />
      <Route path ="/History" element = {<History />} />


      </Routes > 
    </>
  );
}

export default App;
