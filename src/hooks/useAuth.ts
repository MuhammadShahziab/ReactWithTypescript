

interface userdata {
    role: string;
    isVerified: boolean;
    name: string;
    email: string;
}


const useAuth = () => {
 
    const user = localStorage.getItem("userData");
        const userData :userdata = user ? JSON.parse(user) : null;

    const isAuthenticated = user !== null;
    const {role,isVerified} = userData && userData;

    const isAdmin = role ==="admin"
    return {
        isAuthenticated,
        userData,
        isAdmin,
        isVerified,role
    }

}

export default useAuth