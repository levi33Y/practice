import '../style.css'
import React from "../utlis/react";
import {App} from "./app.jsx"
import viteLogo from "../public/vite.svg";
import javascriptLogo from "../public/javascript.svg";

function useState(initialValue) {
    let state = initialValue;
    const setState = (newValue) => {
        state = newValue;
        //触发重新渲染
        React.render(app(), document.getElementById("app"))
        console.log(123)
    };
    return [state, setState];
}

const app = () => {
    const [count, setCount] = useState(0);
    
    const onClick = () => {
        console.log(123)
    }
    
    return (
        <div>
            <a href="https://vitejs.dev" target="_blank">
                <img src={viteLogo + ""} className="logo" alt="Vite logo"/>
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
                <img src={javascriptLogo + ""} className="logo vanilla" alt="JavaScript logo"/>
            </a>
            <h1>Hello Vite!</h1>
            <button onClick={()=>onClick()}>This n : {count}</button>
            <div></div>
            <p className="read-the-docs">
                Click on the Vite logo to learn more
            </p>
        </div>
    )
}

React.render(app(), document.getElementById("app"))