import "./App.css";
import { ClassCompt, ClassCompt1 } from "./Components/Class.Component";
import "./Components/Functional.Components";
import FunctionalComp from "./Components/Functional.Components";

function App() {
  return (
    <div>
      {" "}
      <h1>
        Hello world! <br /> React learning.
      </h1>
      <h2>This is about react components</h2>
      <FunctionalComp />
      <ClassCompt />
      <ClassCompt1 />
    </div>
  );
}

export default App;
