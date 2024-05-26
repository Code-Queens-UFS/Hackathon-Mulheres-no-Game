import React from 'react';
import './App.css';

function App() {
    return (
        <div className="container">
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
                    <button className="option">
                        <span>Achar as manas</span>
                        <span className="icon">🎮</span>
                    </button>
                </div>
                <div className="options">
                    <button className="option">
                        <span>Ajudar as minas</span>
                        <span className="icon">👑</span>
                    </button>
                </div>
            </div>

        </div>
    );
}

export default App;