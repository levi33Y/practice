import javascriptLogo from "./asset/javascript.svg";
import viteLogo from "./asset/vite.svg";
import React from "./utlis/react/index.js";

export const App = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo + ""} className="logo" alt="Vite logo" />
      </a>
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        target="_blank"
      >
        <img
          src={javascriptLogo + ""}
          className="logo vanilla"
          alt="JavaScript logo"
        />
      </a>
      <h1>Hello Vite!</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        This n : {count}
      </button>
      <p className="read-the-docs">Click on the Vite logo to learn more</p>
    </div>
  );
};
