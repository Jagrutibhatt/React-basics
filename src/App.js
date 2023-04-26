import "./App.css";
import { ClassCompt, ClassCompt1 } from "./Components/Class.Component";
import ClassProps from "./Components/ClassProps";
import Click from "./Components/Click";
import Counter from "./Components/Counter";
import FunctionProps from "./Components/FunctionProps";
import "./Components/Functional.Components";
import FunctionalComp from "./Components/Functional.Components";
import NewComp from "./Components/NewComp";
import ParentComp from "./Components/ParentComp";

const styles = { fontStyle: "italic", color: "teal" };
function App() {
  return (
    <div className="App">
      {" "}
      <h1>
        Hello world! <br /> React learning.
      </h1>
      <h2>This is about react components</h2>
      <FunctionalComp />
      <ClassCompt />
      <ClassCompt1 />
      <Click />
      <Counter />
      <ParentComp />
      <ClassProps name="You are student no. 1" place="Place A">
        {" "}
        <p>Child component</p>{" "}
      </ClassProps>
      <ClassProps name="You are student no. 2" place="Place B">
        {" "}
        <button>Click</button>{" "}
      </ClassProps>
      <ClassProps name="You are student no. 3" place="Place C" />
      <ClassProps name="You are student no. 4" place="Place D" />
      <FunctionProps greetings="how are you?" />
      <hr />
      <h1 style={styles}>Welcome</h1>
      <NewComp />
    </div>
  );
}

export default App;
