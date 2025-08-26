function Header(props) {
  return (
    <header>
      <h1 className="text-2xl">{props.course.name}</h1>
    </header>
  );
}

export default Header;
