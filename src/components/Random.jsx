import React from 'react'
import styled from 'styled-components';
const Section=styled.div`
width:100%;
display:grid;
grid-template-columns:10rem 4fr 10rem;
grid-row:2/3;
gap:20px;
.ran{
    grid-column:2/3;
    display:flex;
    justify-content:center;
align-items:center;
flex-direction:column;
gap:10px;
}
.dice-image {
    
    width:200px;
    height:200px;
}
.dice-image img{
    width:100%;
    height:100%;
}
.para p{
   font-size:24px;
}
.btn{
    display:flex;
    flex-direction:column;
    gap:15px;

}
.btn button{
    padding:5px 60px 5px 60px;
    font-size:16px;
    font-weight:500;
    border-radius:5px;
}
.reset-btn{
    background-color:white;
    color:black;
    border:2px solid black;
   
}
.rules-btn{
    background-color:black;
    color:white;
    
}
.rules{
    max-width:778px;
    display:none;
    background-color:#FBF1F1;
    padding:10px;
}
@media (max-width:1100px){
    
    .dice-image{
        width:150px;
        height:150px;
    }
    .dice-image img{
        width:100%;
    }
    .rules{
        width:100%;
   font-size:12px;
}
}
@media (max-width:550px){
 
    .ran{
   
   
    display:flex;
    justify-content:center;
    
flex-direction:column;
width:100vw;
padding-top:0;
}
    &{
       
    display:flex;
    width:100%;
    
   
    }
    .dice-image{
        
        width:200px;
        height:200px;
    }
    .dice-image img{
        width:100%;
        height:100%;
        background-size:100% 100%;
    }
    .rules{
        width:100%;
   font-size:10px;
}
}
@media (max-width:400px){
 
 
 .dice-image{
     
     width:100px;
     height:100px;
 }
 .dice-image img{
     width:100%;
     height:100%;
     background-size:100% 100%;
 }
 
}
`;
const displayRules=()=>{
    var x=document.querySelector(".rules");
    if(x.style.display==="none"||x.style.display===" "){
        x.style.display="block";
    }
    else{
        x.style.display="none";
    }
}
 
 const Random = ({ current, randomFn,resetBtn }) => {
   
    return (
      <Section className="section">
        <div className="ran">
          <div className="dice-image" onClick={randomFn}>
            <img src={current} alt="dice" />
          </div>
          <div className="para">
            <p>Click on Dice to Roll</p>
          </div>
          <div className="btn">
            <button className="reset-btn" onClick={resetBtn}>Reset Score</button>
            <button className="rules-btn" onClick={displayRules}>Show Rules</button>
          </div>
          <div className="rules" >
            <h1>How to play dice game</h1>
            <p>Select any Number</p>
            <p>Click on dice image</p>
            <p>after click on dice if selected number is equal to dice number you will get some point as dice if you get guess then 2 pont will be deducted</p>
          </div>
        </div>
      </Section>
    );
  };

export default Random