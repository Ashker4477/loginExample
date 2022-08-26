import React from 'react';
import './App.css';
import LoginPage from './Pages/LoginPage';
import './assets/styles/style.css';
import './assets/style.css';

function App() {
    return (
        <>
            <div className="headerContainer">
                <span className="logo">
                    <a href="/" target="_blank">
                        deepsync
                    </a>
                </span>
            </div>
            <div className="center">
                <LoginPage />
            </div>
            <div className="text-center">
                © 2022 DeepSync Technologies. All rights reserved.
            </div>
        </>
    );
}

export default App;
