import React from "react";
import BoardList from "./components/BoardList";
import "./App.css";

const App: React.FC = () => {
    return <div className="App">
        <BoardList data={[
            { "name": "hello" },
            { "name": "other" },
            { "name": "none" }
        ]}></BoardList>
    </div>;
}

export default App;
