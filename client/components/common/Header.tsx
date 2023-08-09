type Props = {};

const Header = ({}: Props) => {
  return (
    <header className="fixed bg-white w-full h-12 flex justify-between items-center px-3 z-50">
      <div>AHoney</div>
      <div className="btns">
      <a href="#about" className="text-black px-3 hover:text-slate-700">
        &lt; About /&gt;
      </a>
      <a
        href="#skills"
        className="text-black px-3 hover:text-slate-700"
      >
        &lt; Skills /&gt;
      </a>
      <a
        href="#projects"
        className="text-black px-3 hover:text-slate-700"
      >
        &lt; Projects /&gt;
      </a>
      <a
        href="#contact"
        className="text-black px-3 hover:text-slate-700"
      >
        &lt; Contact /&gt;
      </a>
      </div>
    </header>
  );
};

export default Header;
