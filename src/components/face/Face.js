import React from 'react';
import styles from './Face.css';
import { useSelector } from 'react-redux';
import { getGif } from '../../selectors/gifSelector';

const Face = () => {
  const { status, img } = useSelector(getGif);

  return (
    <div className={styles.Face}>
      <div>{status}</div>
      <img src={img}/>
    </div>

  );

};

export default Face;
