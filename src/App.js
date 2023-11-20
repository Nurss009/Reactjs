import React from "react";
import Img from "./components/Img";
import Price from "./components/Price";
import Text from "./components/Text";
import Otziv from "./components/Otziv";


const App = () => {
    return (
       <div className='container'>
           <div className="row">
               <div className="col-6">
                   <Img/>
               </div>
               <div className="col-6">
                   <Text/>
                   <Price/>
                   <Otziv/>
               </div>
           </div>
       </div>
    )
}

export default App;