import Link from "next/link";

type Props = {};

const Nav = ({}: Props) => {
  return (
    <div>
      <a href="#about" className="text-black px-3 text-xl hover:text-slate-700">
        &lt; About /&gt;
      </a>
      <a
        href="#skills"
        className="text-black px-3 text-xl hover:text-slate-700"
      >
        &lt; Skills /&gt;
      </a>
      <a
        href="#projects"
        className="text-black px-3 text-xl hover:text-slate-700"
      >
        &lt; Projects /&gt;
      </a>
      <a
        href="#contact"
        className="text-black px-3 text-xl hover:text-slate-700"
      >
        &lt; Contact /&gt;
      </a>
    </div>
  );
};

export default Nav;
