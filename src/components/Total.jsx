function Total(props) {
  const total = props.parts.reduce((total, part) => total + part.exercises, 0);

  return (
    <div className="flex">
      <span className="min-w-[200px]">Total number of exercises:</span>
      <span>{total}</span>
    </div>
  );
}

export default Total;
