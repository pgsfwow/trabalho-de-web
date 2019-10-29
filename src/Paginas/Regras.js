import React,{Component} from "react";
import "../Paginas/Pagina.css";
import "../Paginas/Regras.css";
import part1 from "./Imagens/part1.png";

class Regras extends(Component){
    

    

    render(){
        
        return(
            <div className="Regras">
                          
                <div className="Topico">
                 <div className="topico_1">    
                <img src={part1} alt ="imagen"></img>    
                <h1>Criar Personagem</h1>
                <p>
                Seu primeiro passo no papel de aventureiro no jogo Dungeons & Dragons é imaginar e criar seu próprio personagem. Seu personagem é uma combinação de estatísticas do jogo, ganchos de interpretação e sua imaginação. 
                Você escolhe uma raça (como humano ou halfling) e uma classe (como lutador ou mago). 
                Você também inventa uma personalidade, uma aparência e uma história de fundo do seu personagem. 
                Depois de concluído, seu personagem serve como seu representante no jogo, seu avatar no mundo de Dungeons & Dragons.<br/><br/>

                Antes de mergulhar na etapa 1 abaixo, pense no tipo de aventureiro que deseja jogar.
                Você pode ser um lutador corajoso, um trapaceiro, um clérigo fervoroso ou um extravagante. Você pode estar mais interessado em um personagem não convencional, como um homem musculoso que gosta de combate de perto ou um atirador de elite que derruba inimigos de longe. 
                Você gosta de ficção de fantasia com anões ou elfos? Tente construir um personagem de uma dessas raças. Você quer que seu personagem seja o mais difícil da mesa? Considere uma classe de lutadores. 
                <br/><br/>Se você não sabe por onde mais começar, dê uma olhada nas ilustrações de qualquer livro de Dungeons & Dragons para ver quem chama sua atenção.

                Depois de ter um personagem em mente, siga estas etapas no pedido, tomando decisões que refletem o personagem que você deseja. Seu desenho de seu personagem pode evoluir a cada escolha que você faz. O importante é que você chegue à mesa com um personagem que esteja animado para interpretar.

                Nesta seção, use o termo folha de personagem para significar ou como você usa para rastrear seu personagem, seja uma folha de caracteres formais (como se não houver regras finais), alguma forma de registro digital ou um pedaço de papel de caderno. Uma ficha oficial de personagem de D&D é um bom ponto de partida até você saber quais informações você precisa e como usar durante o jogo.</p>
                </div>
                <div className="topico_2">
                <h1>Classes</h1>
                <p></p>
                <div className="conteudo" >
                <table>
                        <tr>
                            <th>Classe</th>
                            <th>Descrição</th>
                            <th>Dado de vida</th>
                            <th>Atributo Primário</th>
                            <th>Resistencias</th>
                            <th>Proficiências</th>
                        </tr>
                        <tr>
                            <td>Barbaro</td>
                            <td>Um feroz guerreiro de origem primitiva que pode entrar em uma fúria de batalha</td>
                            <td>d12</td>
                            <td>Força</td>
                            <td>Força & Constituição</td>
                            <td>Armaduras leves e médias, escudos, armas simples e marciais</td>
                        </tr>
                        <tr>
                            <td>Bardo</td>
                            <td>Um mágico inspirador cujo poder ecoa a música da criação</td>
                            <td>d8</td>
                            <td>Carisma</td>
                            <td>Carisma & Destreza</td>
                            <td>Armaduras leves, armas simples, bestas, espadas longas, rapiers, espada curta</td>
                        
                         </tr>
                        <tr>
                            <td>Cleric</td>
                            <td>Um campeão sacerdotal que exerce magia divina a serviço de um poder superior</td>
                            <td>d8</td>
                            <td>Sabedoria</td>
                            <td>Carisma & Sabedoria</td>
                            <td>Armaduras leves e médias, escudos, armas simples</td>
                        
                        </tr>
                        <tr>
                            <td>Mago</td>
                            <td>Um usuário de magia acadêmico capaz de manipular as estruturas da realidade</td>
                            <td>d6</td>
                            <td>Inteligência</td>
                            <td>Inteligência & Sabedoria</td>
                            <td>Punhais, dardos, fundas, Cajados, bestas leves</td>
                           
                        </tr>
                </table>
                </div>
                </div>
                </div>

            </div>
        );
    }

}

export default Regras;