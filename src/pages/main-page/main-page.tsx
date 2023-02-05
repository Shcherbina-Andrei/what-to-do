import Header from '../../components/header/header';
import ListOfLists from '../../components/list-of-lists/list-of-lists';
import './main-page.css';

function MainPage(): JSX.Element {
  return (
    <div className="page__container">
      <Header />
      <main className="main">
        <h2 className="page-title main-paige__title">My lists</h2>
        <ListOfLists />
      </main>
    </div>
  );
}

export default MainPage;
