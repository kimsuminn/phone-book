import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Header() {

  const [tab, setTab] = useState('add');

  return (
    <header>
      <div className="header_inner">
        <h1>PHONE BOOK</h1>
        <ul className="tabMenu">
          <li className={tab === 'add' ? "on" : ""}>
            <Link to='/' onClick={() => setTab('add')}>
              <FontAwesomeIcon icon={faPlus} />
              <p>Add</p>
            </Link>
          </li>
          <li className={tab === 'list' ? "on" : ""}>
            <Link to='/list' onClick={() => setTab('list')}>
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