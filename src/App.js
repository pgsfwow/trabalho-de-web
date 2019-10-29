import React ,{Component} from 'react';
import "./App.css";
import MyHeader from './Componentes/MyHeader';
import Home from './Paginas/Home';
import Livros from "./Paginas/Livros";
import Regras from "./Paginas/Regras";
import Footer from './Componentes/Footer';
import Login from "./Paginas/Login";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
class App extends Component{

  render(){
  return (

    <BrowserRouter>
      <MyHeader/>
      <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/regras" component={Regras} />
          <Route path="/login" component={Login}/>
          <Route path="/livros" component={Livros}/>  
      </Switch>
      <Footer/>
    </ BrowserRouter>
     );
  }
}

export default App;
