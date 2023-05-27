function getUserName(name){
    return{
        userId:"1",
        userName:name,  
    }

}

console.log(getUserName("jeune"));


// using arroow function


const getUser2=(userName)=>({userId:"1",  userName:userName,    })

console.log(getUser2("winsley"));
