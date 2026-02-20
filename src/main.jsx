import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import PasswordChecker from "./Passwordchecker";
import Home from "./Home";
import About from "./About";

ReactDOM.createRoot(document.getElementById("root")).render(
//  <StrictMode>
//   <BrowserRouter>
//    <Routes>
//     <Route path = "/" element = {<Home/>}/>
//     <Route path = "/about" element = {<About/>}/>
    
//    </Routes>
   
  
//   </BrowserRouter>
//   </StrictMode>

<BrowserRouter>
<App/>
</BrowserRouter>
);

