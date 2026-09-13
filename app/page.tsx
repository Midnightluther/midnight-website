export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#000",
      color: "#fff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      fontFamily: "Arial, Helvetica, sans-serif"
    }}>
      <div>
        <h1 style={{
          margin: 0,
          fontSize: "clamp(42px, 8vw, 64px)",
          fontWeight: 900,
          letterSpacing: "2px"
        }}>
          GrabitUK
        </h1>

        <p style={{
          marginTop: "12px",
          fontSize: "18px"
        }}>
          The latest tech, all in one place.
        </p>
      </div>
    </main>
  );
}
