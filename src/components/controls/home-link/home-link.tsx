import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';

import './home-link.css';

function HomeLink(): JSX.Element {
  return (
    <Link className="home-link" to={AppRoute.Main}>
      <svg className="home-link__home-icon" width="40px" height="40px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.5 20V11H3L12 5L21 11H17.5V20H14.5V16.5C14.5 15.6716 13.8284 15 13 15H11C10.1716 15 9.5 15.6716 9.5 16.5V20H6.5Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="visually-hidden">Home</span>
    </Link>
  );
}

export default HomeLink;
