import { Github, Linkedin } from "grommet-icons";

export default function MyFooter() {
  const linkedinLink = "https://www.linkedin.com/in/john-jay-murray/";
  const githubLink = "https://github.com/JayJose";

  const copy = "\u00A9";
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>Made with 🍑 in Atlanta, GA.</p>
      <div>
        <a href={linkedinLink} className="footer--icons">
          <Linkedin color={"black"} />
        </a>
        <a href={githubLink} className="footer--icons">
          <Github color={"black"} />
        </a>
      </div>
    </footer>
  );
}
