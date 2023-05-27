import {heroes} from './base/data/heroes'

//console.log(heroes)

let getheroesById = (id) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const  getHeroeById = (id)=>{
                return heroes.find((heroe)=>heroe.id === id)
            }

            let heroe = getHeroeById(id)
            if(heroe !== undefined){
                resolve(heroe.name)
            }else{
                reject('No se pudo encontrar el heroe')
            }
            
        }
        
        
    , 200)
    
    })



}
getheroesById(3).then((id)=>{
    alert(id)
}).catch((err)=>{
    alert(err)
})