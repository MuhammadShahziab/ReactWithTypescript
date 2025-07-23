import React, { useReducer } from 'react'
import Button from '../Button'
import { initialState, reducer } from '../../reducers/counter'
import type { CounterProps } from './type'

const Counter:React.FC<CounterProps> = ({min,max}) => {


const [state,dispatch]=useReducer(reducer,initialState)


const handleIncrement = () => {
  dispatch({ type: 'increment' });
  if(state.count >= max){
alert(`You have reached the maximum count of ${max}.`);
  }
}
const handleDecrement = () => {
  dispatch({type: 'decrement'});
  if(state.count <= min){
    alert(`You have reached the minimum count of ${min}.`);
  }
}
const handleReset = () => {
  dispatch({ type: 'reset' });
}


  return (
    <div className='flex items-center gap-x-9'>
      <Button label='-' type='button' variant='secondary' onClick={handleDecrement} disabled={state.count <= min}></Button>
      <span className='text-2xl font-bold'>{state.count}</span>
      <Button label='+' type='button' variant='primary' onClick={handleIncrement} disabled={state.count >= max}></Button>
      <Button label='Reset' type='button' variant='danger' onClick={handleReset} disabled={state.count <= min}></Button>
    </div>
  )
}

export default Counter