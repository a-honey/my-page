type Props = {};

const Footer = ({}: Props) => {
  return (
    <footer className="bg-black">
      <div className="copyright">©2023 AHoney. All Rights Reserved.</div>
      <div>
        Do you like my portfolio? <span>Send Email</span>
      </div>
      <div className="icons">
        <div>깃허브</div>
        <div>블로그</div>
        <div>인스타</div>
      </div>
    </footer>
  );
};

export default Footer;
