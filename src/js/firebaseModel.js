import { getDatabase, ref, update,  onValue } from "firebase/database";
import {app} from './firebaseConfig';
 

export function PersistModel(model) {
  if(!model.user) return;
  let user = model.user.uid;
  const db = getDatabase(app); 
  const starCountRef = ref(db,'users/' + user);
   onValue(starCountRef, (snapshot) => {
     const data = snapshot.val();
    try {
        if(data) {   
     model.setBooks(data.books|| []);
  }
  } catch (e) {
     console.log(e);
   }  
  });

}

export function PersistUpdate(model) {
  if(!model.user) return;
  const db = getDatabase(app); 
  update(ref(db, 'users/'+ model.user.uid), {
    books: model.books
})
.then(()=>{
  return;
})
.catch((error)=>{
  console.error(error); 
});
}
 