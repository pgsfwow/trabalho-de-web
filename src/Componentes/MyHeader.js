import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import "../Componentes/MyHeader.css";
import logo from '../Componentes/logo.png';
class MyHeader extends Component{

    render(){
        return(
            <div className="toolBar">
                <div className="logo">
                    
                    <NavLink to="/"><img src={logo} alt="logo"/></NavLink>
                </div>
                <div className="paginas">
                    <ul>
                        <li><NavLink to="/regras"> Regras </NavLink></li>
                        <li><NavLink to = "/"> Criações </NavLink></li>
                        <li><NavLink to ="/livros"> Livros </NavLink></li>
                    </ul>
                </div>
                <div className="midias">
                    <ul>
                        
                        <li><NavLink to="/login">Sign Up </NavLink></li>      
                        
                    </ul>
                </div>
            </div>
        );

    }
}

export default MyHeader;