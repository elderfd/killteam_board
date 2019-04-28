import React, { useState } from "react";
import BoardList from "./components/BoardList";
import { db, loginGoogle } from "./config/firebase";
import firebase from "firebase"
import "./App.css";

const App: React.FC = () => {
    const initialData: any[] = [];
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    const [ data, setData ] = useState(initialData);
    
    if (!isLoggedIn) {
        firebase.auth().getRedirectResult().then((result) => {
            if (result.credential) {
              // This gives you a Google Access Token. You can use it to access the Google API.
            //   let token = result.credential.accessToken;
              // ...
              setIsLoggedIn(true);
            } else {
                loginGoogle();
            }
            // The signed-in user info.
            // var user = result.user;
        }).catch(function(error) {
            // Handle Errors here.
            // var errorCode = error.code;
            // var errorMessage = error.message;
            // The email of the user's account used.
            // var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            // var credential = error.credential;
            // ...
        });

        // loginGoogle();
        // .then((value: any) => setIsLoggedIn(true));
    } else {
        db.collection("scores").get().then(snap => {
            const newData: any[] = [];
            
            snap.forEach(doc => {
                newData.push(doc.data());
            });

            setData(newData);
        });
    }
    
    return <div className="App">
        <BoardList data={data}></BoardList>
    </div>;
}

export default App;
