import Button from "../Button";
import { useLocalStorage } from "../../hooks/UseLocalStorage/useLocalStorage";
import Input from "../Input";

interface userData {
  name: string;
  email: string;
  isVerified: boolean;
  role:"user" | "admin"
}

const LocalStorageDemo = () => {
  const [storedValue, setValue] = useLocalStorage<userData>("userData", {
    name: "",
    email: "",
    isVerified: false, 
    role: "user"
  
  });

  const handleOnChnage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValue((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <form className="flex flex-col items-center justify-center gap-y-6 w-[450px] p-6  border  rounded-lg shadow-md">
     <Input type="text" name="name" placeholder="Enter your name" onChange={handleOnChnage} value={storedValue.name || ""}></Input>
      <Input type="email" name="email" placeholder="Enter your email" onChange={handleOnChnage} value={storedValue.email || ""}></Input>
       <Input type="text" name="role" placeholder="Enter your role" onChange={handleOnChnage} value={storedValue.role || ""}></Input>
       <div className=" w-full">
 <label className="flex items-center gap-x-2"> isVerified </label>
<Input type="checkbox" name="isVerified" className="w-11 h-11" checked={storedValue.isVerified} placeholder="Role" onChange={()=>setValue(prev => ({...prev, isVerified: !prev.isVerified}))}></Input>

       </div>
     

      <Button
        label="Submit"
        type="submit"
        variant="primary"
        style="w-full"
      ></Button>
    </form>
  );
};

export default LocalStorageDemo;
