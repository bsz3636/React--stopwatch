import React from "react";
import styles from './Stopwatch.module.scss'

const Stopwatch = ({time}) => {
  
  const ms = ("0" + (time % 1000)).slice(-3);
  const sec = ("0" + Math.floor((time / 1000) % 60)).slice(-2);
  const min = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
  const h = ("0" + Math.floor((time / 3600000) % 24 )).slice(-2);
    
  return (
    <div className={styles.stopwatch}>
      <span>{h}:{min}:{sec}.{ms}</span>
    </div>
  )

}

export default Stopwatch;