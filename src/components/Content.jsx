function Content(props) {
  return (
    <ul>
      <li className="flex">
        <span className="min-w-[300px]">{props.part1}</span>
        <span>{props.exercises1}</span>
      </li>
      <li className="flex">
        <span className="min-w-[300px]">{props.part2}</span>
        <span>{props.exercises2}</span>
      </li>
      <li className="flex">
        <span className="min-w-[300px]">{props.part3}</span>
        <span>{props.exercises3}</span>
      </li>
    </ul>
  );
}

export default Content;
