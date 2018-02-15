let INITIAL_STATE={
  isloading:true,
  data:''
}
export default (state=INITIAL_STATE,action) => {
  console.log(action,'main');
  switch(action.type){
    case 'LOAD_FIREBASE_DATA':
      return {...state,
        data:action.payload,
        isloading:false
      }
      default:
        return state;
  }
}
