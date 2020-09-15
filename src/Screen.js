import React from "react";
import Header from "./Header";
import { useFns } from "./context";

const Screen = () => {
    const { logUserIn } = useFns();
    return (
        <div>
            <Header />
            <h1>Frist screen</h1>
            <button onClick={logUserIn}>Log user in</button>
        </div>
    );
};

export default Screen;