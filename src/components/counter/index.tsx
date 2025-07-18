import React, { useReducer } from 'react'
import Button from '../Button'
import type { CounterProps } from './type'
import { initialState, reducer } from '../../reducers/counter'

const Counter:React.FC<CounterProps> = ({min,max}) => {


const [state,dispatch]=useReducer(reducer,initialState)


const handleIncrement = () => {
  dispatch({ type: 'increment' });
}
const handleDecrement = () => {
  dispatch({type: 'decrement'});
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