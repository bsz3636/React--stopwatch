import React, {useState} from 'react';
import Container from './Components/Container/Container';
import Stopwatch from './Components/Stopwatch/Stopwatch';
import Button from './Components/Button/Button';

const App = () => {
  
  const [currentTime, setCurrentTime] = useState(0)
  const [timer, setTimer] = useState(null)

  const start = () => {
    setTimer(setInterval(() => {
      setCurrentTime(currentTime => currentTime + 10);
    }, 10));
    clearInterval(timer);
  }

  const stop =() => {
    clearInterval(timer)
  }

  const reset = () => {
    setCurrentTime(0)
  }
  
  return (
    <Container>
     <Stopwatch time={currentTime}/>
     <Button onClick={start}>start</Button>
     <Button onClick={stop}>stop</Button>
     <Button onClick={reset}>reset</Button>
    </Container>
  )
}

export default App;