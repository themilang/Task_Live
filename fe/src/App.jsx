import "./App.css";
import Testimonials from "./components/Testimonials";
import Journey from "./components/Journey";
import AllCards from "./components/AllCards";
import Rotate from "./components/Rotate";
import InActiveRotate from "./components/InActiveRotate";

function App() {
  return (
    <>
      <h1 className=" font-[Cursive] ml-32 mt-2 text-3xl ">Task Number 1</h1>
      <div className="h-[100vh]">
        <Testimonials />
      </div>

      <div className="ml-28 h-[100vh]">
        <h1 className="mb-12 font-[Cursive] ml-28 mt-28 text-3xl ">
          Task Number 2
        </h1>

        <Rotate />
      </div>
      
      <div>
        <h1 className=" font-[Cursive] ml-28 mb-12 mt-2 text-3xl ">
          Task Number 3
        </h1>
        <AllCards />
      </div>
      <div>
        <h1 className="mb-12 font-[Cursive] ml-28 mt-28 text-3xl ">
          Task Number 4
        </h1>

        <Journey />
      </div>
    </>
  );
}

export default App;
