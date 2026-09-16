"use client";

import { useState } from "react";

export default function Home() {
  const [access, setAccess] = useState(false);
  const [key, setKey] = useState("");
  const [error, setError] = useState(false);

  const unlock = () => {
    if (key.toUpperCase() === "GRABIT") {
      setAccess(true);
      setError(false);
    } else {
      setError(true);
      setKey("");
    }
  };

  if (!access) {
    return (
      <main
        style={{
          minHeight: "100vh",
          background:
            "radial-gradient(circle at center, #101a14 0%, #050505 45%, #000 100%)",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          fontFamily: "Arial, Helvetica, sans-serif",
          padding: "20px",
        }}
      >
        <div
          style={{
            width: "min(90%, 500px)",
            padding: "45px 30px",
            background: "rgba(5,10,8,0.9)",
            border: "1px solid rgba(0,255,136,0.3)",
            boxShadow: "0 0 50px rgba(0,255,136,0.08)",
          }}
        >
          <div
            style={{
              color: "#00ff88",
              fontSize: "11px",
              letterSpacing: "4px",
              marginBottom: "20px",
            }}
          >
            ● SECURE SYSTEM ONLINE
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: "clamp(45px, 11vw, 80px)",
              fontWeight: 900,
              letterSpacing: "8px",
            }}
          >
            GRABITUK
          </h1>

          <p
            style={{
              color: "#aaa",
              letterSpacing: "3px",
              marginTop: "20px",
              fontSize: "14px",
            }}
          >
            SECURE ACCESS
          </p>

          <p
            style={{
              color: "#666",
              fontSize: "13px",
              marginBottom: "30px",
            }}
          >
            Enter your access key to continue
          </p>

          <input
            type="password"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") unlock();
            }}
            placeholder="ACCESS KEY"
            style={{
              width: "100%",
              padding: "16px",
              background: "#000",
              border: "1px solid #333",
              color: "#00ff88",
              textAlign: "center",
              fontSize: "16px",
              letterSpacing: "5px",
              outline: "none",
              boxSizing: "border-box",
            }}
          />

          <button
            onClick={unlock}
            style={{
              width: "100%",
              marginTop: "12px",
              padding: "16px",
              background: "#00ff88",
              color: "#000",
              border: "none",
              fontWeight: 900,
              letterSpacing: "2px",
              cursor: "pointer",
            }}
          >
            UNLOCK
          </button>

          <p
            style={{
              color: error ? "#ff4545" : "#555",
              fontSize: "12px",
              letterSpacing: "2px",
              marginTop: "18px",
            }}
          >
            {error ? "ACCESS DENIED" : "SYSTEM LOCKED"}
          </p>
        </div>
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "white",
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
          background:
            "radial-gradient(circle at center, #101a14 0%, #050505 50%, #000 100%)",
        }}
      >
        <p
          style={{
            color: "#00ff88",
            letterSpacing: "4px",
            fontSize: "11px",
            marginBottom: "25px",
          }}
        >
          ● ACCESS GRANTED
        </p>

        <h1
          style={{
            margin: 0,
            fontSize: "clamp(55px, 13vw, 130px)",
            fontWeight: 900,
            letterSpacing: "8px",
            lineHeight: 0.9,
            background:
              "linear-gradient(180deg, #ffffff, #999999, #ffffff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          GRABITUK
        </h1>

        <p
          style={{
            marginTop: "35px",
            color: "#aaa",
            fontSize: "clamp(15px, 2vw, 20px)",
            letterSpacing: "3px",
          }}
        >
          TECH. PRIVACY. MODS. YOUR WAY.
        </p>

        <a
          href="#explore"
          style={{
            marginTop: "45px",
            padding: "15px 30px",
            border: "1px solid #00ff88",
            color: "#00ff88",
            textDecoration: "none",
            letterSpacing: "2px",
            fontSize: "12px",
          }}
        >
          EXPLORE GRABITUK ↓
        </a>
      </section>

      {/* INTRO */}

      <section
        id="explore"
        style={{
          padding: "100px 20px",
          textAlign: "center",
          background: "#080808",
        }}
      >
        <p
          style={{
            color: "#00ff88",
            letterSpacing: "4px",
            fontSize: "11px",
          }}
        >
          WHAT WE DO
        </p>

        <h2
          style={{
            fontSize: "clamp(35px, 7vw, 65px)",
            margin: "15px 0 20px",
          }}
        >
          Technology without the boring.
        </h2>

        <p
          style={{
            maxWidth: "650px",
            margin: "auto",
            color: "#888",
            lineHeight: 1.7,
            fontSize: "17px",
          }}
        >
          GrabitUK focuses on the more interesting side of technology —
          privacy-focused phones, customised gaming devices and tech
          built around the way you actually want to use it.
        </p>
      </section>

      {/* CARDS */}

      <section
        style={{
          padding: "20px 20px 100px",
          background: "#080808",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {/* PHONE */}

          <div
            style={{
              background: "#0d0d0d",
              border: "1px solid #222",
              padding: "35px 25px",
            }}
          >
            <div style={{ fontSize: "40px" }}>🔐</div>

            <h3 style={{ fontSize: "24px" }}>
              Privacy Phones
            </h3>

            <p
              style={{
                color: "#888",
                lineHeight: 1.7,
              }}
            >
              Privacy-focused Pixel devices and setup services
              for people who want more control over their technology.
            </p>
          </div>

          {/* GAMING */}

          <div
            style={{
              background: "#0d0d0d",
              border: "1px solid #222",
              padding: "35px 25px",
            }}
          >
            <div style={{ fontSize: "40px" }}>🎮</div>

            <h3 style={{ fontSize: "24px" }}>
              Modded Devices
            </h3>

            <p
              style={{
                color: "#888",
                lineHeight: 1.7,
              }}
            >
              Customised Nintendo and handheld devices with
              legitimate homebrew, themes and personalised setups.
            </p>
          </div>

          {/* TECH */}

          <div
            style={{
              background: "#0d0d0d",
              border: "1px solid #222",
              padding: "35px 25px",
            }}
          >
            <div style={{ fontSize: "40px" }}>⚡</div>

            <h3 style={{ fontSize: "24px" }}>
              Custom Tech
            </h3>

            <p
              style={{
                color: "#888",
                lineHeight: 1.7,
              }}
            >
              Interesting technology, accessories and customised
              setups for people who want something different.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer
        style={{
          padding: "50px 20px",
          textAlign: "center",
          borderTop: "1px solid #222",
          background: "#050505",
        }}
      >
        <h2
          style={{
            margin: 0,
            letterSpacing: "4px",
          }}
        >
          GRABITUK
        </h2>

        <p
          style={{
            color: "#555",
            fontSize: "12px",
            letterSpacing: "2px",
          }}
        >
          TECH. PRIVACY. MODS.
        </p>
      </footer>
    </main>
  );
}
