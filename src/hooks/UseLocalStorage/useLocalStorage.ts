import { useState } from "react";
export const useLocalStorage = <T> (key:string,initialValue:T):[T, (value:T |((prev:T)=>T))=> void] =>{

  const [storedValue,setStoredValue]=useState<T>(()=>{
    try {
      const item = window.localStorage.getItem(key);
      return item ?JSON.parse(item):initialValue;

    } catch (error) {
      console.log(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  })


const setValue =(value:T|((prev:T)=>T))=>{
const newValue = typeof value === "function" ? (value as (prev:T)=>T)(storedValue) : value;
setStoredValue(newValue);
localStorage.setItem(key, JSON.stringify(newValue));
} 

return [storedValue, setValue];

} 