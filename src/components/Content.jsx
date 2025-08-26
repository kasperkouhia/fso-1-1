import Part from "./Part";

function Content(props) {
  return (
    <div>
      {props.course.parts.map((item, index) => (
        <Part key={index} part={item.name} exercises={item.exercises} />
      ))}
    </div>
  );
}

export default Content;
