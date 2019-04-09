import React from "react";
import { Link } from "react-router-dom";
import oneImg from './img/Screenshot_3.png'
import twoImg from './img/Screenshot_4.png'

class App extends React.Component {
    render() {
        return (
            <div className="home">
                <Link to="/reacttic">
                    <img src={oneImg} alt="tic" className="one" />
                    <p>Tic tac toe (React)</p>
                </Link>
                <Link to="/reduxtic">
                    <img src={twoImg} alt="tic"/>
                    <p>Tic tac toe (Redux)</p>
                </Link>
            </div>
        );
    }
}

export default App;