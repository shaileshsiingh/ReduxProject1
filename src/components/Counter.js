import classes from './Counter.module.css';
import{useSelector, useDispatch} from 'react-redux'

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state =>state.counter)
  const show = useSelector(state=>state.showCounter)
const incrementHandler = () =>{
  dispatch({type: 'incrementby2'})
}

const decrementHandler = () =>{
  dispatch({type: 'decrementby2'})
}

const increaseHandler = () =>{
  dispatch({type: 'increase', amount:5})
}

const decreaseHandler = () =>{
  dispatch({type: 'decrease', amount:5})
}
  const toggleCounterHandler = () => {
    dispatch({type:'toggle'})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     {show &&<div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Incrementby5</button>
        <button onClick={decreaseHandler}>Decrementby5</button>


      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
