import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch } from "react-redux";

function Search() {

  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const searchSubmit = (e) => {
    e.preventDefault();
    dispatch({type: 'SEARCH', payload: search})
    setSearch('');
  }

  return (
    <div className="search">
      <form onSubmit={searchSubmit}>
        <input 
          type="text" 
          placeholder="이름을 입력해주세요."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </div>
  )
}

export default Search;