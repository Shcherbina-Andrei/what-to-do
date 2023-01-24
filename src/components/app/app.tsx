import {Route, BrowserRouter, Routes} from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import PageLayout from '../../pages/page-layout/page-layout';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageLayout />}>
          <Route
            index
            element={<MainPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
