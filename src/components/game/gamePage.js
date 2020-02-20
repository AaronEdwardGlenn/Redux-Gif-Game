import React from 'react';
import { Link } from 'react-router-dom';
import styles from './GamePage.css';
import { resetAll } from '../../actions/allActions';
import { useDispatch } from 'react-redux';

const GamePage = () => {
  const sendIt = useDispatch(); 

  return (
    <section className={styles.GamePage}>
      <Link to ='/gifgame'>
      </Link>
      <button onClick={sendIt(resetAll())}>START</button>
    </section>
  );

};

export default GamePage; 


