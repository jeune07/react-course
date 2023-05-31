import { useState } from "react"


export const GifKindom = () => {
    //try to undestand the logic behinf of the change te input value tomorrow sesion
    const [categories, setCategories] = useState([""])
    let changeValue =(event)=> {
        setCategories([...categories, event.target.value])
    }
        
  return (
    <>
        <h1>Vamos a ver si tennemos suerte</h1>

        <input 
        type="text" 
        value={categories}
        onChange={changeValue}
        />

        {categories.map((categorie,i)=> (            
        <ol  key={i}>
            <li>{categorie}</li>
        </ol>
        ))}
    
    

    </>

    )
}
