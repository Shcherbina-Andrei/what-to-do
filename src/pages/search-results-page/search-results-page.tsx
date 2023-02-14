import Header from '../../components/header/header';
import HomeLink from '../../components/controls/home-link/home-link';
import SearchResultsList from '../../components/searching-task/search-results-list/search-results-list';

function SearchResultsPage(): JSX.Element {
  return (
    <div className="page__container">
      <Header />
      <main className="main">
        <HomeLink />
        <SearchResultsList />
      </main>
    </div>
  );
}

export default SearchResultsPage;
