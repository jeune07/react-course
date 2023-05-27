// template string

const myName = `Rafael`
const myCountry = `Brazil`

console.log(`My name is 
${myName}
 and I live in 
 ${myCountry}`)

 function getHello(name,country){
    return `Hello ${name} from ${country}`
 }

 getHello(myName,myCountry)
 console.log(getHello(myName,myCountry));