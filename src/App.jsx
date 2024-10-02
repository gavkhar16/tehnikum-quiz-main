import React from "react"; 
import Welcome from "./pages/Welcome"; 
import Registration from "./pages/Registration"
import "./styles/main.css"; 
import StepOne from "./pages/StepOne";

const App = () => {   
  return (     
    <div className="App">      
       {/* <Welcome />  */}
       <StepOne/>
      {/* <Registration/> */}
    </div>   
  ); 
};  

export default App; 
