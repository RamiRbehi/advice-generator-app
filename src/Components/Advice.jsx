import React, { useEffect, useState } from 'react'
import "../CSS/Advice.css"
import divider from "../Images/pattern-divider-desktop.svg"
import dividerMobile from "../Images/pattern-divider-mobile.svg"
import dice from "../Images/icon-dice.svg" 

const Advice = () => {

    const [advice, setAdvice] = useState(null);
    const [id, setId] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();
        const {advice} = data.slip;
        const {id} = data.slip;
        setAdvice(advice);
        setId(id);
        setLoading(false);
      };
      fetchData();
    }, []);

    const handleClick = async () => {
        setAdvice(null);
        setId(null);
        setLoading(true);
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();
        setTimeout(() => {
          const {advice} = data.slip;
          const {id} = data.slip;
          setAdvice(advice);
          setId(id);
          setLoading(false);
        }, 500);
    };

  return (
    <div className="container">
        {advice && <h5 className="adviceNumber">Advice # {id}</h5>}
        {loading && <p className="loading">Laoding...</p>}
        {advice && <p className="adviceText">"{advice}"</p>}
        <img src={divider} alt="" className="dividerDesktop" />
        <img src={dividerMobile} alt="" className="dividerMobile" />
        <div className="btnDice" onClick={handleClick}>
        <img src={dice} alt="" className="dice" />
        </div>
    </div>
  )
}

export default Advice