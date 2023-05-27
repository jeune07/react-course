const superheroe=['Batman','Superman','Mujer Maravilla','Aquaman'];


const usestate = (value)=>{
    return [value, ()=>{console.log('Hola mundo')}]
}

const theUseState = usestate('Jeune');
console.log(theUseState);

const [valor,setNombre] = theUseState


console.log(`The name is ${valor} and the hello is${setNombre()}`)

;