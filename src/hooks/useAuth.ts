import { useEffect, useState } from "react";


interface userdata {
    role: "user" | "admin";
    isVerified: boolean;
    name: string;
    email: string;
}


const useAuth = () => {
 
const [userData , setUserData] = useState<userdata | null>(null);


const getUser = ()=>{

    const user = localStorage.getItem("userData");
    if (user) {
        setUserData(JSON.parse(user));
    } else {
        setUserData(null);
    }
}

useEffect(() => {
    getUser();
}, []);


    const isAuthenticated = userData !== null;

const role = userData?.role || "user";
const isVerified = userData?.isVerified ?? false

    const isAdmin = role ==="admin"
    return {
        isAuthenticated,
        userData,
        isAdmin,
        isVerified,role,getUser
    }

}

export default useAuth