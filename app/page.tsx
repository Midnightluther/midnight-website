"use client";

import { useState } from "react";

export default function Home() {
  const [access, setAccess] = useState(false);
  const [key, setKey] = useState("");

  const unlock = () => {
    setAccess(true);
  };

  if (!access) {
    return (
      <main
        style={{
          minHeight: "100vh",
          width: "100%",
          background:
            "radial-gradient(circle at center, #101a14 0%, #050505 45%, #000 100%)",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "430px",
            margin: "0 auto",
            padding: "42px 24px",
            background: "rgba(5,10,8,0.96)",
            border: "2px solid white",
            boxShadow: "0 0 40px rgba(0,255,136,0.12)",
            boxSizing: "border-box",
          }}
        >
          <p
            style={{
              color: "#00ff88",
              fontSize: "11px",
              letterSpacing: "3px",
              margin: "0 0 18px",
            }}
          >
            ● SYSTEM READY
          </p>

          <h1
            style={{
              margin: "0 0 18px",
              fontSize: "clamp(34px, 9vw, 58px)",
              fontWeight: 800,
              letterSpacing: "1px",
              lineHeight: 1,
              color: "white",
              textAlign: "center",
              textShadow:
                "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000",
            }}
          >
            GRABITUK
          </h1>

          <p
            style={{
              color: "#aaa",
              letterSpacing: "4px",
              fontSize: "13px",
              margin: "0 0 12px",
            }}
          >
            SECURE ACCESS
          </p>

          <p
            style={{
              color: "#666",
              fontSize: "13px",
              margin: "0 0 20px",
            }}
          >
            Enter your access key to continue
          </p>

          <input
            type="text"
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
              letterSpacing: "4px",
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
            ENTER
          </button>

          <p
            style={{
              color: "#555",
              fontSize: "11px",
              letterSpacing: "2px",
              margin: "18px 0 0",
            }}
          >
            GRABITUK ACCESS
          </p>
        </div>
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "white",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif",
      }}
    >
      {/* HERO */}

      <section
        style={{
          minHeight: "55vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "50px 20px 25px",
          boxSizing: "border-box",
        }}
      >
        <p
          style={{
            color: "#00ff88",
            letterSpacing: "4px",
            fontSize: "12px",
            marginBottom: "18px",
          }}
        >
          WELCOME TO GRABITUK
        </p>

        <h1
          style={{
            fontSize: "clamp(42px, 9vw, 80px)",
            margin: "0",
            fontWeight: 900,
            letterSpacing: "3px",
          }}
        >
          TECH. PRIVACY. MODS.
        </h1>

        <p
          style={{
            fontSize: "clamp(20px, 4vw, 30px)",
            color: "#00ff88",
            marginTop: "15px",
            fontWeight: 700,
            marginBottom: "8px",
          }}
        >
          YOUR WAY.
        </p>

        <p
          style={{
            maxWidth: "550px",
            color: "#888",
            lineHeight: 1.6,
            marginTop: "10px",
            fontSize: "15px",
          }}
        >
          The fun side of tech.
        </p>
      </section>

      {/* PRODUCTS */}

      <section
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "10px 20px 80px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "32px",
            marginBottom: "45px",
          }}
        >
          EXPLORE GRABITUK
        </h2>

        {/* PRIVACY PHONES */}

        <a
          href="#privacy-phones"
          style={{
            display: "block",
            textDecoration: "none",
            color: "white",
            background: "#080808",
            border: "1px solid #222",
            marginBottom: "30px",
            overflow: "hidden",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              height: "350px",
              background:
                "linear-gradient(145deg, #111 0%, #050505 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "100px",
            }}
          >
            📱
          </div>

          <div
            style={{
              padding: "25px",
              textAlign: "center",
            }}
          >
            <h2 style={{ margin: "0 0 10px" }}>
              Privacy Phones
            </h2>

            <p
              style={{
                color: "#888",
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              Pixel devices with GrapheneOS privacy features and carefully
              configured settings.
            </p>
          </div>
        </a>

        {/* OTHER DEVICES */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
          }}
        >
          {/* MODDED DEVICES */}

          <a
            href="#modded-devices"
            style={{
              display: "block",
              textDecoration: "none",
              color: "white",
              background: "#080808",
              border: "1px solid #222",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                height: "280px",
                background:
                  "linear-gradient(145deg, #111 0%, #050505 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "85px",
              }}
            >
              🎮
            </div>

            <div
              style={{
                padding: "22px",
                textAlign: "center",
              }}
            >
              <h3 style={{ margin: "0 0 10px" }}>
                Modded Devices
              </h3>

              <p
                style={{
                  color: "#888",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Custom handhelds with unique software, themes and setups.
              </p>
            </div>
          </a>

          {/* CUSTOM TECH */}

          <a
            href="#custom-tech"
            style={{
              display: "block",
              textDecoration: "none",
              color: "white",
              background: "#080808",
              border: "1px solid #222",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                height: "280px",
                background:
                  "linear-gradient(145deg, #111 0%, #050505 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "85px",
              }}
            >
              ⚡
            </div>

            <div
              style={{
                padding: "22px",
                textAlign: "center",
              }}
            >
              <h3 style={{ margin: "0 0 10px" }}>
                Custom Tech
              </h3>

              <p
                style={{
                  color: "#888",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Accessories and personalised technology for people who want
                something different.
              </p>
            </div>
          </a>
        </div>
      </section>

      {/* CONTACT */}

      <footer
        style={{
          borderTop: "1px solid #151515",
          padding: "35px 20px",
          textAlign: "center",
        }}
      >
        <a
          href="mailto:Grabituk@proton.me"
          aria-label="Email GrabitUK"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "55px",
            height: "55px",
            border: "1px solid #333",
            borderRadius: "50%",
            background: "#080808",
            color: "#00ff88",
            textDecoration: "none",
            fontSize: "25px",
            marginBottom: "12px",
          }}
        >
          ✉
        </a>

        <div
          style={{
            color: "#888",
            fontSize: "13px",
            marginBottom: "12px",
          }}
        >
          Email:{" "}
          <a
            href="mailto:Grabituk@proton.me"
            style={{
              color: "#00ff88",
              textDecoration: "none",
            }}
          >
            Grabituk@proton.me
          </a>
        </div>

        <div
          style={{
            color: "#555",
            letterSpacing: "2px",
            fontSize: "12px",
          }}
        >
          GRABITUK
        </div>

        <div
          style={{
            color: "#333",
            letterSpacing: "2px",
            marginTop: "5px",
            fontSize: "11px",
          }}
        >
          TECH. PRIVACY. MODS.
        </div>
      </footer>
    </main>
  );
}
