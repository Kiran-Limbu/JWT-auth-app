//storing the user login data into localstorage  

export default function SetCredientials(user){
    const setUserData = localStorage.setItem("userInfo", JSON.stringify(user));
    
    return setUserData;
}


