function Header(props) {
  return (
    <header>
      <h1 className="text-4xl font-bold">{props.course.name}</h1>
    </header>
  );
}

export default Header;
