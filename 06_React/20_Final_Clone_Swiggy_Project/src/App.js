import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Home from "./Components/Home";
import Restaurant from "./Components/Restaurant";
import { BrowserRouter, Routes, Route } from "react-router";
import RestaurantMenu from "./Components/RestaurantMenu";
import SearchFood from "./Components/SearchFood";
import SecondaryHome from "./Components/SecondaryHome";
import { store } from "./Stored/stores";
import {Provider} from "react-redux"
import Checkout from "./Components/Checkout";




// Header section: Let's build it

function App(){
    
    return(
       <>
       <Provider store={store}>
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route element={<SecondaryHome></SecondaryHome>}>
        <Route path="/restaurant" element={<Restaurant></Restaurant>}></Route>
        <Route path="/city/delhi/:id" element={<RestaurantMenu></RestaurantMenu>}></Route>
        <Route path="/city/delhi/:id/search" element={<SearchFood></SearchFood>}></Route>
        </Route>
        <Route path="/Checkout" element={<Checkout></Checkout>}></Route>
       </Routes>
       </BrowserRouter>
       </Provider>
       </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);



// Proxy server "https://cors-anywhere.herokuapp.com/"; 


