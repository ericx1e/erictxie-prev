import React from 'react';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import 'bulma/css/bulma.min.css';
import './App.css';
import MainPage from './components/MainPage';
import ProjectPage from './components/ProjectPage';
import AboutPage from './components/AboutPage';
import BlogPage from './components/BlogPage';

function App() {
    const location = useLocation();

    return (
        <div className="app is-family-sans-serif">
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
                                    <i className="fas fa-home"></i>
                                </span>
                                <span>Eric Xie</span>
                            </Link>
                        </div>
                        <div className="header-buttons"> {/* New container for buttons */}
                            <a
                                href="https://github.com/ericx1e"
                                className="button is-small is-outlined has-text-white"
                                style={{ marginRight: '10px' }}
                                target="_blank"
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
                            {/* <Link
                                to="/blog"
                                className="button is-small is-outlined has-text-white"
                                style={{ marginRight: '10px' }}
                            >
                                <span className="icon">
                                    <i className="fas fa-newspaper"></i>
                                </span>
                                <span>Blog</span>
                            </Link> */}
                            <Link
                                to="/about"
                                className="button is-small is-outlined has-text-white"
                                style={{ marginRight: '10px' }}
                            >
                                <span className="icon">
                                    <i className="fas fa-question"></i>
                                </span>
                                <span>About</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            <main className="main">
                <div className="middle-section">
                    <TransitionGroup className="transition-group">
                        <CSSTransition
                            key={location.key}
                            timeout={{ exit: 400, enter: 400 }}
                            classNames="page"
                        >
                            <Routes location={location}>
                                <Route path="/" element={<MainPage />} />
                                <Route path="/projects" element={<ProjectPage />} />
                                <Route path="/blog" element={<BlogPage />} />
                                <Route path="/about" element={<AboutPage />} />
                            </Routes>
                        </CSSTransition>
                    </TransitionGroup>
                </div>
            </main>

            <footer className="footer has-text-light">
                <div className="container">
                    <div className="is-flex is-justify-content-center">
                        <a href="mailto:ericxie6@gmail.com" className="footer-icon" target="_blank">
                            <i className="fas fa-envelope"></i>
                        </a>
                        <a href="https://www.instagram.com/erictxie/" className="footer-icon" target="_blank">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/eric-xie-895a671aa/" className="footer-icon" target="_blank">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="/Eric_Xie_Resume.pdf" className="footer-icon"
                            target="_blank">
                            <i className="fas fa-file-pdf"></i>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;