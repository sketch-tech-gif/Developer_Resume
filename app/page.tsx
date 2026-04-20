export default function Home() {
  return (
    <div style={{ height: "100vh", margin: 0 }}>
      <iframe
        src="/resume.pdf"
        style={{
          width: "100%",
          height: "100vh",
          border: "none"
        }}
      />
    </div>
  );
}