import {database} from '../firebase';
export const LOAD_FIREBASE_DATA = () => {

    return(dispatch) => {
      const ref = database.ref("data");
      let tilesobject = [];
      ref.once("value").then(function(snapshot) {
        let obj = snapshot.val();
        console.log(obj,'firebase');
      dispatch({type: 'LOAD_FIREBASE_DATA', payload: obj});
    })

}
}
export const SHOW_MODAL = () => {
  return(dispatch) => {
    dispatch({type: 'SHOW_MODAL', payload: true});
  }
}
export const HIDE_MODAL = () => {
  return(dispatch) => {
    dispatch({type: 'HIDE_MODAL', payload: false});
  }
}
