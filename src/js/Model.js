import { BookSource } from "./bookSource";
import { 
   getAuth,
   onAuthStateChanged,
   setPersistence,
   browserSessionPersistence,
} from "firebase/auth";
import {PersistModel, PersistUpdate} from "./firebaseModel.js";
 
export class Model{
   constructor(user=null, books=[], currentBook = null, observers=[]){
      this.observers = [];
      this.setCurrentBook(currentBook);
      this.books = books;
      this.setUser(user);
      this.savedState();
   }

   savedState(){
      const auth = getAuth();
   setPersistence(auth, browserSessionPersistence).then(() => { 
     onAuthStateChanged(auth, (user) => {
         if (user) {
            this.setUser(user);
              this.books = [];
              PersistModel(this);
         } else {
              this.setUser(null);
         } 
       });
      }).catch((error) => {
        const errorCode = error.code;
        console.error(errorCode); 
       });
     }

    setBooks(books){ 
       this.books = [...books];
        PersistUpdate(this) 
       this.notifyObservers();
      }

        setUser(user){ 
         if(this.user !== user){
         this.user = user;
         this.notifyObservers(); 
      } 
   } 

	   setCurrentBook(id){
		  if(this.currentBook===id)
         return;
          if(!id) 
         id = localStorage.getItem("currentBook")
         localStorage.setItem("currentBook", id)
			
         this.currentBook = id;
			this.currentBookDetails = null;
         this.currentBookError = null;
			this.notifyObservers();
			if(this.currentBook) {
         BookSource.getBookDetails(id)
        
			.then(response =>{
			if(this.currentBook===id){ 
			this.currentBookDetails=response;
			this.notifyObservers();
		}})
		  .catch(error => {
		  if(this.currentBook===id){
		  this.currentBookError=error;
		  this.notifyObservers();
	  }})}
   
}

addToList(bok) {
   if(this.books){
     let find_book = this.books.find(d => d.id === bok.id)
     if(find_book)
     throw new Error ( `This book is already in the list!`)
   }
   this.books = [bok, ...this.books]
   PersistUpdate(this)
   this.notifyObservers(); 
}

removeFromList(bok) {
   if(this.books.find(d => bok === d.id )){
      this.books = this.books.filter(d => d.id !== bok);
      console.log(this.books)
      PersistUpdate(this) 

      this.notifyObservers();
   }
   else{
      throw new Error ("The book is not  in the list!");
   }
}

addObserver(callback){
   this.observers =[callback,...this.observers]
}

removeObserver(callback){
   this.observers = this.observers.filter(observer => observer !== callback)

}


notifyObservers(){
   this.observers.forEach( cb => { try { cb()} 
   catch(error){ console.error(error); 
       }
     }
   )
  }
}

