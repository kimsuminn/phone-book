const initialState = {
  contactList: [],
  keyword: ''
}

function reducer(state=initialState, action) {
  console.log(action);

  switch (action.type) {
    case 'ADD_CONTACT':
      return {
        ...state,
        contactList: [
          ...state.contactList, 
          { id: Date.now(), name: action.payload.name, phone: action.payload.phone, img: action.payload.img }
        ]
      }
    case 'REMOVE_ITEM':
      return {
        ...state,
        contactList: state.contactList.filter(item => item.id !== action.payload)
      }
    case 'SEARCH':
      return {
        ...state,
        keyword: action.payload
      }
    default:
      return { ...state };
  }
}

export default reducer;