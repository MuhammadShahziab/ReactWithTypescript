import React, { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import Button from "../Button";

const Card = () => {
  const { isAdmin, isAuthenticated, isVerified, userData, role,getUser } = useAuth();
  const [isLoading, setIsloading] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 1000);
  }, []);

  const getColor = (condition: boolean) => {
return condition ? "text-green-400" : "text-red-400";
  }
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <>
      {isAuthenticated ? 
        <div className="border p-4 rounded-md shadow-md bg-white w-96">
          <p className={`${getColor(isAdmin)}`}>
            role: {role}
          </p>
          <p className={`${getColor(isVerified)} }`}>
            isVerified: {isVerified?"Yes" : "No"}
          </p>
          <p>Name: {userData?.name}</p>
          <p>Email: {userData?.email}</p>
          <div className="flex justify-end  mt-4">
 <Button
                label="Refresh"
                type="button"
                variant="secondary"
                onClick={getUser}
            >
            </Button>
          </div>
           
        </div>
      : (
        <p className="text-red-400">Not Authenticated</p>
      )}
    </>
  );
};

export default Card;
