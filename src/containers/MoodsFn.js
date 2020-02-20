import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Face from '../components/face/Face';
import { drinkCoffee, eatSnack, takeNap, study, craziez } from '../actions/allActions';
import { useDispatch, useSelector } from 'react-redux';
import { getSnacks, getNaps, getCoffees, getStudies, getCraziez } from '../selectors/gifSelector';


const MoodsFn = () => {
  const [stopwatch, setStopwatch] = useState(10);

  
  const dispatch = useDispatch();
  const coffees = useSelector(getCoffees);
  const snacks = useSelector(getSnacks);
  const naps = useSelector(getNaps);
  const studies = useSelector(getStudies);
  const crazy = useSelector(getCraziez);

  useEffect(() => {
    setInterval(() => {
      setStopwatch(stopwatch => stopwatch - 1);
    }, 1000);
  }, []);

  return (
    <>
      {stopwatch > 0 && 
      <div>
        <div>
          <button onClick={() => dispatch(drinkCoffee())}>coffee - {coffees}</button>
          <button onClick={() => dispatch(eatSnack())}>snacks - {snacks}</button>
          <button onClick={() => dispatch(takeNap())}>naps - {naps}</button>
          <button onClick={() => dispatch(study())}>studies - {studies}</button>
          <button onClick={() => dispatch(crazy())}>crazy - {craziez}</button>
        </div>
        <Face />
        <h1>COUNTDOWN: {stopwatch}</h1>
      </div>
      }
      {stopwatch <= 0 && 
      <div>
        
        <Face />
        <Link to='/'>
          <button>PLAY AGAIN!!!!!</button>
        </Link>
      </div>
      }
    </>
  );
};

export default MoodsFn;
