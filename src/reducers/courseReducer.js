export default function courseReducer(state=[],action){
  switch(action.type){
    case 'Loading':
      return [...state,
        Object.assign({},action.course)
      ];
      default:
        return state;
  }
}

const FirebaseData = () => {
const ref = database.ref("data");
let tilesobject = [];
ref.once("value").then(function(snapshot){
 let obj=snapshot.val();
 return obj;
// localStorage.setItem('data',JSON.stringify(obj));
// for (let value of obj) {
//    let dummy={};
//    dummy['id']=value.id;
//    dummy['img']=value.mainImg;
//    dummy['title']=value.title;
//    tilesobject.push(dummy);
//  }
}
}
