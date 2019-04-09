import React from "react";
import { Link } from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <>
                <Link to="/reacttic">
                    <p>Tic tac toe (React)</p>
                </Link>
                <Link to="/reduxtic">
                    <p>Tic tac toe (Redux)</p>
                </Link>
            </>
        );
    }
}

export default App;