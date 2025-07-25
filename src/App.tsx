import "./App.css";
import Card from "./components/Card";
// import Counter from "./components/Counter";
import LocalStorageDemo from "./components/LocalStorageDemo";
// import Button from "./components/Button";

function App() {
  // const handleLogout = () => {
  //   alert("Logout clicked");
  // };

  return (
    <>
      <div className=" flex items-center justify-center gap-6 h-screen  max-w-5xl mx-auto p-4">
        {/* <Button
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
       ></Button> */}

        {/* <Counter min={0} max={10}></Counter> */}
        <div className="flex-1">
          <LocalStorageDemo></LocalStorageDemo>
        </div>
        <div className="flex-1">
          <Card></Card>
        </div>
      </div>
    </>
  );
}

export default App;
