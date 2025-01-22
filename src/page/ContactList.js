import { useDispatch, useSelector } from "react-redux";
import Search from "../components/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

function ContactList() {

  const {contactList, keyword} = useSelector(state => state);
  const filterList = contactList.filter(item => item.name.includes(keyword));

  return (
    <div className="contactList">
      <Search />
      <p>{filterList.length}명</p>
      <div className="itemBox">
        {
          filterList.map(item => (
            <ListItem key={item.id} item={item}/>
          ))
        }
      </div>
    </div>
  )
}

function ListItem({item}) {

  const dispatch = useDispatch();

  const removeItem = (id) => {
    dispatch({type: 'REMOVE_ITEM', payload: id});
  }

  return (
    <div className="listItem">
      <figure><img src={item.img} alt={item.name} /></figure>
      <div className="text">
        <h3>{item.name}</h3>
        <p>{item.phone}</p>
      </div>
      <button type="button" onClick={() => removeItem(item.id)}>
        <FontAwesomeIcon icon={faMinus}/>
      </button>
    </div>
  )
}

export default ContactList;