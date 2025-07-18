export interface CounterState {
  count: number;
}
export interface CounterProps {
  min: number;
  max: number;
}
  export interface CounterAction{
    type: 'increment' | 'decrement' | 'reset';
  }