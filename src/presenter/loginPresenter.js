import { 
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
 } from "firebase/auth";
import {app} from '../js/firebaseConfig';
import { useState } from 'react';
import { useModelProperty } from "../js/useModelProperty";
import { useNavigate } from 'react-router-dom';
import { LoginView } from  '../views/loginView.js'
export function LoginPresenter(props){
    
    const currentUser = useModelProperty(props.model, "user");
    const currentBook = useModelProperty(props.model, "currentBook");
    const auth = getAuth(app);
   
    const navigate = useNavigate();
    const [logIn, setLogIn] =  useState(true);
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


   const createAccount = () => {
    if(currentUser) return;
    createUserWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
     (currentBook===null) ?
     navigate('/')
    :
     navigate('/details');

   })
   .catch((error) => {
    errorText(error.code);
   });
};

const errorText = (error) => {

 if(error==='auth/invalid-email')
    setError('Email is invalid')

 if(error==='auth/internal-error')
    setError('Write your password')

 if(error==='auth/wrong-password')
    setError('Write the correct password')

 if(error==='auth/weak-password')
    setError('Write stronger password')

    if(error==='auth/email-already-in-use')
    setError('email is already in use')

    if(error==='auth/user-not-found')
    setError('Create a new account')
}



const login = () => {   
  if(currentUser) return;
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
            (currentBook===null) ?
             navigate('/')
            :
             navigate('/details');
    })
    .catch((error) => {
      errorText(error.code);
    });
}

const signout = () => { 
    if(!currentUser) return;
    signOut(auth).then(() => {
      }).catch((error) => {
        alert(error.code);
      });
}

 return (
     <div> 
          <LoginView
           errorText={error}
           signIn={logIn}
           login={() => setLogIn(true)}
           signUp={() => setLogIn(!logIn)}
           onLogIn={login}
           onSignOut={signout}
           onCreate={createAccount}
           onEmail={(mail) => setEmail(mail)}
           onPassword={(paswrd) => setPassword(paswrd)}
         />
     </div>
   ); 

 }
 