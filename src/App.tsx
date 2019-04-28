import React from "react";
import BoardList from "./components/BoardList";
import { scoresRef } from "./config/firebase";
import "./App.css";

const App: React.FC = () => {
    let data: any = [];
    
    scoresRef.on("value", (snap: any) => {
        data.push(snap.val());
    });

    return <div className="App">
        <BoardList data={data}></BoardList>
    </div>;
}

export default App;
