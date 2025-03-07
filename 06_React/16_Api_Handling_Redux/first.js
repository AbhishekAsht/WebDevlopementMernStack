import React, { useEffect } from "react";
import ReactDOM from "react-dom/client"
import stores from "./stores";
import { Provider } from "react-redux";
import CoinCreate from "./CoinCreate";


function App(){

    return (
       <Provider store={stores}>
        <CoinCreate></CoinCreate>
       </Provider>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);




// function Fetchuser(){
//     useEffect(async ()=>{
    
//      dispatch(LoadingData(true));
//       try{
//        const response = await fetch("Github User Info");
//        const da = await response.json();
//        dispatch(UpdateData(da));
//       }
//       catch(error){
//         dispatch(ErrorData("Error Occured"));
//       }      
//     })
// }

// Object:{type: 'slice/LoadingData', payload:true};
// {type: 'slice/UpdateData', payload:da};
// {type: 'slice/ErrorData', payload:"Error Occured"};

// Ek aur koi component ho, usko bhi fetch request:
// Ek aur component bana diya: