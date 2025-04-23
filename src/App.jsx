import "./App.css";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { IoIosHome } from "react-icons/io";

function App() {
  toast.success("hello");
  return (
    <>
      <Button>
        Click me <IoIosHome />
      </Button>
      <h1>COMING SOON..</h1>;
      <ToastContainer />
    </>
  );
}

export default App;
