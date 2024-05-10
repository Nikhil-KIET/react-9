import { useState } from "react";
import "./App.css";
import Cards from "./Cards";
import React from "react";

import data from "./Data";
function App() {

  const[para,setPara]=useState([]);
  


  function clickHandler(){
    let inp=document.getElementById("inp").value;
    if(inp<=0 || inp>8){
      alert("OHH I SEE YOU ARE TESTING ME ..... BUT I WONT GIVE YOU MORE THAN 8 PARA..");
    }
   
    const arr=data.slice(0,inp);
    console.log(arr);
    setPara(arr);


  }
  
  return (
   <div className=" flex justify-center p-8 flex-col bg-purple-300 h-screen w-screen">
    <div className=" flex justify-center flex-col">
    <h1 className=" text-center text-2xl font-bold ">TIRED OF BORING LOREM IPSUM?</h1>
    <div className=" flex justify-center m-5  gap-5 items-center" >
    <label htmlFor="inp">Paragraphs:</label>
    <input type="text" name="" id="inp" />
    <button className=" px-5 py-3 rounded-md  bg-pink-600" onClick={clickHandler} >Generate</button>

    </div>
   
    <Cards data={para}></Cards>


    </div>
    
   </div>
  );
}

export default App;
