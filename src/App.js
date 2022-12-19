import './App.css';
import { SearchPresenter } from "./presenter/searchPresenter.js";
import { DetailsPresenter } from "./presenter/detailsPresenter";
import { HomePresenter } from "./presenter/homePresenter";
import { ListPresenter } from "./presenter/listPresenter";
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import { LoginPresenter } from "./presenter/loginPresenter";
import { NavbarPresenter } from "./presenter/NavbarPresenter";
import { About } from "./views/About";
 

function App(props) {
 return (
    <BrowserRouter> 
  
         <Routes>
					<Route path="/" element={<NavbarPresenter model={props.model}/>} >
          <Route index element={<HomePresenter model={props.model}/>}/>
          <Route path="/about" element={<About model={props.model} />}/>
          <Route path="/login" element={<LoginPresenter model={props.model}/>}/>
          <Route path="/list" element={<ListPresenter model={props.model} />}/>
          <Route path="/search" element={<SearchPresenter model={props.model} />}/>
          <Route path="/details" element={<DetailsPresenter model={props.model} />}/>
          <Route index path='*' element={<SearchPresenter model={props.model} />} />
          </Route>
        </Routes>
     
    </BrowserRouter>

  );
}

export default App;