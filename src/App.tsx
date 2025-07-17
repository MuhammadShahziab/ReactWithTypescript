import "./App.css";
import Button from "./components/Button";

function App() {
  const handleLogout = () => {
    alert("Logout clicked");
  };

  return (
    <div className=" flex items-center justify-center gap-6 h-screen bg-gray-100 ">
      <Button
        label="Login"
        type="submit"
        loading={true}
        variant="primary"
      ></Button>
      <Button
        label="Signup"
        type="submit"
        loading={false}
        variant="secondary"
        style=" px-12 hover:bg-green-600"
      ></Button>
      <Button
        label="Logout"
        type="submit"
        loading={false}
        variant="danger"
        onClick={handleLogout}
      ></Button>
    </div>
  );
}

export default App;
