import PropTypes from 'prop-types';

export const dogInfo={
    name: "Gusgus",
    color:"white",
    race:"Caniche",
    bark:"wow woo",
}



export const FirstApp = ({title}) => {

   
    
  return (
    <>
        <h1>Hey my nane is {dogInfo.name} {title}</h1> 
        <p>I am {dogInfo.color}</p>
        <p> I am a {dogInfo.race}</p> 
        <p>And I speak {dogInfo.bark}</p>
    </>
    
  )
}
// say title must be a tring and it is requiered
FirstApp.propTypes ={
    title: PropTypes.string.isRequired,
}

// Definr defauld prop
FirstApp.defaultProps={
    title:"Sin titulo"
}