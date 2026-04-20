export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>My Resume</h1>

      <p>Download / View CV below</p>

      <a href="/resume.pdf" target="_blank">
        Open Resume (PDF)
      </a>
    </div>
  );
}