import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute } from '../../const';
import ListPage from '../../pages/list-page/list-page';
import MainPage from '../../pages/main-page/main-page';
import PageLayout from '../../pages/page-layout/page-layout';
import SearchResultsPage from '../../pages/search-results-page/search-results-page';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<PageLayout />}>
          <Route
            index
            element={<MainPage />}
          />
          <Route path={AppRoute.Lists}>
            <Route
              path=":id"
              element={<ListPage />}
            />
          </Route>
          <Route
            path={AppRoute.SearchResult}
            element={<SearchResultsPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
