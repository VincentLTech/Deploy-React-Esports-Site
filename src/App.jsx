import HomePage from './pages/HomePage';
import History from './pages/History';

import Member from './pages/Members';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter> 
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/history' element={<History/>}/>
          <Route path='/member' element={<Member/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;