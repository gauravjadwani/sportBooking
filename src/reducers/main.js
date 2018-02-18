let INITIAL_STATE={
  isloading:true,
  data:'',
  showModal:false
}
export default (state=INITIAL_STATE,action) => {
  console.log(action,'main');
  switch(action.type){
    case 'LOAD_FIREBASE_DATA':
      return {...state,
        data:action.payload,
        isloading:false
      }
      case 'SHOW_MODAL':
        return {...state,
          showModal:action.payload
        }
        case 'HIDE_MODAL':
          return {...state,
            showModal:action.payload
          }
      default:
        return state;
  }
}
