import { BsGithub, BsPencilSquare, BsInstagram } from "react-icons/bs";

type Props = {};

const Footer = ({}: Props) => {
  return (
    <footer className="bg-black w-full text-white flex flex-col items-center p-5">
      <div className="copyright">©2023 AHoney. All Rights Reserved.</div>
      <div>
        Do you like my portfolio? <span>Send Email</span>
      </div>
      <div className="icons flex text-4xl mx-2 my-5 gap-5">
        <BsGithub />
        <BsPencilSquare />
        <BsInstagram />
      </div>
    </footer>
  );
};

export default Footer;
