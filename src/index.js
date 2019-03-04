import React from "react";
import ReactDOM from "react-dom";
import Button from '@material-ui/core/Button';
import "./style.css"

function App() {
    return (
        <Button variant="contained" color="primary">
            Hello World
        </Button>
    )
}

const appElement = document.getElementById('root');
ReactDOM.render(
    <App />,
    appElement
);