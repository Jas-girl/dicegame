import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const DiceImage = styled.div`
display:flex;
justify-content:center;
width:50%;
`

const Section = styled.div`
width:100%;
display:grid;
justify-content:center;
align-items:center;
grid-template-columns:5rem 4fr 5rem;

height:100vh;

.main{
    grid-column:2/3;
    display:flex;
    justify-content:center;
    align-items:center;
}
.heading{
    width:50%;
    display:flex;
    flex-direction:column;
    
}
.heading h1{
    font-size:96px;
    font-weight:bold;
    display:flex;
    justify-content:flex-end;
    
}
.btn{
    display:flex;
    justify-content:flex-end;
}
.button {
    max-width: 220px;
    background-color: black;
    padding: 10px 40px;
    border-radius: 5px;
    cursor: pointer;
    border: none;
    display: inline-block;
    text-align: center;
    text-decoration: none;
}

.button .link {
    color: white;
    text-decoration: none;
}

.button .link:hover {
    color: black;
}

.button:hover {
    background-color: white;
    border: 2px solid black;
    transition:0.3s ease-in-out;
}
@media (max-width:1100px) {
    .heading h1{
    font-size:46px;  
}
}
@media (max-width:600px){
   
   .main{
   
    display:flex;
    flex-direction:column;
    width:100%;
    position:absolute;
   
   }
   .heading h1{
    font-size:26px;  
}
}

`;

const Start = () => {
    return (
        <div><Section className="container">
            <div className="main">
                <DiceImage>
                    <img src="/images/dice.svg" alt="dice-img"></img>
                </DiceImage>
                <div className="heading">
                    <h1>DICE GAME</h1>
                    <div className="btn">
                        <button className="button">
                            <Link to="/start" className="link">Play Now</Link>
                        </button>
                    </div>

                </div>
            </div>

        </Section></div>
    )
}

export default Start