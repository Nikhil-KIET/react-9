import React from "react";

function Cards({ data }) {
    console.log(data);
  return (
    <div>
      {data && data.map((paragraph, index) => (
       <p className=" m-5" key={index}>{index+1}{"."}&nbsp;{paragraph}</p>
           
      
       
      ))}
    </div>
  );
}

export default Cards;
