const Skills = () => {

  return (
    <div className="main-container">
      <h1 className="main-name">skills</h1>
      <div className="content-container">
        <div className="skill">
          <div>Frontend</div>
          <ul>
            <li>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
              </ul>
            </li>
            <li>Styled Component</li>
            <li>TailwindCSS</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Nest.js</li>
          </ul>
        </div>
        <div className="skill">
          <div>Backend</div>
          <ul>
            <li>Python</li>
            <li>MongoDB</li>
            <li>MySQL</li>
          </ul>
        </div>
        <div className="skill">
          <div>Version Control</div>
          <ul>
            <li>git</li>
            <li>GitHub</li>
            <li>GitLab</li>
          </ul>
        </div>
        <div className="skill">
          <div>Communication</div>
          <ul>
            <li>Figma</li>
          </ul>
        </div>
        <div className="skill">
          <div>Certificate</div>
          <ul>
            <li>자격증없음</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
