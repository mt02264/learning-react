import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="./images/tahir.jpeg" alt="tahir"></img>;
}
function Intro() {
  return (
    <div>
      <h1>Muhammad Tahir</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (adn eat), or to
        just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skill name="HTML+CSS" emoji="" backgroundColor="blue" />
      <Skill name="Javascript" emoji="thumbs-up" backgroundColor="yellow" />
      <Skill name="Web Design" emoji="thumbs-up" backgroundColor="green" />
      <Skill name="Git and Github" emoji="thumbs-up" backgroundColor="red" />
      <Skill name="React" emoji="thumbs-up" backgroundColor="skyblue" />
      <Skill name="Svelte" emoji="thumbs-up" backgroundColor="red" />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.backgroundColor }}>
      {props.name}
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
