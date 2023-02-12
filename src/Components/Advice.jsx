import React, { useState } from 'react'
import "../CSS/Advice.css"
import divider from "../Images/pattern-divider-desktop.svg"
import dice from "../Images/icon-dice.svg" 

const Advice = () => {

    const [advice, setAdvice] = useState(null);
    const [id, setId] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleClick = async () => {
        setId(null);
        setAdvice(null);
        setLoading(true);
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();
        const {slip_id} = data.slip;
        const {advice} = data.slip;
        setTimeout(() => {
            setId(slip_id);
            console.log(id);
            setAdvice(advice);
            console.log(advice);
            setLoading(false);
        }, 500);
    };

  return (
    <div className="container">
        {advice && <h5 className="adviceNumber">Advice # {id}</h5>}
        {loading && <p className="loading">Laoding...</p>}
        {advice && <p className="adviceText">"{advice}"</p>}
        <img src={divider} alt="" className="dividerDesktop" />
        <div className="btnDice" onClick={handleClick}>
        <img src={dice} alt="" className="dice" />
        </div>
    </div>
  )
}

export default Advice