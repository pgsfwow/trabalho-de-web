import React,{Component} from 'react';
import {Link} from "react-router-dom";
import footer_Img from"../Componentes/footer.jpg";
import "../Componentes/Footer.css";
class Footer extends Component{

    render(){

        return(
        <div className= "footer">
            <Link to ="/"><img src={footer_Img}alt="footer"/></Link>
        </div>
        );

    }

}

export default Footer;