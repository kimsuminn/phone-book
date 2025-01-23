import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook, faPlus } from "@fortawesome/free-solid-svg-icons";

function Header() {

  const location = useLocation();
  const isAdd = location.pathname === '/';
  const isList = location.pathname === '/list';

  return (
    <header>
      <div className="header_inner">
        <h1>PHONE BOOK</h1>
        <ul className="tabMenu">
          <li className={isAdd ? "on" : ""}>
            <Link to='/'>
              <FontAwesomeIcon icon={faPlus} />
              <p>Add</p>
            </Link>
          </li>
          <li className={isList ? "on" : ""}>
            <Link to='/list'>
              <FontAwesomeIcon icon={faAddressBook} />
              <p>Contacts</p>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header;