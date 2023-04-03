import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom"
import SignIn from "./components/SignIn.tsx"
import SignUp from "./components/SignUp.tsx"
import landingPage from "./components/landingPage.tsx"

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route  path="/SignIn" elements/>
          <Route  path="/SignUp" element/>
          <Route  path="/landingPage" element/>


        </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
