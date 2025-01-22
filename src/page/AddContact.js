import { faDeleteLeft, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch } from "react-redux";

function AddContact() {
  return (
    <div className="addContact">
      <InputForm />
    </div>
  )
}

function InputForm() {

  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState({name: '', phone: '', img: 'unknown_person.jpg'});

  const onChangeImageUpload = (e) => {
    const { files } = e.target;
    const uploadFile = files[0];
    const reader = new FileReader();

    reader.readAsDataURL(uploadFile);
    reader.onloadend = () => {
      setInputValue({...inputValue, img: reader.result});
    }
  }

  const clickKeypad = (btn) => {
    switch(btn) {
      case '0':
        setInputValue({...inputValue, phone: inputValue.phone + '0'});
        break;
      case '1':
        setInputValue({...inputValue, phone: inputValue.phone + '1'});
        break;
      case '2':
        setInputValue({...inputValue, phone: inputValue.phone + '2'});
        break;
      case '3':
        setInputValue({...inputValue, phone: inputValue.phone + '3'});
        break;
      case '4':
        setInputValue({...inputValue, phone: inputValue.phone + '4'});
        break;
      case '5':
        setInputValue({...inputValue, phone: inputValue.phone + '5'});
        break;
      case '6':
        setInputValue({...inputValue, phone: inputValue.phone + '6'});
        break;
      case '7':
        setInputValue({...inputValue, phone: inputValue.phone + '7'});
        break;
      case '8':
        setInputValue({...inputValue, phone: inputValue.phone + '8'});
        break;
      case '9':
        setInputValue({...inputValue, phone: inputValue.phone + '9'});
        break;
      case 'reset':
        setInputValue({...inputValue, phone: ''});
        break;
      case 'back':
        setInputValue({...inputValue, phone: inputValue.phone.slice(0, -1)});
        break;
      default:
        return;
    }
  }

  const submit = (e) => {
    e.preventDefault();
    if (inputValue.name.trim() && inputValue.phone.trim()) {
      dispatch({type: 'ADD_CONTACT', payload: inputValue});
      setInputValue({name: '', phone: '', img: 'unknown_person.jpg'});
    } else {
      alert('연락처를 제대로 입력하지 않으셨습니다!');
      setInputValue({name: '', phone: '', img: 'unknown_person.jpg'});
    }
  }

  return (
    <form onSubmit={submit}>
      <div className="img">
        <label htmlFor="img">
          <img src={inputValue.img} alt="profile" />
        </label>
        <input
          type="file"
          accept="image/*"
          id="img"
          onChange={onChangeImageUpload}
        />
      </div>
      <div className="name">
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          id="name" 
          value={inputValue.name}
          onChange={(e) => setInputValue({...inputValue, name: e.target.value})}
        />
      </div>
      <div className="phone">
        <label htmlFor="phone">Phone Number</label>
        <input 
          className="numberBox" 
          id="phone"
          value={inputValue.phone}
          readOnly
        />
        <div className="btnBox">
          <button type="button" onClick={() => clickKeypad('1')}>1</button>
          <button type="button" onClick={() => clickKeypad('2')}>2</button>
          <button type="button" onClick={() => clickKeypad('3')}>3</button>
          <button type="button" onClick={() => clickKeypad('4')}>4</button>
          <button type="button" onClick={() => clickKeypad('5')}>5</button>
          <button type="button" onClick={() => clickKeypad('6')}>6</button>
          <button type="button" onClick={() => clickKeypad('7')}>7</button>
          <button type="button" onClick={() => clickKeypad('8')}>8</button>
          <button type="button" onClick={() => clickKeypad('9')}>9</button>
          <button type="button" onClick={() => clickKeypad('reset')}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <button type="button" onClick={() => clickKeypad('0')}>0</button>
          <button type="button" onClick={() => clickKeypad('back')}>
            <FontAwesomeIcon icon={faDeleteLeft} />
          </button>
        </div>
      </div>
      <button type="submit">등록</button>
    </form>
  )
}

export default AddContact;