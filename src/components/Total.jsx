function Total(props) {
  const total =
    props.part1.exercises + props.part2.exercises + props.part3.exercises;

  return (
    <div className="flex">
      <span className="min-w-[200px]">Total number of exercises:</span>
      <span>{total}</span>
    </div>
  );
}

export default Total;
