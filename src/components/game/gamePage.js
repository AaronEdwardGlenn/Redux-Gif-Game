import React from 'react';
import { Link } from 'react-router-dom';
import styles from './GamePage.css';
import { resetAll } from '../../actions/allActions';

export const GamePage = () => {

  return (
    <>
      <div className={styles.GamePage}>
        <Link to ='/game'>
        </Link>
        <button onClick={dispatchEvent(resetAll())}>START</button>
      </div>
    </>
  );

};

