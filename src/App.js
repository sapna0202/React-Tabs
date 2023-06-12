import React from 'react';
import Past from './Past';
import Present from './Present';
import Future from './Future';
import './App.css';
import { Routes,Route,Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <div className='Tabs'>
        <Link to="/"  className='Links, active'>CUKER</Link>
        <Link to="/Present" className='Links'>POSTULATE</Link>
        <Link to="/Future" className='Links'>BIGDROP</Link>
     </div>
     <Routes>
        <Route path='/' element= {<Past/>}/>
        <Route path='/Present' element= {<Present/>}/>
        <Route path='/Future' element= {<Future/>}/>
      </Routes>
    </div>
  );
}

export default App;
