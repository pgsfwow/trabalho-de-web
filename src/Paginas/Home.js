import React ,{Component} from 'react';
import video_intro from"../Videos/video_intro.mp4";
import "../Paginas/Home.css";
import "../Paginas/Pagina.css";
import song from "../Videos/SONG.mp4";
import lore from "../Videos/LORE.mp4";
import char from "../Videos/CHAR.mp4";

class Home extends Component{




  render(){
  return ( 

    <div className="Home"> 
        <div className="banner">
            <h1>
                Bem vindo a taverna
            </h1>
            
        </div>
        <div classNsame="ConteudoHome">
            <div className="Topico">
                <h1>O que é RPG ?</h1>
                <p>  <br/> <br/>  RPG é a sigla em inglês para role-playing game, um gênero de jogo no qual os jogadores assumem o papel de personagens imaginários, em um mundo fictício.

                 Os jogos de RPG podem ser jogados de diversas formas. As mais comuns são através de atuação literal, na qual os jogadores agem, falam e se vestem como seus personagens, e o RPG de mesa, a forma mais famosa (e a primeira inventada) de RPG.

                 Em qualquer modalidade de RPG, as histórias são guiadas por um jogador denominado “mestre”, que dita a trama, descreve os cenários, controla os inimigos que outros jogadores enfrentam, etc. Enquanto isso, os outros jogadores tomam suas decisões de forma livre conforme as situações narradas pelo mestre.

                As principais características do RPG são a interatividade e o trabalho em grupo. É muito raro que jogadores se reúnam para jogar RPG de forma competitiva, uma vez que se trata de um jogo predominantemente colaborativo, no qual os jogadores só conseguirão vencer se trabalharem em conjunto.</p>
                <div className="introduction">
                    <p>Escolha o RPG que prefirir ,mas aqui está um exemplo de partida de Dungeons And Dragons ,que será o foco dessa taverna:</p>
                    <video width="300" height="240" controls>
                        <source src={video_intro}/>
                    </video>
                </div>
                <div className="Feed">
                <h1>Outros videos </h1>
                <ul>
                    <li><video width="300" height="240" controls>
                    <source src={char}/>
                    </video></li>
                    
                    <li><video width="300" height="240" controls>
                    <source src={lore}/>
                    </video></li>
                    
                    <li><video width="300" height="240" controls>
                    <source src={song}/>                    
                    </video></li>
                
                </ul>
            </div>
            </div>
            
        </div>

    </div>
    );
  }
}

export default Home;
