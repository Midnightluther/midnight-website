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
          fontFamily: "Arial, sans-serif",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "430px",
            padding: "42px 24px",
            background: "#050a08",
            border: "2px solid white",
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
              fontWeight: 900,
              color: "white",
            }}
          >
            GRABITUK
          </h1>

          <p
            style={{
              color: "#aaa",
              letterSpacing: "4px",
              fontSize: "13px",
              marginBottom: "12px",
            }}
          >
            SECURE ACCESS
          </p>

          <p
            style={{
              color: "#666",
              fontSize: "13px",
              marginBottom: "20px",
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
              boxSizing: "border-box",
              outline: "none",
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
              marginTop: "18px",
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
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* HERO */}

      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "65px 20px 25px",
        }}
      >
        <p
          style={{
            color: "#00ff88",
            letterSpacing: "4px",
            fontSize: "12px",
            margin: "0 0 18px",
          }}
        >
          WELCOME TO GRABITUK
        </p>

        <h1
          style={{
            fontSize: "clamp(40px, 9vw, 80px)",
            margin: 0,
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
            margin: "15px 0 5px",
            fontWeight: 700,
          }}
        >
          YOUR WAY.
        </p>

        <p
          style={{
            color: "#888",
            fontSize: "15px",
            margin: "5px 0 0",
          }}
        >
          The fun side of tech.
        </p>
      </section>

      {/* EXPLORE */}

      <section
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "15px 20px 70px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "32px",
            margin: "0 0 30px",
          }}
        >
          EXPLORE GRABITUK
        </h2>

        {/* PRIVACY PHONES */}

        <div
          style={{
            background: "#080808",
            border: "1px solid #222",
            marginBottom: "25px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "300px",
              background: "linear-gradient(145deg, #111, #050505)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "90px",
            }}
          >
            📱
          </div>

          <div
            style={{
              padding: "22px",
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
        </div>

        {/* TWO BOXES */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "25px",
          }}
        >
          <div
            style={{
              background: "#080808",
              border: "1px solid #222",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "250px",
                background: "linear-gradient(145deg, #111, #050505)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "80px",
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
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                Custom handhelds with unique software, themes and setups.
              </p>
            </div>
          </div>

          <div
            style={{
              background: "#080808",
              border: "1px solid #222",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "250px",
                background: "linear-gradient(145deg, #111, #050505)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "80px",
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
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                Accessories and personalised technology for people who want
                something different.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}

      <footer
        style={{
          borderTop: "1px solid #222",
          padding: "40px 20px",
          textAlign: "center",
          background: "#050505",
        }}
      >
        <h3
          style={{
            margin: "0 0 18px",
            letterSpacing: "2px",
          }}
        >
          CONTACT GRABITUK
        </h3>

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
            background: "#0b0b0b",
            color: "#00ff88",
            textDecoration: "none",
            fontSize: "25px",
            marginBottom: "15px",
          }}
        >
          ✉
        </a>

        <div
          style={{
            color: "#aaa",
            fontSize: "14px",
            marginBottom: "20px",
          }}
        >
          Email:{" "}
          <a
            href="mailto:Grabituk@proton.me"
            style={{
              color: "#00ff88",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Grabituk@proton.me
          </a>
        </div>

        <div
          style={{
            color: "#555",
            fontSize: "12px",
            letterSpacing: "2px",
          }}
        >
          GRABITUK
        </div>

        <div
          style={{
            color: "#333",
            fontSize: "11px",
            letterSpacing: "2px",
            marginTop: "6px",
          }}
        >
          TECH. PRIVACY. MODS.
        </div>
      </footer>
    </main>
  );
}
