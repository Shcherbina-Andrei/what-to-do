import Header from '../../components/header/header';
import SearchResultsList from '../../components/search-results-list/search-results-list';

function SearchResultsPage(): JSX.Element {
  return (
    <div className="page__container">
      <Header />
      <main className="main">
        <SearchResultsList />
      </main>
    </div>
  );
}

export default SearchResultsPage;
