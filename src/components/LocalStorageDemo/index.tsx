import Button from "../Button";
import { useLocalStorage } from "../../hooks/UseLocalStorage/useLocalStorage";
import Input from "../Input";

interface userData {
  name: string;
  email: string;
  password: string;
}

const LocalStorageDemo = () => {
  const [storedValue, setValue] = useLocalStorage<userData>("userData", {
    name: "",
    email: "",
    password: "",
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
       <Input type="password" name="password" placeholder="Enter your password" onChange={handleOnChnage} value={storedValue.password || ""}></Input>
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
