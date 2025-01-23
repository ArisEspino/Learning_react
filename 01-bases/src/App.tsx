import { Counter } from "./bases/components/Counter";
import { CounterBy } from "./bases/components/CounterBy";
import { CounterEffect } from "./bases/components/CounterEffect";
import { CounterHook } from "./bases/components/CounterHook";
import { CounterReducer } from "./bases/counter-reducer/CounterReducer";


function App() {
  return (
    <>
      <h1>React</h1>
      <hr />
      <Counter initialValue={15}/>
      <CounterBy initialValue={10}/>
      <CounterEffect />
      <CounterHook />
     {/*<CounterReducer/>*/}

     <CounterReducer /> 
    </>
  );
}

export default App;
