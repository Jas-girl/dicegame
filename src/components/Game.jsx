import React from 'react';
import styled from 'styled-components';
import Random from './Random';

const Section = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 5rem 4fr 5rem;
  grid-row:1/2;

  .header {
    grid-column: 2 / 3;
    display: flex;
    justify-content: space-between;
  }

  .count {
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
  }

  .dice-btn {
    display: flex;
    flex-direction: column;
  
  }

  .count h1 {
    font-weight: 500;
    font-size: 50px;
  }

  .count p,
  .no p {
    font-size: 24px;
    font-weight: 500;
  }

  .btns {
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: flex-end;
  }

  .btns button {
    padding: 20px 30px;
    background-color: white;
    color: black;
    border: 2px solid black;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
  }

  .no p {
    display: flex;
    justify-content: flex-end;
    font-weight: bold;
  }

  .btns button:hover {
    background-color: black;
    color: white;
    transition: 0.2s ease-in-out;
  }
  .notice{
    grid-column:2/3;
    padding:20px;
      width:100%;
      display:flex;
      justify-content:flex-end;
      flex-direction:row;
      font-size:24px;
      color:red;
    }
@media (max-width:1100px){
  .btns button {
    padding: 15px 25px;
    font-size:16px;
  }
}
@media (max-width:600px){
  &{
    display:grid;
    width:100vw;
    justify-content:center;
   
  
  }
  .header {
  
  grid-row: 2/3;
  width:100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
 
  
}
  .btns button {
    padding: 15px 20px;
    font-size:16px;
  }
}
`;

const Game = ({ counted,select, setSelect,current,randomFn,resetBtn,notice,alert }) => {
  const newArr = [1, 2, 3, 4, 5, 6];
  console.log( "select",select );
 

  return (
    <div>
      <Section className="section">
    
        <div className="header">
       
          <div className="count">
            <h1>{!select?0:counted}</h1>
            <p>Total Score</p>
          </div>
          <div className="dice-btn">
          <div className="notice"><p>{notice}</p></div>
            <div className="btns">
              {newArr.map((value, i) => (
                <button key={i} onClick={() => setSelect(value)}>
                  {value}
                </button>
              ))}
            </div>
            <div className="no">
              <p>Select Number:{select}</p>
              <p>{alert}</p>
            </div>
          </div>
        </div>
      </Section>
      <Random current={current} randomFn={randomFn} resetBtn={resetBtn} />
    </div>
  );
};

export default Game;
