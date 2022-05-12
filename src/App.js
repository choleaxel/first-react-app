import { useState } from "react";
// import logo from './logo.svg'; //loading image from that file calling it logo
import "./App.css"; //bringing in a css file allowing us to style things

function App() {
  const [count, setCount] = useState(0);
  const [firstName, setFirstName] = useState('Juan');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const logInLogOut = () => setIsLoggedIn(!isLoggedIn)
  return (
    <div className="App">
      <header className="App-header">
        <h1>You clicked the button {count} times</h1>
        <button onClick={() => setCount(count + 1)}>+</button>&nbsp;
        <button onClick={() => setCount(0)}>RESET</button>&nbsp;
        <button onClick={() => setCount(count ? count - 1 : 0) }>-</button>
        
        <h2>{isLoggedIn ? 'Welcome Back' :  'Welcome Guest'}</h2>
        <button onClick={logInLogOut}>{isLoggedIn ? 'Logout': 'Login'}</button>
        
        <section>
          <h2 onClick={()=>setFirstName('Manny')}>Hello {firstName}</h2>
        </section>
      </header>
    </div>
  );
}

export default App;
