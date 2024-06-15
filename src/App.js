import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Start from './components/Start'
import Game from './components/Game';
import "./App.css";
import Random from './components/Random';
import img1 from './components/images/dice_1.png';
import img2 from './components/images/dice_2.png';
import img3 from './components/images/dice_3.png';
import img4 from './components/images/dice_4.png';
import img5 from './components/images/dice_5.png';
import img6 from './components/images/dice_6.png';



const App = () => {
  const [select, setSelect] = useState();
  const images = [img1, img2, img3, img4, img5, img6];
  const [current, setCurrent] = useState(img1);
  const [counted, setCounted] = useState("0");
  const[notice,setNotice]=useState(" ");
  const[alert,setAlert]=useState(" ");

  const randomFn = () => {
    const randomIndex = Math.floor(Math.random() * (images.length));
    setCurrent(images[randomIndex]);
    console.log("randomno",randomIndex+1);
   
      if(!select){
        setCounted("0");
        setNotice(" You have not selected any number");
        setSelect(null);
       
      }
     
      else if (select === randomIndex + 1) {
      setCounted((prevCount) => prevCount + randomIndex+1);
        setNotice(" ");
        setAlert(`You win! Your score: ${counted + randomIndex + 1}`);
        
       
      }
      else {
        setCounted((prevCount) => prevCount - 2);
        setNotice(" "); 
      }
    
  }
  const resetBtn = () => {
    setCounted("0");
    setSelect(" ");
    setCurrent(img1);
    setNotice(" ");
    setAlert(" ");
  }
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/start" element={<Game counted={counted} select={select} setSelect={setSelect} current={current} randomFn={randomFn} resetBtn={resetBtn} notice={notice}  alert={alert}/>} />
          <Route path="/" element={<Random current={current} randomFn={randomFn} resetBtn={resetBtn} />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
