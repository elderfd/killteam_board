import React from "react";
import BoardList from "./components/BoardList";
import "./App.css";

const App: React.FC = () => {
    return <div className="App">
        <BoardList data={[
            { "name": "hello" , "gamesPlayed": 5, "gamesWon": 1, "gamesLost": 4 },
            { "name": "other" , "gamesPlayed": 6, "gamesWon": 4, "gamesLost": 2  },
            { "name": "none" , "gamesPlayed": 1, "gamesWon": 1, "gamesLost": 0  }
        ]}></BoardList>
    </div>;
}

export default App;
