import PropTypes from 'prop-types';
import { useState } from 'react';

export const CounterAPP = ({value}) => {


    const [val, setval]=useState(value);

    let reset= ()=>{
        return setval(value)
    }

    let sum =() => {
        // if(val>10){
            
        // }
        setval(val +1)
    }

    let substract = ()=>{
        setval(val -1)
    }

  return (
    <>
    <div> The value is {val}</div>
    <button onClick={() => {
        sum();
      }}> +1</button>

<button onClick={() => {
    substract()
}}>-1</button>

<button onClick={()=>{
    reset()
}}>Reset</button>
    </>
    
  )
}
CounterAPP.propTypes={
    value:PropTypes.number.isRequired
}
