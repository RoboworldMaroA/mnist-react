
import './App.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './components/Home';


function App() {
  return (
    <div className="App">
   
   {/* <h1>Hi</h1> */}
   <BrowserRouter>
    <Routes>
      <Route path = "/" exact element={<Home/>}/>

    </Routes>
 
   </BrowserRouter>

    </div>
  );
}

export default App;
