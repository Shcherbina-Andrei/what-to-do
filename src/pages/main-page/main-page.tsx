import Header from '../../components/header/header';
import ListOfLists from '../../components/list-of-lists/list-of-lists';

function MainPage(): JSX.Element {
  return (
    <div className="page__container">
      <Header />
      <main className="main">
        <ListOfLists />
      </main>
    </div>
  );
}

export default MainPage;
