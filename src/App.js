import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import 'bulma/css/bulma.min.css';
import './App.css';
import BouncingCells from './components/BouncingCells'; // Import the BouncingCells component
import Projects from './components/Projects';
import MainPage from './components/MainPage';
function App() {
    return (
        <div className="app">
            <Router>
                <header className="header">
                    <div className="header-content">
                        <div className="is-flex is-justify-content-space-between is-align-items-center">
                            <div>
                                <Link
                                    to="/"
                                    className="button is-small is-outlined has-text-white"
                                    style={{ marginRight: '10px' }}
                                >
                                    <span className="icon">
                                        <i className="fas fa-e"></i>
                                    </span>
                                    <span>Eric Xie</span>
                                </Link>
                            </div>
                            <div className="header-buttons"> {/* New container for buttons */}
                                <a
                                    href="https://github.com/ericx1e"
                                    className="button is-small is-outlined has-text-white"
                                    style={{ marginRight: '10px' }}
                                >
                                    <span className="icon">
                                        <i className="fab fa-github"></i>
                                    </span>
                                    <span>GitHub</span>
                                </a>
                                <Link
                                    to="/projects"
                                    className="button is-small is-outlined has-text-white"
                                    style={{ marginRight: '10px' }}
                                >
                                    <span className="icon">
                                        <i className="fas fa-laptop-code"></i>
                                    </span>
                                    <span>Projects</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </header>

                <main className="main">
                    <div className="middle-section">
                        <Routes>
                            <Route path="/" element={<MainPage />} />
                            <Route path="/projects" element={<Projects />} />
                        </Routes>
                    </div>
                </main>

                <footer className="footer has-text-light">
                    <div className="container">
                        <div className="is-flex is-justify-content-center">
                            <a href="mailto:youremail@example.com" className="footer-icon">
                                <i className="fas fa-envelope"></i>
                            </a>
                            <a href="https://www.instagram.com/yourinstagram/" className="footer-icon">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/yourlinkedin/" className="footer-icon">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="/your-resume.pdf" className="footer-icon">
                                <i className="fas fa-file-pdf"></i>
                            </a>
                        </div>
                    </div>
                </footer>
            </Router>
        </div>
    );
}

export default App;