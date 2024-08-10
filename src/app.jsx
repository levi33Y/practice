import javascriptLogo from '../public/javascript.svg'
import viteLogo from '../public/vite.svg'

export const App = () => {

    return <div>
        <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo + ""} className="logo" alt="Vite logo"/>
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
            <img src={javascriptLogo + ""} className="logo vanilla" alt="JavaScript logo"/>
        </a>s
        <h1>Hello Vite!</h1>
        <div className="card">
            <button id="counter" type="button"></button>
        </div>
        <p className="read-the-docs">
            Click on the Vite logo to learn more
        </p>
    </div>
}