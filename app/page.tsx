export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "#fff",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "30px 20px",
          boxSizing: "border-box",
        }}
      >
        <div style={{ fontSize: "42px", marginBottom: "15px" }}>
          🎮 📱 🎮
        </div>

        <h1
          style={{
            margin: 0,
            fontSize: "clamp(52px, 10vw, 100px)",
            fontWeight: 900,
            letterSpacing: "4px",
          }}
        >
          GRABITUK
        </h1>

        <p
          style={{
            fontSize: "clamp(18px, 3vw, 26px)",
            margin: "20px 0 30px",
            color: "#ddd",
          }}
        >
          Your home for phones, gaming and modern tech.
        </p>

        <a
          href="#shop"
          style={{
            display: "inline-block",
            background: "#fff",
            color: "#000",
            padding: "15px 30px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "17px",
          }}
        >
          Explore our tech ↓
        </a>
      </section>

      {/* SHOP SECTION */}
      <section
        id="shop"
        style={{
          minHeight: "100vh",
          padding: "80px 20px",
          boxSizing: "border-box",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(36px, 7vw, 60px)",
            marginBottom: "15px",
          }}
        >
          Tech worth grabbing.
        </h2>

        <p
          style={{
            maxWidth: "650px",
            margin: "0 auto 50px",
            color: "#bbb",
            fontSize: "18px",
            lineHeight: "1.6",
          }}
        >
          Discover phones, gaming gear and everyday technology chosen for
          people who want great tech without the hassle.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          {/* PHONES */}
          <a
            href="#phones"
            style={{
              width: "280px",
              padding: "35px 20px",
              background: "#111",
              border: "1px solid #333",
              borderRadius: "15px",
              color: "#fff",
              textDecoration: "none",
              boxSizing: "border-box",
            }}
          >
            <div style={{ fontSize: "55px" }}>📱</div>
            <h3 style={{ fontSize: "26px" }}>Phones</h3>
            <p style={{ color: "#aaa", lineHeight: "1.5" }}>
              Discover new and refurbished phones ready for your next upgrade.
            </p>
            <strong>View phones →</strong>
          </a>

          {/* GAMING */}
          <a
            href="#gaming"
            style={{
              width: "280px",
              padding: "35px 20px",
              background: "#111",
              border: "1px solid #333",
              borderRadius: "15px",
              color: "#fff",
              textDecoration: "none",
              boxSizing: "border-box",
            }}
          >
            <div style={{ fontSize: "55px" }}>🎮</div>
            <h3 style={{ fontSize: "26px" }}>Gaming</h3>
            <p style={{ color: "#aaa", lineHeight: "1.5" }}>
              Classic gaming, modern consoles and accessories for gamers.
            </p>
            <strong>Explore gaming →</strong>
          </a>

          {/* TECH */}
          <a
            href="#tech"
            style={{
              width: "280px",
              padding: "35px 20px",
              background: "#111",
              border: "1px solid #333",
              borderRadius: "15px",
              color: "#fff",
              textDecoration: "none",
              boxSizing: "border-box",
            }}
          >
            <div style={{ fontSize: "55px" }}>💻</div>
            <h3 style={{ fontSize: "26px" }}>Tech</h3>
            <p style={{ color: "#aaa", lineHeight: "1.5" }}>
              Useful technology and accessories for everyday life.
            </p>
            <strong>See technology →</strong>
          </a>
        </div>
      </section>

      {/* PHONES */}
      <section
        id="phones"
        style={{
          padding: "100px 20px",
          textAlign: "center",
          background: "#080808",
        }}
      >
        <div style={{ fontSize: "60px" }}>📱</div>

        <h2 style={{ fontSize: "clamp(36px, 7vw, 60px)" }}>
          Upgrade your phone.
        </h2>

        <p
          style={{
            maxWidth: "650px",
            margin: "0 auto",
            color: "#bbb",
            fontSize: "18px",
            lineHeight: "1.7",
          }}
        >
          Looking for your next phone? GrabitUK is built around making modern
          technology easier to find, compare and grab.
        </p>
      </section>

      {/* GAMING */}
      <section
        id="gaming"
        style={{
          padding: "100px 20px",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "60px" }}>🎮</div>

        <h2 style={{ fontSize: "clamp(36px, 7vw, 60px)" }}>
          Game on.
        </h2>

        <p
          style={{
            maxWidth: "650px",
            margin: "0 auto",
            color: "#bbb",
            fontSize: "18px",
            lineHeight: "1.7",
          }}
        >
          From nostalgic handheld gaming to modern setups, discover tech made
          for people who love to play.
        </p>
      </section>

      {/* TECH */}
      <section
        id="tech"
        style={{
          padding: "100px 20px",
          textAlign: "center",
          background: "#080808",
        }}
      >
        <div style={{ fontSize: "60px" }}>💻</div>

        <h2 style={{ fontSize: "clamp(36px, 7vw, 60px)" }}>
          More than just phones.
        </h2>

        <p
          style={{
            maxWidth: "650px",
            margin: "0 auto",
            color: "#bbb",
            fontSize: "18px",
            lineHeight: "1.7",
          }}
        >
          Explore a growing range of technology, accessories and gadgets
          designed to make everyday life a little smarter.
        </p>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "50px 20px",
          textAlign: "center",
          borderTop: "1px solid #222",
        }}
      >
        <h2 style={{ margin: 0 }}>GRABITUK</h2>
        <p style={{ color: "#777" }}>
          The latest tech, all in one place.
        </p>
      </footer>
    </main>
  );
}
