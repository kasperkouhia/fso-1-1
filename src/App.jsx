import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";

function App() {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div className="m-4 flex flex-col gap-2">
      <Header course={course} />
      <main className="flex flex-col gap-2">
        <Content course={course} />
        <Total course={course} />
      </main>
    </div>
  );
}

export default App;
