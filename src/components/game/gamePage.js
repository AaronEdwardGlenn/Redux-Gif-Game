import React from 'react';
import { Link } from 'react-router-dom';
import styles from './GamePage.css';
import { resetAll } from '../../actions/allActions';
import { useDispatch } from 'react-redux';

const GamePage = () => {
  const sendIt = useDispatch(); 

  return (
    <section className={styles.GamePage}>
      <h1>Welcome to the Gif Game! See how many Gifs you can find before the timer runs out!!</h1>
      <Link to ='/gifgame'>
        <button onClick={sendIt(resetAll())}>START</button>
      </Link>
    </section>
  );

};

export default GamePage; 


