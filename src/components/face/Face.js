import React from 'react';
import styles from './Face.css';
import { useSelector } from 'react-redux';
import { getGif } from '../../selectors/gifSelector';

const Face = () => {
  const gif = useSelector(getGif);

  return (
    <p className={styles.Face}>{gif}</p>
  );

};

export default Face;
