function Part(props) {
  return (
    <div className="flex">
      <span className="min-w-[200px]">{props.part}</span>
      <span>{props.exercises}</span>
    </div>
  );
}

export default Part;
