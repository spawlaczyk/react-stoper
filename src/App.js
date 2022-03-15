import { useEffect, useState } from "react";
import RenderTime from "./components/RenderTime/RenderTime";
import Button from "./components/Button/Button.js";
import Container from "./components/Container/Container.js";

const App = () => {
  const [ time, setTime ] = useState(0);
  const [ timer, setTimer ] = useState(false);

  useEffect(() => {
    let interval = null;

    if(timer) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval)
  }, [timer]);

  return (
    <Container>
      <RenderTime time={time} />
      <Button action={() => setTimer(true)}>
        start
      </Button>
      <Button action={() => setTimer(false)}>
        stop
      </Button>
      <Button action={() => {setTime(0); setTimer(false);}}>
        reset
      </Button>
    </Container>
  );
}

export default App;
