
import {getAuth, signOut} from "firebase/auth";
import {app} from '../js/firebaseConfig';
import{NavbarView} from "../views/NavbarView";
import {useModelProperty} from "../js/useModelProperty";

export function NavbarPresenter(props) {
    const user = useModelProperty(props.model, "user");
   
    const auth = getAuth(app);

    const signout = () => { 
        if(!user) return;
        signOut(auth).then(() => {
            props.model.setBooks([]);
          }).catch((error) => {
            alert(error.code);
          });
    }

    return (
       <div> 
          <NavbarView login={(user) ? true : false} signOut={signout}/>
       </div>
    ); 
}
