function Total(props) {
  const total = props.exercises1 + props.exercises2 + props.exercises3;
  return (
    <div>
      <p>Total number of exercises: {total}</p>
    </div>
  );
}

export default Total;
