import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '../components/Layout/Layaout';
import SearchPage from '../components/SearchPage/SearchPage';
import ForecastPage from '../components/ForecastPage/ForecastPage';
import AboutContactPage from '../pages/AboutContactPage';
import NotFound from '../pages/NotFound';

function App() {
  return (
    <>
    <BrowserRouter>
    <Layout>
      <Routes>
        
          <Route exact path='/' element={<SearchPage />} />
          <Route exact path='/daily-forecast' element={<ForecastPage />} />
          <Route exact path='/about' element={<AboutContactPage />} />
          <Route path="*" element={<NotFound />} />
        
      </Routes>
    </Layout>
    </BrowserRouter>
    </>
  );
}

export default App;
