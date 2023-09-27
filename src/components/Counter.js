import classes from './Counter.module.css';
import{useSelector, useDispatch} from 'react-redux'

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state =>state.counter)
const incrementHandler = () =>{
  dispatch({type: 'incrementby2'})
}

const decrementHandler = () =>{
  dispatch({type: 'decrementby2'})
}

const incrementHandler1 = () =>{
  dispatch({type: 'incrementby5'})
}

const decrementHandler1 = () =>{
  dispatch({type: 'decrementby5'})
}
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementHandler1}>Incrementby5</button>
        <button onClick={decrementHandler1}>Decrementby5</button>


      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
