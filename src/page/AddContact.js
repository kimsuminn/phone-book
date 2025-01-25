import { faDeleteLeft, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../store/contactSlice";
import { useNavigate } from "react-router-dom";

function AddContact() {
  return (
    <div className="addContact">
      <InputForm />
    </div>
  )
}

function InputForm() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({name: '', phone: '', img: 'unknown_person.jpg'});
  const fileInputRef = useRef(null);

  const onChangeImageUpload = (e) => {
    const { files } = e.target;

    if (!files || files.length === 0) {
      return ;
    }

    const uploadFile = files[0];
    const reader = new FileReader();

    reader.readAsDataURL(uploadFile);
    reader.onloadend = () => {
      setInputValue({...inputValue, img: reader.result});
    }
  }

  const clickKeypad = (btn) => {
    if (btn === 'reset') {
      setInputValue({...inputValue, phone: ''});
    } else if (btn === 'back') {
      setInputValue({...inputValue, phone: inputValue.phone.slice(0, -1)});
    } else {
      setInputValue({...inputValue, phone: inputValue.phone + btn});
    }
  }

  const submit = (e) => {
    e.preventDefault();
    if (inputValue.name.trim() && inputValue.phone.trim()) {
      // dispatch({type: 'ADD_CONTACT', payload: inputValue});
      dispatch(addItem(inputValue));
      setInputValue({name: '', phone: '', img: 'unknown_person.jpg'});
      navigate('/list');
    } else {
      alert('연락처를 제대로 입력하지 않으셨습니다!');
      setInputValue({name: '', phone: '', img: 'unknown_person.jpg'});
    }
  }

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const removeImg = () => {
    setInputValue({...inputValue, img: 'unknown_person.jpg'});
  }

  const keyDownEvent = (e) => {
    const keyMap = {
      '0': '0',
      '1': '1',
      '2': '2', 
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7',
      '8': '8', 
      '9': '9',
      Backspace: 'back',
      Delete: 'reset'
    };

    if (keyMap[e.key]) {
      // e.preventDefault();
      clickKeypad(keyMap[e.key]);
    }
  }

  return (
    <form onSubmit={submit}>
      <div className="img">
        <label htmlFor="img">
          <img src={inputValue.img} alt="profile" />
          {
            inputValue.img === 'unknown_person.jpg' ? 
              <p><FontAwesomeIcon icon={faPlus}/></p> : 
              <></>
          }
        </label>
        <input
          type="file"
          accept="image/*"
          id="img"
          ref={fileInputRef}
          onChange={onChangeImageUpload}
        />
        <div className="btnBox">
          { inputValue.img === 'unknown_person.jpg' ?
              <button id="img" type="button" onClick={triggerFileInput}>추가</button> :
              <button type="button" onClick={removeImg}>제거</button>
          }
        </div>
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
          onKeyDown={keyDownEvent}
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