import React,{Component} from "react";
import ManualDoMestre from "./Imagens/ManualDoMestre.jpg";
import ManualDosMonstros from "./Imagens/ManualDosMonstros.jpg";
import manualDoJogador from "./Imagens/manualDoJogador.jpg";
import "./Livros.css";
class Livros extends Component {


    render(){
        return(
        <div  className="Livros">

            <div className="Livro">
                <div className="imagem">
                    <img src={manualDoJogador} alt="manual do jogador" width="200px" height="250px"/>
                </div>
                <div className ="descricão">
                    <h1>Livro do Jogador</h1>
                    <p>Para mais informações sobre classes,raçãs e regras de jogo compre o manual do jogador.</p>
                    <a href="https://www.amazon.com.br/Players-Handbook-Wizards-RPG-Team/dp/0786965606/ref=sr_1_2?keywords=D%26D&qid=1572291313&s=books&sr=1-2">Compre aqui.</a>
                </div>
            </div>

            
            <div className="Livro">
                <div className="imagem">
                    <img src={ManualDoMestre} alt="manual do mestre" width="200px" height="250px"/>
                </div>
                <div className ="descricão">
                    <h1>Manual do Mestre</h1>
                    <p>Para mais informações sobre criação de aventuras,masmorras e econtros épicos compre o manual do mestre.</p>
                    <a href="https://www.amazon.com.br/Dungeon-Masters-Guide-Wizards-Team/dp/0786965622/ref=pd_bxgy_14_img_3/143-8287109-8564029?_encoding=UTF8&pd_rd_i=0786965622&pd_rd_r=a5058fb3-f1e0-4cfb-bc14-473aaf289888&pd_rd_w=69fNV&pd_rd_wg=fTBFm&pf_rd_p=535a4fe1-ccc3-41ac-80db-918167bf8fe5&pf_rd_r=FN6VGG14JVB7MZGW9GSN&psc=1&refRID=FN6VGG14JVB7MZGW9GSN">Compre aqui.</a>
                </div>
            </div>
            
            <div className="Livro">
                <div className="imagem">
                    <img src={ManualDosMonstros} alt="manual dos monstros" width="200px" height="250px"/>
                </div>
                <div className ="descricão">
                    <h1>Manual dos monstros</h1>
                    <p>Para ter em seu arsenal um grande número de criaturas para tornar sua aventura ainda mais épica compre o manual dos monstros.</p>
                    <a href="https://www.amazon.com.br/Players-Handbook-Wizards-RPG-Team/dp/0786965606/ref=sr_1_2?keywords=D%26D&qid=1572291313&s=books&sr=1-2">Compre aqui.</a>
                </div>
            </div>

        </div>

        );
    }

}

export default Livros;