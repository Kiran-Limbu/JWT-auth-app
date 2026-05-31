import axios from "axios";
import { createContext, useState } from "react";


export const AuthGlobalContex = createContext();

export const AuthContexProvider =({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);


  const loginUser = async (userData) =>{
     try {
      const res = await axios.post(
        "http://localhost:4000/api/users/login",
        userData,
      );
      setUser(res);
      console.log(user)
  }catch (error){
    console.error(error.message);
  }
  setLoading(false);
}
  return (
    <AuthGlobalContex.Provider
      value={{
        loading,
        user,
        loginUser, 
      }}
    >
      {children}
    </AuthGlobalContex.Provider>
  );
}



