import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bulma/css/bulma.min.css';
import './App.css';
import BouncingCells from './components/BouncingCells'; // Import the BouncingCells component


function App() {
    return (
        <div className="app">
            <header className="header">
                <div className="container is-flex is-justify-content-space-between is-align-items-center">
                    <div>
                        <p className="has-text-white">Eric Xie</p>
                    </div>
                    <div>
                        <a
                            href="https://github.com/yourusername"
                            className="button is-small is-outlined has-text-white"
                        >
                            <span className="icon">
                                <i className="fab fa-github"></i>
                            </span>
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>
            </header>

            <main className="main">
                <div className="middle-section">
                    <div className="container has-text-centered">
                        <BouncingCells />
                        <h2 className="title">Eric Xie</h2>
                        <br></br>
                        <p>This is a sample big text section in the middle of the website.</p>
                    </div>
                </div>
            </main>

            <footer className="footer has-text-light">
                <p>&copy; 2023 Your Website. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;