//object destructuring 

const countries={
    name:"India",
    capital:"Delhi",
    population:100,
    states:29
    }


    const useconstext=({name, capital,population, state})=>({
        name,
        capital,
        amount:population + "probando",
        quantity:state,
        
    })


    const indiaInfo=useconstext(countries);

    //console.log(indiaInfo);   

    const {name,amount}=indiaInfo;

    console.log(name,amount);