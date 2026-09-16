"use client";

import { useState } from "react";

export default function Home() {
  const [access, setAccess] = useState(false);
  const [key, setKey] = useState("");
  const [openCard, setOpenCard] = useState<string | null>(null);

  const unlock = () => {
    setAccess(true);
  };

  const toggleCard = (card: string) => {
    setOpenCard(openCard === card ? null : card);
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
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            width: "min(90%, 500px)",
            padding: "45px 30px",
            background: "rgba(5,10,8,0.95)",
            border: "2px solid white",
            boxShadow: "0 0 40px rgba(0,255,136,0.12)",
            boxSizing: "border-box",
          }}
        >
          <p
            style={{
              color: "#00ff88",
              fontSize: "11px",
              letterSpacing: "4px",
            }}
          >
            ● SECURE SYSTEM ONLINE
          </p>

          <h1
            style={{
              margin: "20px 0",
              fontSize: "clamp(42px, 10vw, 72px)",
              fontWeight: 800,
              letterSpacing: "4px",
              color: "white",
              fontFamily:
                "Arial Black, Impact, Helvetica Neue, Arial, sans-serif",
              textShadow:
                "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 0 22px rgba(0,255,136,0.15)",
            }}
          >
            GRABITUK
          </h1>

          <p
            style={{
              color: "#aaa",
              letterSpacing: "3px",
              fontSize: "14px",
            }}
          >
            SECURE ACCESS
          </p>

          <p style={{ color: "#666", fontSize: "13px" }}>
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
              marginTop: "15px",
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
            UNLOCK
          </button>

          <p
            style={{
              color: "#555",
              fontSize: "12px",
              letterSpacing: "2px",
              marginTop: "18px",
            }}
          >
            SYSTEM LOCKED
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
          }}
        >
          ● ACCESS GRANTED
        </p>

        <h1
          style={{
            margin: 0,
            fontSize: "clamp(55px, 13vw, 130px)",
            fontWeight: 900,
            letterSpacing: "7px",
            lineHeight: 0.9,
            color: "white",
            fontFamily:
              "Arial Black, Impact, Helvetica Neue, Arial, sans-serif",
            textShadow:
              "-3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000, 3px 3px 0 #000, 0 0 35px rgba(0,255,136,0.12)",
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

      {/* INFO */}
      <section
        id="explore"
        style={{
          padding: "100px 20px 50px",
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

      {/* CLICKABLE CARDS */}
      <section
        style={{
          padding: "40px 20px 100px",
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
          {/* PHONES */}
          <div>
            <button
              onClick={() => toggleCard("phones")}
              style={{
                width: "100%",
                background: "#0d0d0d",
                border: openCard === "phones"
                  ? "1px solid #00ff88"
                  : "1px solid #222",
                color: "white",
                padding: "35px 25px",
                textAlign: "left",
                cursor: "pointer",
              }}
            >
              <div style={{ fontSize: "40px" }}>🔐</div>

              <h3 style={{ fontSize: "24px", marginBottom: "10px" }}>
                Privacy Phones
              </h3>

              <p style={{ color: "#888", lineHeight: 1.7 }}>
                Privacy-focused Pixel devices and setup services.
              </p>

              <span
                style={{
                  color: "#00ff88",
                  fontSize: "11px",
                  letterSpacing: "2px",
                }}
              >
                {openCard === "phones"
                  ? "CLOSE ↑"
                  : "TAP TO EXPLORE ↓"}
              </span>
            </button>

            {openCard === "phones" && (
              <div
                style={{
                  background: "#101010",
                  border: "1px solid #222",
                  borderTop: "none",
                  padding: "25px",
                  color: "#999",
                  lineHeight: 1.7,
                  textAlign: "left",
                }}
              >
                <strong style={{ color: "white" }}>
                  Pixel + GrapheneOS
                </strong>

                <p>
                  We focus on compatible Google Pixel devices running
                  GrapheneOS — a privacy-focused mobile operating system
                  built around giving you more control over your phone.
                </p>

                <p>
                  Things can include stronger app isolation, more control
                  over permissions, separate user profiles and optional
                  Google services rather than having everything tied
                  together by default.
                </p>

                <p
                  style={{
                    color: "#00ff88",
                    fontSize: "12px",
                    letterSpacing: "1px",
                  }}
                >
                  The interesting stuff is under the surface.
                </p>
              </div>
            )}
          </div>

          {/* GAMING */}
          <div>
            <button
              onClick={() => toggleCard("gaming")}
              style={{
                width: "100%",
                background: "#0d0d0d",
                border: openCard === "gaming"
                  ? "1px solid #00ff88"
                  : "1px solid #222",
                color: "white",
                padding: "35px 25px",
                textAlign: "left",
                cursor: "pointer",
              }}
            >
              <div style={{ fontSize: "40px" }}>🎮</div>

              <h3 style={{ fontSize: "24px", marginBottom: "10px" }}>
                Modded Devices
              </h3>

              <p style={{ color: "#888", lineHeight: 1.7 }}>
                Customised Nintendo and handheld devices.
              </p>

              <span
                style={{
                  color: "#00ff88",
                  fontSize: "11px",
                  letterSpacing: "2px",
                }}
              >
                {openCard === "gaming"
                  ? "CLOSE ↑"
                  : "TAP TO EXPLORE ↓"}
              </span>
            </button>

            {openCard === "gaming" && (
              <div
                style={{
                  background: "#101010",
                  border: "1px solid #222",
                  borderTop: "none",
                  padding: "25px",
                  color: "#999",
                  lineHeight: 1.7,
                  textAlign: "left",
                }}
              >
                <strong style={{ color: "white" }}>
                  Custom handhelds
                </strong>

                <p>
                  Personalised handheld setups with legitimate homebrew,
                  themes, custom menus and useful system tools.
                </p>

                <p>
                  The aim is to make a device feel like your own rather
                  than leaving it completely stock.
                </p>

                <p
                  style={{
                    color: "#00ff88",
                    fontSize: "12px",
                    letterSpacing: "1px",
                  }}
                >
                  Built around the device. Built around you.
                </p>
              </div>
            )}
          </div>

          {/* CUSTOM TECH */}
          <div>
            <button
              onClick={() => toggleCard("tech")}
              style={{
                width: "100%",
                background: "#0d0d0d",
                border: openCard === "tech"
                  ? "1px solid #00ff88"
                  : "1px solid #222",
                color: "white",
                padding: "35px 25px",
                textAlign: "left",
                cursor: "pointer",
              }}
            >
              <div style={{ fontSize: "40px" }}>⚡</div>

              <h3 style={{ fontSize: "24px", marginBottom: "10px" }}>
                Custom Tech
              </h3>

              <p style={{ color: "#888", lineHeight: 1.7 }}>
                Interesting technology and customised setups.
              </p>

              <span
                style={{
                  color: "#00ff88",
                  fontSize: "11px",
                  letterSpacing: "2px",
                }}
              >
                {openCard === "tech"
                  ? "CLOSE ↑"
                  : "TAP TO EXPLORE ↓"}
              </span>
            </button>

            {openCard === "tech" && (
              <div
                style={{
                  background: "#101010",
                  border: "1px solid #222",
                  borderTop: "none",
                  padding: "25px",
                  color: "#999",
                  lineHeight: 1.7,
                  textAlign: "left",
                }}
              >
                <strong style={{ color: "white" }}>
                  Something different
                </strong>

                <p>
                  Custom accessories, unusual tech and personalised
                  setups for people who don't want the standard experience.
                </p>

                <p>
                  This is where new ideas, custom builds and future
                  GrabitUK projects can live.
                </p>

                <p
                  style={{
                    color: "#00ff88",
                    fontSize: "12px",
                    letterSpacing: "1px",
                  }}
                >
                  More coming soon.
                </p>
              </div>
            )}
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
        <h2 style={{ margin: 0, letterSpacing: "4px" }}>
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
