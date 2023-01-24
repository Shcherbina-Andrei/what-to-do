import {Outlet} from 'react-router-dom';

function PageLayout(): JSX.Element {
  return (
    <div className="page">
      <Outlet />
    </div>
  );
}

export default PageLayout;
