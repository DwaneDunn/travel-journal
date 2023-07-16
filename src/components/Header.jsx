import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';

import './Header.css';

function Header() {
  return (
    <header className="title--bar">
      <FontAwesomeIcon className="title--icon" icon={faEarthAmericas} />
      <h1 className="title--text">my travel journal.</h1>
    </header>
  );
}

export default Header;
