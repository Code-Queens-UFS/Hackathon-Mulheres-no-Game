import React, { useState } from 'react';
import './App.css';

function App() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [idade, setIdade] = useState('');
    const [tipo, setTipo] = useState('');
    const [telaEscolhida, setTela] = useState(1);
    

    const handleSubmit = (event) => {
        event.preventDefault();
        setTela(3);
    };

    const inicianteSubmit = (event) => {

        event.preventDefault();
        setTipo("iniciante");
        setTela(2);

    }

    const experienteSubmit = (event) => {

        event.preventDefault();
        setTipo("experiente");
        setTela(2);

    }

    const voltar = (event) => {

        setTela(1);

    }

    const prime = (event) => {

        setTela(4);

    }

    const lobby = (event) => {

        setTela(3);

    }

    

    return (
        <div className="container">

            <div className="inicial" style={telaEscolhida == 1 ? { display: 'block' } : { display: 'none' }}>
                <div className="header">
                    <div className="text">
                        <h1>Gamer Sisters</h1>
                        <p>Conectando as minas e as manas</p>
                    </div>

                    <div className="content">
                        <img
                            src="src/assets/imgs/logo.png"
                            alt="Gamer Sister"
                            className="girl-image"
                        />
                    </div>
                </div>

                <div className="footer">

                    <div className="text">

                        <p>O que deseja fazer por aqui?</p>

                    </div>
                    <div className="options">
                        <button className="option" onClickCapture={inicianteSubmit}>
                            <span>Achar as manas</span>
                            <span className="icon">🎮</span>
                        </button>
                    </div>
                    <div className="options">
                        <button className="option" onClickCapture={experienteSubmit}>
                            <span>Ajudar as minas</span>
                            <span className="icon">👑</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="cadastro" style={telaEscolhida == 2 ? { display: 'block' } : { display: 'none' } } >

                <form onSubmit={handleSubmit}>
                    <label htmlFor="nome">Nome:</label>
                    <input
                        type="text"
                        id="nome"
                        value={nome}
                        onChange={(event) => setNome(event.target.value)}
                    />
                    <br />
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <br />
                    <label htmlFor="idade">Idade:</label>
                    <input
                        type="number"
                        id="idade"
                        value={idade}
                        onChange={(event) => setIdade(event.target.value)}
                    />
                    <br />
                    <button type="submit">Enviar</button>
                    <button onClickCapture={voltar}>Voltar</button>

                </form>


            </div>

            <div className="Lobby" style={telaEscolhida == 3 ? { display: 'block' } : { display: 'none' }} >

                <header className="headerLobby">
                        <div class="logo">
                            <img
                                src="src/assets/imgs/logo.png"
                                alt="Gamer Sister"
                                className="girl-image"
                            />
                                <h1>Gamer Sisters</h1>
                        </div>

                        <div>
                        <a href="#" onClick={prime}>
                            <p>Seja Prime NinjaGamerSisters!</p>
                            <p>Matches Limitados,Mentorias e Workshops Exclusivos e Descontos e promoções exclusivas Kaboom</p>
                        </a>
                            
                        </div>

                    </header>

                    <div className="lobbyMsg">
                        <h1>Encontre uma jogadora experiente para se conectar</h1>
                        <p>E receba apoio em um espaço seguro para sua jornada de aprendizado.</p>

                    <div className="card-container">
                        <div className="card">
                                <h2>01</h2>
                                <p>Faça seu cadastro e selecione os jogos em que você curte jogar.</p>
                            </div>
                        <div className="card">
                                <h2>02</h2>
                                <p>Conecte-se com uma Pro.</p>
                            </div>
                        <div className="card">
                                <h2>03</h2>
                                <p>Agende o Match e comecem a jogar!</p>
                            </div>
                        <div className="card">
                                <h2>04</h2>
                                <p>Aproveite Benefícios Exclusivos!</p>
                            </div>
                        </div>

                        <div className="card-container">
                        <div className="player-card">
                                <img src="https://via.placeholder.com/300x150" alt="Amanda"/>
                                    <div className="player-info">
                                <h2 className="player-name">Amanda, 19</h2>
                                <p className="player-game">Viciante em: League of Legends</p>
                                <div className="button-container">
                                    <button className="player-button">Curtir</button>
                                    <button className="player-button">Ver perfil</button>
                                        </div>
                                    </div>
                            </div>

                        <div className="player-card">
                                <img src="https://via.placeholder.com/300x150" alt="Amanda"/>
                            <div className="player-info">
                                <h2 className="player-name">Amanda, 19</h2>
                                <p className="player-game">Viciante em: League of Legends</p>
                                <div className="button-container">
                                    <button className="player-button">Curtir</button>
                                    <button className="player-button">Ver perfil</button>
                                        </div>
                                    </div>
                            </div>

                        <div className="player-card">
                                <img src="https://via.placeholder.com/300x150" alt="Amanda"/>
                            <div className="player-info">
                                <h2 className="player-name">Amanda, 19</h2>
                                <p className="player-game">Viciante em: League of Legends</p>
                                <div className="button-container">
                                    <button className="player-button">Curtir</button>
                                    <button className="player-button">Ver perfil</button>
                                        </div>
                                    </div>
                            </div>
                        </div>
                       </div>
                    </div>

                    <footer className="footerLobby">
                        <p>All Rights Reserved | Terms and Conditions | Privacy Policy</p>
                        <div className="social-media">
                    <a href="https://www.instagram.com/code.queens/" target="_blank" >Instagram</a>
                        </div>
            </footer>

            <div className="prime" style={telaEscolhida == 4 ? { display: 'block' } : { display: 'none' }}>

                    <div className="headerPrime">
                        <h1>Gamer Sisters</h1>
                        <div className="icon">
                        <a onClick={lobby}>Voltar</a>
                        </div>
                    </div>

                    <div className="cardBox">

                        <div className="card">
                            <h1>Acesso gratuito</h1>
                            <div className="price">R$0,00</div>
                            <ul className="features">
                                <li>
                                    <input type="checkbox" checked disabled />
                                    <span>Dê um match.</span>
                                </li>
                                <li>
                                    <input type="checkbox" checked disabled />
                                    <span>Converse.</span>
                                </li>
                                <li>
                                    <input type="checkbox" checked disabled />
                                    <span>Jogue.</span>
                                </li>
                            </ul>
                            <button className="button">Entrar na lista de espera</button>
                        </div>

                        <div className="card">
                            <h1>Prime Ninja GS</h1>
                            <div className="price">R$25,90<span>9x</span></div>
                            <p style={{ textAlign: 'center', fontSize: 12, marginBottom: 20 }}>
                                *Assinatura com validade de 12 meses.
                            </p>
                            <ul className="features">
                                <li>
                                    <input type="checkbox" checked disabled />
                                    <span>Curtidas ilimitadas</span>
                                </li>
                                <li>
                                    <input type="checkbox" checked disabled />
                                    <span>Workshops exclusivos</span>
                                </li>
                                <li>
                                    <input type="checkbox" checked disabled />
                                    <span>Eventos e torneios exclusivos</span>
                                </li>
                            </ul>

                            <p style={{ textAlign: 'center', fontSize: 12, marginBottom: 20 }}>
                                Na Kabum você tem:
                            </p>
                            <ul className="features">
                                <li>
                                    <input type="checkbox" checked disabled />
                                    <span>Promoções exclusivas</span>
                                </li>
                                <li>
                                    <input type="checkbox" checked disabled />
                                    <span>Descontos no frete</span>
                                </li>
                                <li>
                                    <input type="checkbox" checked disabled />
                                    <span>Entrega mais rápida</span>
                                </li>
                                <li>
                                    <input type="checkbox" checked disabled />
                                    <span>Atendimento priorizado</span>
                                </li>
                                <li>
                                    <input type="checkbox" checked disabled />
                                    <span>Cupons em dobro</span>
                                </li>
                            </ul>
                            <button className="button">Entrar na lista de espera</button>
                        </div>

                </div>

            </div>

        </div>
    );
}

export default App;