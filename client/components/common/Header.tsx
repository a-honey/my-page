type Props = {};

const Header = ({}: Props) => {
  return (
    <header className="fixed bg-white w-full h-12 flex justify-between items-center px-3 z-50">
      <h1>AHoney</h1>
      <div className="btns">
        <button className="text-black px-3">Intro</button>
        <button className="text-black px-3">Blog</button>
        <button className="text-black px-3">Send</button>
      </div>
    </header>
  );
};

export default Header;
