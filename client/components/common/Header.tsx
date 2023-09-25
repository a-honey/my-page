const Header = ({ right }: { right: null }) => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        fontSize: "25px",
        position: "relative",
      }}
    >
      <h2>Ahyeon, Jung</h2>
      <h2>{right}</h2>
      <span
        style={{
          content: " ",
          position: "absolute",
          backgroundColor: "#a72e11",
          width: "100%",
          height: "4px",
          bottom: "-20px",
          right: "0",
          left: "0",
        }}
      ></span>
    </header>
  );
};

export default Header;
