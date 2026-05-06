import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';

import '../src/assets/styles/main.scss';

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path='/404' element={<NotFound />} />
        <Route path="/*" element={<Navigate to='/404' replace />} />
      </Routes>
    </>
  );
};

export default App;