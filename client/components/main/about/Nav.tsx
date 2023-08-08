import Link from "next/link";

type Props = {};

const Nav = ({}: Props) => {
  return (
    <div>
        <a href="#about" className="text-black px-3">&lt; about /&gt;</a>
        <a href="#skills" className="text-black px-3">&lt; skills /&gt;</a>
        <a href="#projects" className="text-black px-3">&lt; projects /&gt;</a>
    </div>
  );
};

export default Nav;
