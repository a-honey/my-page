type Props = {};

const Nav = ({}: Props) => {
  return (
    <div>
        <button className="text-black px-3">&lt; about /&gt;</button>
        <button className="text-black px-3">&lt; contact /&gt;</button>
        <button className="text-black px-3">&lt; education /&gt;</button>
        <button className="text-black px-3">&lt; projects /&gt;</button>
        <button className="text-black px-3">&lt; skills /&gt;</button>
    </div>
  );
};

export default Nav;
