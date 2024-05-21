import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignOut from "./pages/SignOut";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/profile" element={<Profile/> } />
        <Route path="/about" element={ <About/>} />
        <Route path="/sign-in" element={<SignIn/> } />
        <Route path="/sign-out" element={<SignOut/> } />
      </Routes>
    </div>
  );
}

export default App;
